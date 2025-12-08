import React, { useState } from "react";

export default function MicrobiomeExplorer() {
  const [resultHtml, setResultHtml] = useState("");

  // ======================================================
  //  WEIGHT CONFIG — diet weighted HIGHER, abx weighted lower
  // ======================================================
  const WEIGHTS = {
    diet: 2.5,           // Strongest effect
    abx: 1.0,            // Lower weight than before
    birth: 1.5,
    env: 1.5,
    ferm: 2.0,
    mig: 1.2,
    exposure: 1.8,
    sleep: 1.2,
    stress: 1.4,
    activity: 1.3,
    fiberConsistency: 2.0,
    processedFoods: 2.4,
    sweeteners: 1.1,
    smoking: 1.3,
    alcohol: 1.1
  };

  // ======================================================
  //  LIFESTYLE SCORE CALCULATION WITH WEIGHTS APPLIED
  // ======================================================
  function computeWeightedScore(form) {
    let total = 0;
    for (const key in WEIGHTS) {
      const raw = parseInt(form[key] || 0, 10);
      total += raw * WEIGHTS[key];
    }
    return Math.min(100, Math.round(total));
  }

  function categorizeLifestyle(loss) {
    if (loss <= 25)
      return { label: "Low microbial loss / high ecological resilience", chipClass: "chip-good" };
    if (loss <= 55)
      return { label: "Moderate lifestyle-linked disruption", chipClass: "chip-mid" };
    return { label: "High disruption risk to gut ecosystem", chipClass: "chip-bad" };
  }

  function categorizeDiversity(div) {
    if (div >= 66)
      return { label: "High microbial diversity", chipClass: "chip-good" };
    if (div >= 33)
      return { label: "Moderate microbial diversity", chipClass: "chip-mid" };
    return { label: "Low microbial diversity", chipClass: "chip-bad" };
  }

  // ======================================================
  // CSV + Shannon index
  // ======================================================
  function parseCSV(text) {
    const lines = text.trim().split(/\r?\n/);
    const header = lines[0].split(",");
    const abundanceIndex = header.indexOf("relative_abundance");
    const nameIndex = header.indexOf("taxon_name");

    let entries = [];

    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i].split(",");
      let val = parseFloat(cols[abundanceIndex]);
      if (isNaN(val)) continue;
      if (val > 1) val /= 100;
      if (val <= 0) continue;

      const name = nameIndex !== -1 ? cols[nameIndex] || `Taxon ${i}` : `Taxon ${i}`;
      entries.push({ name, value: val });
    }

    const total = entries.reduce((a, e) => a + e.value, 0);
    const normalized = entries.map((e) => ({ name: e.name, p: e.value / total }));

    // Shannon H
    let H = 0;
    normalized.forEach((e) => (H -= e.p * Math.log(e.p)));

    const diversityScore = Math.min(100, Math.max(0, (H / 4) * 100));

    const topTaxa = normalized
      .sort((a, b) => b.p - a.p)
      .slice(0, 5)
      .map((e) => ({ ...e, percent: e.p * 100 }));

    return { H, diversityScore, topTaxa };
  }

  // ======================================================
  // SUBMIT HANDLER
  // ======================================================
  async function handleCalculate(e) {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target).entries());

    const file = form.csvInput;
    if (!file || file.size === 0) {
      alert("Please upload a gut microbiome CSV file.");
      return;
    }

    const csvText = await file.text();
    const { H, diversityScore, topTaxa } = parseCSV(csvText);

    const lifestyleScore = computeWeightedScore(form);
    const lifestyleCat = categorizeLifestyle(lifestyleScore);
    const diversityCat = categorizeDiversity(diversityScore);

    // ------- TOP TAXA HTML -------
    let taxaHtml = "";
    if (topTaxa.length > 0) {
      taxaHtml =
        "<h3>Top taxa in your sample</h3>" +
        "<p class='subtitle'>These are the five most dominant groups after renormalizing to 100%.</p>" +
        "<ul>" +
        topTaxa
          .map(
            (t) =>
              `<li><b>${t.name}</b>: ${t.percent.toFixed(1)}% of total community abundance</li>`
          )
          .join("") +
        "</ul>";
    }

    // ------- GENERATE LONG INTERPRETIVE TEXT -------
    const narrative = generateNarrative(lifestyleScore, diversityScore, topTaxa);

    setResultHtml(`
      <h2>3. Results & Interpretation</h2>

      <div class="score-section">
        <div class="score-row">
          <div class="score-header">
            <div class="score-label">Lifestyle Microbial Loss Score</div>
            <div class="score-number">${lifestyleScore} / 100</div>
          </div>
          <div class="score-bar">
            <div class="score-bar-fill" style="width:${lifestyleScore}%;"></div>
          </div>
          <div class="score-meta">
            <span>${lifestyleCat.label}</span>
            <span class="chip ${lifestyleCat.chipClass}">Lifestyle profile</span>
          </div>
        </div>

        <div class="score-row">
          <div class="score-header">
            <div class="score-label">Data-based Diversity Score</div>
            <div class="score-number">${Math.round(diversityScore)} / 100</div>
          </div>
          <div class="score-bar">
            <div class="score-bar-fill" style="width:${diversityScore}%;"></div>
          </div>
          <div class="score-meta">
            <span>${diversityCat.label} (Shannon H ≈ ${H.toFixed(2)})</span>
            <span class="chip ${diversityCat.chipClass}">Microbiome sample</span>
          </div>
        </div>
      </div>

      ${taxaHtml}

      <h3>Interpretation & Microbial Self Narrative</h3>
      <p>${narrative}</p>

      <p class="disclaimer">
        This educational tool simplifies microbiome research and is not intended for clinical interpretation.
      </p>
    `);
  }

  // ======================================================
  // INTERPRETIVE TEXT GENERATOR — LONG DESCRIPTIONS
  // ======================================================
  function generateNarrative(lifestyleScore, diversityScore, topTaxa) {
    let lifestyleText = "";
    let diversityText = "";

    // ---- Lifestyle narrative ----
    if (lifestyleScore <= 25) {
      lifestyleText =
        "Your lifestyle selections suggest a gut environment that supports microbial resilience. Factors such as fiber-rich meals, regular outdoor exposure, lower processed food intake, and consistent fermented food consumption support ecological stability within the gut. These patterns mirror characteristics often seen in traditional or mixed-diet populations with higher biodiversity.";
    } else if (lifestyleScore <= 55) {
      lifestyleText =
        "Your responses indicate a moderate risk of microbiome disruption. While several habits support microbial balance, others — such as inconsistent fiber intake, moderate stress, reduced nature exposure, or occasional processed foods — may pull the ecosystem toward lower diversity. This reflects a transitional lifestyle pattern common in semi-industrialized or urbanizing environments.";
    } else {
      lifestyleText =
        "Your selections align with multiple factors known to reduce microbial diversity, including higher dependence on processed diets, limited plant diversity, lower environmental exposure, and inconsistent consumption of fermented foods. This profile resembles heavily industrialized lifestyle patterns, where microbial ecosystems tend to be less dense, less diverse, and more sensitive to disturbance.";
    }

    // ---- Diversity narrative ----
    if (diversityScore >= 66) {
      diversityText =
        "Your uploaded microbiome sample shows high diversity, a hallmark of functional resilience, metabolic flexibility, and ecological stability. High Shannon entropy often correlates with efficient fiber fermentation, stable short-chain fatty acid (SCFA) production, and a wider network of cross-feeding interactions.";
    } else if (diversityScore >= 33) {
      diversityText =
        "Your sample exhibits moderate diversity, which is typical across many modern populations. This level of diversity supports adequate metabolic functioning but may indicate a system more easily shifted by diet, stress, or antibiotics. Increasing fiber variety and fermented foods could enhance ecological depth.";
    } else {
      diversityText =
        "Your microbiome displays low diversity, a pattern frequently documented in industrialized or highly sanitized environments. Low diversity may indicate reduced SCFA production, fewer functional guilds, and a system more vulnerable to inflammation-associated taxa becoming dominant.";
    }

    const taxaText =
      topTaxa.length > 0
        ? `Your top taxa profile provides additional ecological clues. Dominant taxa can indicate whether your gut environment favors fiber degraders, bile-tolerant strains, mucin specialists, or inflammation-associated microbes.`
        : "";


    return `${lifestyleText} ${diversityText} ${taxaText}`;
  }

  // ======================================================
  // UI
  // ======================================================
  return (
    <div>
      <div className="tagline">Educational prototype · Microbial Self</div>
      <h1>Microbial Diversity Calculator</h1>
      <p className="subtitle">
        A tool combining lifestyle patterns with an uploaded <b>gut microbiome CSV</b>.  
        Designed for learning, not diagnosis.
      </p>

      <div className="container">
        {/* LEFT SIDE */}
        <div>
          <div className="card">
            <h2>1. Upload gut microbiome CSV <small>(required)</small></h2>
            <p>
              Must contain <code>relative_abundance</code>. Optional <code>taxon_name</code>.
            </p>

            <form onSubmit={handleCalculate}>
              <label>Gut microbiome CSV file</label>
              <input type="file" name="csvInput" accept=".csv" required />

              <div className="card">
                <h2>2. Lifestyle & Environment Assessment</h2>

                {/* Existing fields (kept, but scores adjusted implicitly via weights) */}
                <label>Diet pattern</label>
                <select name="diet">
                  <option value="0">Traditional / high-fiber</option>
                  <option value="12">Mixed</option>
                  <option value="25">Western / ultra-processed</option>
                </select>

                <label>Antibiotic exposure</label>
                <select name="abx">
                  <option value="0">None / rare</option>
                  <option value="10">Occasional</option>
                  <option value="18">Frequent</option>
                </select>

                <label>Birth mode</label>
                <select name="birth">
                  <option value="0">Vaginal</option>
                  <option value="12">C-section</option>
                  <option value="6">Not sure</option>
                </select>

                <label>Living environment</label>
                <select name="env">
                  <option value="0">Rural / high nature exposure</option>
                  <option value="7">Suburban</option>
                  <option value="15">Urban / sanitized</option>
                </select>

                <label>Fermented foods / probiotics</label>
                <select name="ferm">
                  <option value="0">Often</option>
                  <option value="6">Sometimes</option>
                  <option value="12">Never</option>
                </select>

                <label>Migration / major relocation</label>
                <select name="mig">
                  <option value="0">No</option>
                  <option value="5">Within last 5 years</option>
                  <option value="9">Multiple / long-term</option>
                </select>

                <label>Outdoor / animal / soil exposure</label>
                <select name="exposure">
                  <option value="0">Regular</option>
                  <option value="6">Some</option>
                  <option value="12">Minimal</option>
                </select>

                {/* NEW QUESTIONS */}
                <label>Sleep quality</label>
                <select name="sleep">
                  <option value="0">Consistent & restorative</option>
                  <option value="5">Variable</option>
                  <option value="10">Poor / irregular</option>
                </select>

                <label>Stress level</label>
                <select name="stress">
                  <option value="0">Low</option>
                  <option value="6">Moderate</option>
                  <option value="12">High</option>
                </select>

                <label>Physical activity</label>
                <select name="activity">
                  <option value="0">Regular</option>
                  <option value="5">Occasional</option>
                  <option value="10">Rare</option>
                </select>

                <label>Consistency of fiber intake</label>
                <select name="fiberConsistency">
                  <option value="0">Daily diverse plant intake</option>
                  <option value="10">Some days</option>
                  <option value="18">Rarely</option>
                </select>

                <label>Ultra-processed foods</label>
                <select name="processedFoods">
                  <option value="0">Rare</option>
                  <option value="10">Moderate</option>
                  <option value="20">Frequent</option>
                </select>

                <label>Artificial sweeteners</label>
                <select name="sweeteners">
                  <option value="0">None</option>
                  <option value="5">Occasional</option>
                  <option value="10">Frequent</option>
                </select>

                <label>Smoking or vaping</label>
                <select name="smoking">
                  <option value="0">None</option>
                  <option value="8">Occasional</option>
                  <option value="14">Frequent</option>
                </select>

                <label>Alcohol intake</label>
                <select name="alcohol">
                  <option value="0">Low</option>
                  <option value="6">Moderate</option>
                  <option value="12">High</option>
                </select>

                <button type="submit">Calculate</button>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE RESULTS */}
        <div className="container">
        <div
          className="card card-full"
          dangerouslySetInnerHTML={{ __html: resultHtml }}
        ></div>
        </div>
      </div>
    </div>
  );
}
