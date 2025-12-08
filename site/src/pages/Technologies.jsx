import React, { useState } from "react";
import "../styles.css";

export default function Technologies() {
  const [selected, setSelected] = useState("16S");

  return (
    <div>
      {/* HEADER */}
      <div className="tagline">Educational prototype · Microbial Self</div>
      <h1>Technologies & Methods</h1>
      <p className="subtitle">
        From stool to CSV — explore the sequencing and bioinformatics pipelines behind
        the microbiome data used in this project.
      </p>

      {/* MAIN */}
      <div className="container">
        <div>
          {/* INTRO CARD */}
          <div className="card">
            <h2>From stool to CSV – Technologies behind the Microbial Self</h2>
            <p className="subtitle">
              The CSV you upload in the microbiome module is the final output of a long
              journey: sampling, sequencing, and bioinformatics. This tab summarizes the
              major experimental approaches behind microbiome science.
            </p>
            <p>
              Below, you can explore three major approaches—16S rRNA profiling, shotgun
              metagenomics, and metabolomics—by switching between them. Each view highlights
              what the method measures, what questions it can answer, and what is lost
              in translation.
            </p>
          </div>

          {/* TECHNOLOGY SELECTOR */}
          <div className="card">
            <h3>1. Core microbiome technologies</h3>
            <p className="subtitle">
              Choose a technology to see its workflow and what information it provides.
            </p>

            <div className="tech-toggle-group">
              <button
                className={`tech-toggle ${selected === "16S" ? "active" : ""}`}
                onClick={() => setSelected("16S")}
              >
                16S rRNA profiling
              </button>

              <button
                className={`tech-toggle ${selected === "SHOTGUN" ? "active" : ""}`}
                onClick={() => setSelected("SHOTGUN")}
              >
                Shotgun metagenomics
              </button>

              <button
                className={`tech-toggle ${selected === "METABO" ? "active" : ""}`}
                onClick={() => setSelected("METABO")}
              >
                Metabolomics
              </button>
            </div>

            {/* 16S VIEW */}
            {selected === "16S" && (
              <div className="tech-detail">
                <div className="tech-tags">
                  <span className="tech-chip tech-chip-tax">Who is there?</span>
                  <span className="tech-chip tech-chip-cost">Lower cost</span>
                  <span className="tech-chip tech-chip-depth">Coarse resolution</span>
                </div>

                <p>
                  16S rRNA gene sequencing targets a conserved gene in bacteria and archaea.
                  Variable regions are amplified and sequenced, producing amplicon sequence
                  variants (ASVs) or OTUs. Taxonomy is assigned via reference databases.
                </p>

                <div className="pipeline-row">
                  <div className="pipeline-step">
                    <div className="pipeline-dot">1) Sample collection: Stool, swab, biopsy</div>
                  </div>
                  <div className="pipeline-step">
                    <div className="pipeline-dot">2) DNA extraction: Host & microbial DNA</div>
                  </div>
                  <div className="pipeline-step">
                    <div className="pipeline-dot">3) PCR of 16S region e.g., V3–V4</div>
                  </div>
                  <div className="pipeline-step">
                    <div className="pipeline-dot">4) Sequencing MiSeq / similar</div>

                  </div>
                  <div className="pipeline-step">
                    <div className="pipeline-dot">5) Bioinformatics ASVs → taxonomy</div>

                  </div>
                </div>

                <p className="tech-explainer">
                  The final output is a <b>feature table</b> (samples × taxa). Our tool uses a
                  simplified version: one list of <code>relative_abundance</code> values.
                </p>

                <div className="tech-columns">
                  <div>
                    <h4>Strengths</h4>
                    <ul>
                      <li>Low cost, high throughput.</li>
                      <li>Useful for large cohorts.</li>
                      <li>Robust, well-standardized workflows.</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Limitations</h4>
                    <ul>
                      <li>Limited to genus-level in many cases.</li>
                      <li>No functional information.</li>
                      <li>PCR bias influences results.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* SHOTGUN VIEW */}
            {selected === "SHOTGUN" && (
              <div className="tech-detail">
                <div className="tech-tags">
                  <span className="tech-chip tech-chip-tax">Who is there?</span>
                  <span className="tech-chip tech-chip-func">What can they do?</span>
                  <span className="tech-chip tech-chip-depth">Higher depth</span>
                </div>

                <p>
                  Shotgun metagenomics sequences all DNA in the sample. Reads are filtered,
                  assembled, and mapped to reference genomes and gene catalogs. This enables
                  strain-level resolution and functional profiling.
                </p>

                <div className="pipeline-row">
                  <div className="pipeline-step">
                    <div className="pipeline-dot">1</div>
                    <div className="pipeline-text">
                      Sample collection
                      <span>Usually stool</span>
                    </div>
                  </div>
                  <div className="pipeline-step">
                    <div className="pipeline-dot">2</div>
                    <div className="pipeline-text">
                      DNA extraction
                      <span>Microbial & host DNA</span>
                    </div>
                  </div>
                  <div className="pipeline-step">
                    <div className="pipeline-dot">3</div>
                    <div className="pipeline-text">
                      Library prep
                      <span>Fragmentation & barcodes</span>
                    </div>
                  </div>
                  <div className="pipeline-step">
                    <div className="pipeline-dot">4</div>
                    <div className="pipeline-text">
                      Sequencing
                      <span>HiSeq / NovaSeq</span>
                    </div>
                  </div>
                  <div className="pipeline-step">
                    <div className="pipeline-dot">5</div>
                    <div className="pipeline-text">
                      Assembly & mapping
                      <span>Genomes & gene families</span>
                    </div>
                  </div>
                </div>

                <p className="tech-explainer">
                  Shotgun data provide both <b>taxonomic</b> and <b>functional</b> profiles.
                  Our project only uses collapsed taxa abundances, but real studies explore genes,
                  pathways, and metabolic potential.
                </p>

                <div className="tech-columns">
                  <div>
                    <h4>Strengths</h4>
                    <ul>
                      <li>High resolution (genus/species/strains).</li>
                      <li>Functional inference.</li>
                      <li>Reusable for new analyses.</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Limitations</h4>
                    <ul>
                      <li>Expensive.</li>
                      <li>Computationally intensive.</li>
                      <li>Host DNA contamination issues.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* METABO VIEW */}
            {selected === "METABO" && (
              <div className="tech-detail">
                <div className="tech-tags">
                  <span className="tech-chip tech-chip-func">What are they producing?</span>
                  <span className="tech-chip tech-chip-host">Host interface</span>
                </div>

                <p>
                  Metabolomics measures small molecules in stool, blood, or urine. These reflect
                  microbial metabolism, host metabolism, diet, and environment.
                </p>

                <div className="pipeline-row">
                  <div className="pipeline-step">
                    <div className="pipeline-dot">1</div>
                    <div className="pipeline-text">
                      Sample collection
                      <span>Serum, stool, urine</span>
                    </div>
                  </div>
                  <div className="pipeline-step">
                    <div className="pipeline-dot">2</div>
                    <div className="pipeline-text">
                      Extraction
                      <span>Separate metabolites</span>
                    </div>
                  </div>
                  <div className="pipeline-step">
                    <div className="pipeline-dot">3</div>
                    <div className="pipeline-text">
                      MS / NMR
                      <span>Peaks & spectra</span>
                    </div>
                  </div>
                  <div className="pipeline-step">
                    <div className="pipeline-dot">4</div>
                    <div className="pipeline-text">
                      Peak ID
                      <span>Match to libraries</span>
                    </div>
                  </div>
                  <div className="pipeline-step">
                    <div className="pipeline-dot">5</div>
                    <div className="pipeline-text">
                      Modeling
                      <span>Diet, disease, microbiome links</span>
                    </div>
                  </div>
                </div>

                <p className="tech-explainer">
                  Metabolomics answers <b>what is happening right now</b> at the
                  host–microbe interface, including SCFAs, bile acids, and tryptophan metabolites.
                </p>

                <div className="tech-columns">
                  <div>
                    <h4>Strengths</h4>
                    <ul>
                      <li>Captures actual metabolic output.</li>
                      <li>Closer to physiology.</li>
                      <li>Useful for biomarker discovery.</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Limitations</h4>
                    <ul>
                      <li>Signals mix host + diet + microbes.</li>
                      <li>Many metabolites unidentified.</li>
                      <li>Sensitive to handling & processing.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* BIOINFORMATICS PIPELINE */}
          <div className="card">
            <h3>2. Bioinformatics pipeline – from reads to relative abundance</h3>
            <p className="subtitle">
              No matter the wet-lab method, sequencing data follow a similar computational path.
            </p>

            <div className="pipeline-timeline">
              <div className="timeline-stage">
                <div className="timeline-title">1. Quality control</div>
                <div className="timeline-bar">
                  <div className="timeline-fill" style={{ width: "25%" }} />
                </div>
                <p>Remove low-quality reads, trim adapters, filter contaminants.</p>
              </div>

              <div className="timeline-stage">
                <div className="timeline-title">2. Feature construction</div>
                <div className="timeline-bar">
                  <div className="timeline-fill" style={{ width: "50%" }} />
                </div>
                <p>Cluster into ASVs/OTUs or assemble contigs; map to genomes/genes.</p>
              </div>

              <div className="timeline-stage">
                <div className="timeline-title">3. Taxonomy / function assignment</div>
                <div className="timeline-bar">
                  <div className="timeline-fill" style={{ width: "65%" }} />
                </div>
                <p>Assign taxa or annotate pathways using reference catalogs.</p>
              </div>

              <div className="timeline-stage">
                <div className="timeline-title">4. Normalization & metrics</div>
                <div className="timeline-bar">
                  <div className="timeline-fill" style={{ width: "80%" }} />
                </div>
                <p>Convert counts to relative abundance; compute Shannon diversity.</p>
              </div>

              <div className="timeline-stage">
                <div className="timeline-title">5. Export to analysis</div>
                <div className="timeline-bar">
                  <div className="timeline-fill" style={{ width: "100%" }} />
                </div>
                <p>Generate tables (e.g., CSV) for modeling, visualization, or tools like ours.</p>
              </div>
            </div>
          </div>

          {/* CHECKLIST */}
          <div className="card">
            <h3>3. Study design & interpretation checklist</h3>
            <p className="subtitle">
              Microbiome datasets encode assumptions. Use this checklist to think about how
              robust a microbiome claim is.
            </p>

            <div className="checklist-grid">
              <div>
                <h4>Study design</h4>
                <ul>
                  <li><input type="checkbox" /> Clear inclusion/exclusion criteria</li>
                  <li><input type="checkbox" /> Adequate sample size</li>
                  <li><input type="checkbox" /> Longitudinal sampling</li>
                  <li><input type="checkbox" /> Relevant control groups</li>
                </ul>
              </div>

              <div>
                <h4>Confounders</h4>
                <ul>
                  <li><input type="checkbox" /> Diet & medications measured</li>
                  <li><input type="checkbox" /> Age / sex / geography</li>
                  <li><input type="checkbox" /> Socioeconomic context</li>
                  <li><input type="checkbox" /> Sample handling transparency</li>
                </ul>
              </div>

              <div>
                <h4>Analysis</h4>
                <ul>
                  <li><input type="checkbox" /> Multiple testing correction</li>
                  <li><input type="checkbox" /> Pipeline transparency</li>
                  <li><input type="checkbox" /> Causal language used cautiously</li>
                  <li><input type="checkbox" /> Limitations acknowledged</li>
                </ul>
              </div>
            </div>

            <p className="tech-explainer">
              Behind every neat CSV lies enormous complexity. This tool simplifies these
              layers for learning — not for diagnosis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

