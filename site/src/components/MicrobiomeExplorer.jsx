import React, { useState } from "react";

export default function MicrobiomeExplorer() {
  const [resultHtml, setResultHtml] = useState("");

  // ----------------------------
  // Lifestyle score
  // ----------------------------
  function computeLifestyleLossScore(form) {
    const fields = ["diet", "abx", "birth", "env", "ferm", "mig", "exposure"];
    return fields.reduce((sum, f) => sum + parseInt(form[f] || 0, 10), 0);
  }

  function categorizeLifestyle(loss) {
    if (loss <= 25)
      return { label: "Low microbial loss / high resilience", chipClass: "chip-good" };
    if (loss <= 55)
      return { label: "Moderate microbial loss risk", chipClass: "chip-mid" };
    return { label: "High microbial loss risk", chipClass: "chip-bad" };
  }

  function categorizeDiversity(div) {
    if (div >= 66)
      return { label: "High microbial diversity", chipClass: "chip-good" };
    if (div >= 33)
      return { label: "Moderate microbial diversity", chipClass: "chip-mid" };
    return { label: "Low microbial diversity", chipClass: "chip-bad" };
  }

  // ----------------------------
  // CSV parsing + Shannon H
  // ----------------------------
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

    // Shannon index H
    let H = 0;
    normalized.forEach((e) => (H -= e.p * Math.log(e.p)));

    const diversityScore = Math.min(100, Math.max(0, (H / 4) * 100));

    const topTaxa = normalized
      .sort((a, b) => b.p - a.p)
      .slice(0, 5)
      .map((e) => ({ ...e, percent: e.p * 100 }));

    return { H, diversityScore, topTaxa };
  }

  // ----------------------------
  // Calculate
  // ----------------------------
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

    const lifestyleScore = computeLifestyleLossScore(form);
    const lifestyleCat = categorizeLifestyle(lifestyleScore);
    const diversityCat = categorizeDiversity(diversityScore);

    let taxaHtml = "";
    if (topTaxa.length > 0) {
      taxaHtml =
        "<h3>Top taxa in your uploaded sample</h3>" +
        "<p class='subtitle'>Relative abundances renormalized to 100%.</p>" +
        "<ul>" +
        topTaxa
          .map(
            (t) =>
              `<li><b>${t.name}</b>: ${t.percent.toFixed(
                1
              )}% of total relative abundance</li>`
          )
          .join("") +
        "</ul>";
    }

    const interpretation = `
      Combined lifestyle and microbiome data reflect microbial selfhood patterns
      discussed in the course, including diet, antibiotics, environment, and early-life factors.
    `;

    // WRITE OUT IDENTICAL HTML
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

      <h3>How to read this</h3>
      <p>${interpretation}</p>

      <p class="disclaimer">
        This educational tool simplifies microbiome science and should not be used for clinical decision-making.
      </p>
    `);
  }

  return (
    <div>
      {/* === Header === */}
      <div className="tagline">Educational prototype · Microbial Self</div>
      <h1>Microbiome Explorer</h1>
      <p className="subtitle">
        A static, course-inspired tool combining <b>lifestyle & environment</b> with an uploaded
        <b> gut microbiome CSV</b>. Educational only.
      </p>

      {/* === Main layout === */}
      <div className="container">
        {/* LEFT SIDE */}
        <div>
          {/* Upload card */}
          <div className="card">
            <h2>
              1. Upload gut microbiome CSV <small>(required)</small>
            </h2>
            <p>
              Must contain <code>relative_abundance</code>. Optional{" "}
              <code>taxon_name</code>.
            </p>

            <form onSubmit={handleCalculate}>
              <label>Gut microbiome CSV file</label>
              <input type="file" name="csvInput" accept=".csv" required />

              {/* Lifestyle card */}
              <div className="card">
                <h2>2. Lifestyle & environment</h2>
                <p className="subtitle">
                  Approximates diet, industrialization, antibiotics, migration, and environmental exposure.
                </p>

                <label>Diet pattern</label>
                <select name="diet">
                  <option value="0">Traditional / high-fiber</option>
                  <option value="10">Mixed</option>
                  <option value="25">Western / ultra-processed</option>
                </select>

                <label>Antibiotic exposure</label>
                <select name="abx">
                  <option value="0">None / rare</option>
                  <option value="10">Occasional</option>
                  <option value="20">Frequent</option>
                </select>

                <label>Birth mode</label>
                <select name="birth">
                  <option value="0">Vaginal</option>
                  <option value="10">C-section</option>
                  <option value="5">Not sure</option>
                </select>

                <label>Living environment</label>
                <select name="env">
                  <option value="0">Rural / high nature exposure</option>
                  <option value="7">Suburban</option>
                  <option value="15">Urban / highly sanitized</option>
                </select>

                <label>Fermented foods / probiotics</label>
                <select name="ferm">
                  <option value="0">Often</option>
                  <option value="5">Sometimes</option>
                  <option value="10">Never</option>
                </select>

                <label>Migration / major relocation</label>
                <select name="mig">
                  <option value="0">No</option>
                  <option value="7">Yes, within last 5 years</option>
                  <option value="10">Yes, long-term / multiple relocations</option>
                </select>

                <label>Outdoor / animal / soil exposure</label>
                <select name="exposure">
                  <option value="0">Regular</option>
                  <option value="5">Some</option>
                  <option value="10">Minimal</option>
                </select>

                <button type="submit">Calculate</button>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT: Results */}
        <div
          className="card card-full"
          dangerouslySetInnerHTML={{ __html: resultHtml }}
        ></div>
      </div>
    </div>
  );
}

