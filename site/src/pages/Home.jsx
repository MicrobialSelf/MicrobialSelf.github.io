import React from "react";
import "../styles.css";

export default function Home() {
  return (
    <div>

    
      <div className="card">
        <h2>Microbial Self – Discover Your Biological & Psychological Identity</h2>
        <p className="subtitle">
          This website is a final project for the <b>Microbial Self</b> course. It turns core ideas
          from the class into an interactive prototype, inviting you to explore how your
          <b> microbiome</b>, <b>lifestyle</b>, and <b>self-schemas</b> all contribute to what we call
          the “self”.
        </p>
        <p>
          In this course, we discussed how microbes in, on, and around us challenge the idea of a
          bounded, purely human self. Instead, the “self” emerges as a <b>relational process</b>:
          negotiated between host and microbiota, immune system and environment, brain and body,
          individual and society.
        </p>
        <p>
          This site doesn’t try to measure your real health or identity. Instead, it offers a
          <b> thinking tool</b>: a way to put side by side a small slice of microbiome data, a rough
          lifestyle profile, and a sketch of your psychological self.
        </p>
      </div>

      <div className="card">
        <h2>What you can do here</h2>
        <p className="subtitle">
          The project is built around two interactive modules that mirror the biological and
          psychological dimensions of the self.
        </p>

        <h3>1. Microbiome & lifestyle module</h3>
        <p>
          In the <b>microbiome tab</b>, you can upload a gut microbiome CSV file and answer a short
          lifestyle and environment questionnaire. The tool will:
        </p>
        <ul>
          <li>Compute an approximate <b>Shannon diversity score</b> from your CSV.</li>
          <li>Display the <b>top taxa</b> in your sample based on relative abundance.</li>
          <li>
            Calculate a <b>“microbial loss” lifestyle score</b> based on diet, antibiotics,
            migration, urbanization, fermented foods, and outdoor exposure.
          </li>
          <li>
            Provide a short interpretation that connects these patterns to course themes like
            <b> industrialization</b>, <b>dysbiosis</b>, and <b>holobionts</b>.
          </li>
        </ul>

        <h3>2. Self-schema & personality module</h3>
        <p>
          The <b>self-schema tab</b> asks brief questions about how you interpret experiences, relate to others, and understand your own identity. Instead of a personality “type,” the tool plots you across four psychological dimensions:
        </p>
        <ul>
          <li>
            Looking-glass sensitivity
          </li>
          <li>
            Interpretive style (constructivist ↔ essentialist)
          </li>
          <li>
              Identity orientation (relational ↔ individualistic)
          </li>
          <li>
              Social comparison patterns
          </li>
        </ul>

        <p>
            Your results appear as a radar chart with short explanations for each axis.
            This module is designed as a reflective snapshot, helping you explore how your psychological sense of self connects to broader ideas about embodiment, relationality, and the microbial self.
        </p>
      </div>

      <div className="card">
        <h2>Ethics, limitations & how not to use this site</h2>
        <p className="subtitle">
          This prototype simplifies complex science into playful scores. It is designed for
          reflection and learning, not for diagnosis or prediction.
        </p>
        <p>From an ethical and scientific perspective, there are important limitations:</p>

        <ul>
          <li>
            The microbiome module works with a <b>single CSV snapshot</b>. It ignores
            strain-level differences, host genetics, longitudinal change, and many clinical
            factors.
          </li>
          <li>
            The lifestyle score compresses <b>structural and social factors</b> (such as
            industrialization, access to green space, and healthcare) into only a few answer
            choices.
          </li>
          <li>
            The self-schema output is inspired by personality frameworks, but it is <b>not</b> a
            validated psychological instrument.
          </li>
          <li>
            Any “match” or “mismatch” between your microbiome and your self-schema is
            a <b>prompt for reflection</b>, not evidence for causation.
          </li>
        </ul>

        <p>
          At the same time, the project raises questions from the course:
        </p>

        <ul>
          <li>Who has access to microbiome sequencing and interpretation tools?</li>
          <li>
            How should microbiome data be stored, shared, or used by companies and insurers?
          </li>
          <li>
            What responsibilities do scientists and platforms have to avoid
            <b> overpromising</b> what microbiome readouts can tell individuals?
          </li>
        </ul>

        <p>
          We include this section not to undermine the project, but to emphasize that any claim
          about the “microbial self” is always <b>partial, contextual, and relational</b>.
        </p>
      </div>

    </div>
  );
}

