// import React, { useState } from "react";
// import "../styles.css";

// export default function SelfSchemaExplorer() {
//   const [answers, setAnswers] = useState({});
//   const [result, setResult] = useState(null);

//   function updateAnswer(name, value) {
//     setAnswers((prev) => ({ ...prev, [name]: value }));
//   }

//   function computeMBTIType() {
//     const axes = {
//       EI: ["qEI1", "qEI2", "qEI3", "qEI4"],
//       SN: ["qSN1", "qSN2", "qSN3", "qSN4"],
//       TF: ["qTF1", "qTF2", "qTF3", "qTF4"],
//       JP: ["qJP1", "qJP2", "qJP3", "qJP4"],
//     };

//     const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

//     function count(list) {
//       for (const q of list) {
//         if (!answers[q]) return null;
//         scores[answers[q]]++;
//       }
//       return true;
//     }

//     if (!count(axes.EI)) return null;
//     if (!count(axes.SN)) return null;
//     if (!count(axes.TF)) return null;
//     if (!count(axes.JP)) return null;

//     const letters = {
//       EI: scores.E >= scores.I ? "E" : "I",
//       SN: scores.S >= scores.N ? "S" : "N",
//       TF: scores.T >= scores.F ? "T" : "F",
//       JP: scores.J >= scores.P ? "J" : "P",
//     };

//     const percent = (a, b) => {
//       const total = scores[a] + scores[b] || 1;
//       return {
//         pos: Math.round((scores[a] / total) * 100),
//         neg: Math.round((scores[b] / total) * 100),
//       };
//     };

//     return {
//       type: letters.EI + letters.SN + letters.TF + letters.JP,
//       letters,
//       percents: {
//         EI: percent("E", "I"),
//         SN: percent("S", "N"),
//         TF: percent("T", "F"),
//         JP: percent("J", "P"),
//       },
//     };
//   }

//   function computeComparisonStyle() {
//     const qs = ["qSC1", "qSC2", "qSC3", "qSC4"];
//     const counts = {
//       UP_GROWTH: 0,
//       UP_THREAT: 0,
//       DOWN_BUFFER: 0,
//       NEUTRAL: 0,
//     };

//     for (const q of qs) {
//       if (!answers[q]) return null;
//       counts[answers[q]]++;
//     }

//     const best = Object.keys(counts).reduce((a, b) =>
//       counts[a] > counts[b] ? a : b
//     );

//     const map = {
//       UP_GROWTH: {
//         label: "Upward growth-oriented",
//         chip: "self-chip-growth",
//         descA:
//           "You interpret upward comparisons as opportunities rather than threats. This aligns with self-schema accounts in which individuals maintain flexible, mastery-oriented interpretations of difference. In Cooley’s looking-glass framework, your imagined evaluation from others tends to be encouraging rather than diminishing.",
//         descB:
//           "From a symbolic interactionist perspective, your sense of self remains stable even when confronted with higher-performing peers. You treat comparison as informational rather than identity-threatening, suggesting strong internal self-complexity and a resilient self-schema architecture.",
//       },
//       UP_THREAT: {
//         label: "Upward threat-sensitive",
//         chip: "self-chip-threat",
//         descA:
//           "You experience upward comparisons as self-critical or destabilizing. According to Cooley’s looking-glass self, this reflects a tendency to internalize imagined judgments harshly, often interpreting others’ success as a reflection of personal inadequacy.",
//         descB:
//           "In identity-theoretic terms, upward comparisons activate self-discrepancies—gaps between the actual, ideal, and ought selves—making differences feel personally threatening. This style can heighten sensitivity to evaluation, pushing the social self into defensive or avoidant patterns.",
//       },
//       DOWN_BUFFER: {
//         label: "Downward buffering",
//         chip: "self-chip-buffer",
//         descA:
//           "You use downward comparisons to stabilize self-worth. Mead’s theory suggests this reflects reliance on the 'generalized other' to reaffirm competence when identity is challenged. It acts as a protective buffer against uncertainty or failure.",
//         descB:
//           "From an SEM (self-evaluation maintenance) perspective, this style preserves global self-esteem by shifting attention to those doing worse. It prevents ego-threat but can limit opportunities for identity growth and deeper self-understanding.",
//       },
//       NEUTRAL: {
//         label: "Neutral comparison style",
//         chip: "self-chip-neutral",
//         descA:
//           "You engage with comparisons lightly, without strong emotional interpretation. Your sense of self is less dependent on relative standing, suggesting stable internal schemas that do not fluctuate with social input.",
//         descB:
//           "This pattern aligns with a decentralized self-model: comparisons provide information, not identity content. You maintain autonomy from external appraisal, reducing self-discrepancy activation.",
//       },
//     };

//     return {
//       label: map[best].label,
//       chipClass: map[best].chip,
//       descriptionA: map[best].descA,
//       descriptionB: map[best].descB,
//     };
//   }

//   function runQuiz() {
//     const personality = computeMBTIType();
//     if (!personality) return;
//     const comparison = computeComparisonStyle();
//     if (!comparison) return;
//     setResult({ personality, comparison });
//   }

//   function AxisBlock({ axis, letters, perc }) {
//     const txt = {
//       EI:
//         letters.EI === "E"
//           ? "This pattern suggests a socially expansive self-schema. In Mead’s terms, you construct the self through active interaction with multiple 'others,' drawing energy and meaning from participation. Your orientation reflects a permeable ego boundary—your self grows through engagement rather than withdrawal."
//           : "This pattern indicates a self-schema centered on internal processing and selective social engagement. Consistent with symbolic interactionism, you derive coherence not from external stimulation but from introspective dialogue with the self-as-object.",

//       SN:
//         letters.SN === "S"
//           ? "A sensing-oriented pattern reflects a grounded, detail-anchored schema of self. You engage with the world through concrete cues, forming identity from observable experience rather than abstraction. This aligns with a material-inference model of the self."
//           : "An intuitive orientation aligns with meaning-centered self-construction. Identity derives from patterns, metaphors, and inferred dynamics rather than surface observation. The self is experienced as a narrative system rather than a sensory one.",

//       TF:
//         letters.TF === "T"
//           ? "A thinking orientation indicates a self-schema that maintains boundaries through logic, fairness, and principle. Your identity coherence comes from consistency, rational evaluation, and structural clarity rather than emotional attunement."
//           : "A feeling orientation reflects a relationally embedded self-schema. You construct identity through empathy, resonance, and social harmony. Cooley would argue your self is deeply responsive to the perceived emotional evaluations of others.",

//       JP:
//         letters.JP === "J"
//           ? "A judging orientation reflects a structured, anticipatory self-schema. The self is regulated through planning, order, and predictability, generating identity stability through control of future trajectories."
//           : "A perceiving orientation indicates an adaptive, emergent model of self. Identity is kept open, flexible, and responsive to contingencies, allowing multiplicity rather than closure.",
//     };

//     return (
//       <div className="self-axis-row">
//         <div className="self-axis-header">
//           <b>{axis.left} – {axis.right}</b>
//           <span>{perc.pos}% {axis.left} · {perc.neg}% {axis.right}</span>
//         </div>
//         <div className="self-axis-bar">
//           <div className="self-axis-segment self-axis-left" style={{ width: `${perc.pos}%` }}></div>
//           <div className="self-axis-segment self-axis-right" style={{ width: `${perc.neg}%` }}></div>
//         </div>
//         <p className="self-results-subtitle">{txt[axis.key]}</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="tagline">Educational prototype · Microbial Self</div>
//       <h1>Self-Schema Explorer</h1>
//       <p className="subtitle">A reflective tool inspired by Cooley, Mead, identity theory, and self-schema psychology.</p>

//       <div className="container">
//         <div>
//           <div className="card">
//             <h2>Self-Schemas & Personality</h2>
//             <p className="subtitle">Answer the questions below to generate your snapshot.</p>
//           </div>

//           <div className="card">
//             <h3>1. Source of Self-Definition (E–I)</h3>

//             <label>When imagining how others see me, I…</label>
//             <div className="self-radio-group">
//               <label><input type="radio" name="qEI1" value="E" onChange={(e) => updateAnswer("qEI1", e.target.value)} />Actively project myself outward</label>
//               <label><input type="radio" name="qEI1" value="I" onChange={(e) => updateAnswer("qEI1", e.target.value)} />Reflect inward before expressing</label>
//             </div>

//             <label>My sense of self grows most when I…</label>
//             <div className="self-radio-group">
//               <label><input type="radio" name="qEI2" value="E" onChange={(e) => updateAnswer("qEI2", e.target.value)} />Engage with many people</label>
//               <label><input type="radio" name="qEI2" value="I" onChange={(e) => updateAnswer("qEI2", e.target.value)} />Have space for internal dialogue</label>
//             </div>

//             <label>I feel most authentic when…</label>
//             <div className="self-radio-group">
//               <label><input type="radio" name="qEI3" value="E" onChange={(e) => updateAnswer("qEI3", e.target.value)} />Expressing freely and socially</label>
//               <label><input type="radio" name="qEI3" value="I" onChange={(e) => updateAnswer("qEI3", e.target.value)} />Sharing selectively and thoughtfully</label>
//             </div>

//             <label>When entering a new space…</label>
//             <div className="self-radio-group">
//               <label><input type="radio" name="qEI4" value="E" onChange={(e) => updateAnswer("qEI4", e.target.value)} />I integrate quickly</label>
//               <label><input type="radio" name="qEI4" value="I" onChange={(e) => updateAnswer("qEI4", e.target.value)} />I observe first</label>
//             </div>
//           </div>

//           <div className="card">
//             <h3>2. How you understand the world (S–N)</h3>

//             {[
//               ["Immediate, observable cues", "Underlying patterns and meanings"],
//               ["Concrete evidence", "Intuition or thematic coherence"],
//               ["Direct sensory detail", "Symbolic or inferential layers"],
//               ["Practical realism", "Possibility-driven imagination"],
//             ].map((pair, idx) => {
//               const labels = [
//                 "When interpreting social situations, I rely on…",
//                 "When evaluating myself, I use…",
//                 "When forming impressions, I focus on…",
//                 "When imagining the future self, I think in…",
//               ];
//               return (
//                 <div key={idx}>
//                   <label>{labels[idx]}</label>
//                   <div className="self-radio-group">
//                     <label><input type="radio" name={`qSN${idx+1}`} value="S" onChange={(e) => updateAnswer(`qSN${idx+1}`, e.target.value)} />{pair[0]}</label>
//                     <label><input type="radio" name={`qSN${idx+1}`} value="N" onChange={(e) => updateAnswer(`qSN${idx+1}`, e.target.value)} />{pair[1]}</label>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="card">
//             <h3>3. How you evaluate yourself (T–F)</h3>

//             {[
//               ["Objective standards", "Relational harmony"],
//               ["Fairness and consistency", "Emotional needs and context"],
//               ["Clear criteria", "Empathic understanding"],
//               ["Accuracy and logic", "Connection and meaning"],
//             ].map((pair, idx) => {
//               const labels = [
//                 "When judging my behavior, I look for…",
//                 "When resolving tension, I prioritize…",
//                 "When receiving criticism, I filter it through…",
//                 "When supporting others, I offer…",
//               ];
//               return (
//                 <div key={idx}>
//                   <label>{labels[idx]}</label>
//                   <div className="self-radio-group">
//                     <label><input type="radio" name={`qTF${idx+1}`} value="T" onChange={(e) => updateAnswer(`qTF${idx+1}`, e.target.value)} />{pair[0]}</label>
//                     <label><input type="radio" name={`qTF${idx+1}`} value="F" onChange={(e) => updateAnswer(`qTF${idx+1}`, e.target.value)} />{pair[1]}</label>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="card">
//             <h3>4. How you maintain identity continuity (J–P)</h3>

//             {[
//               ["Predictability and structure", "Flexibility and openness"],
//               ["Defined expectations", "Adaptive improvisation"],
//               ["Clear commitments", "Evolving possibilities"],
//               ["Control of outcomes", "Responsive flow"],
//             ].map((pair, idx) => {
//               const labels = [
//                 "My self feels most stable when there is…",
//                 "My routines usually reflect…",
//                 "I maintain future identity by…",
//                 "When life changes suddenly, I…",
//               ];
//               return (
//                 <div key={idx}>
//                   <label>{labels[idx]}</label>
//                   <div className="self-radio-group">
//                     <label><input type="radio" name={`qJP${idx+1}`} value="J" onChange={(e) => updateAnswer(`qJP${idx+1}`, e.target.value)} />{pair[0]}</label>
//                     <label><input type="radio" name={`qJP${idx+1}`} value="P" onChange={(e) => updateAnswer(`qJP${idx+1}`, e.target.value)} />{pair[1]}</label>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="card">
//             <h3>5. Social comparison & self-evaluation</h3>

//             {[
//               ["I feel challenged to improve.", "I feel inadequate.", "I feel unaffected."],
//               ["I turn comparison into goals.", "I feel stuck or self-critical.", "I reassure myself by looking downward."],
//               ["I stay focused on my own path.", "I feel relieved by doing better than others.", "I avoid comparison altogether."],
//               ["Encouraging inner voice.", "Harsh or self-punitive voice.", "A protective, distancing voice."],
//             ].map((opts, idx) => {
//               const labels = [
//                 "When someone outperforms me…",
//                 "When I feel behind…",
//                 "When I outperform others…",
//                 "My internal commentary usually sounds like…",
//               ];
//               return (
//                 <div key={idx}>
//                   <label>{labels[idx]}</label>
//                   <div className="self-radio-group">
//                     <label>
//                       <input
//                         type="radio"
//                         name={`qSC${idx + 1}`}
//                         value={idx === 2 ? "DOWN_BUFFER" : "UP_GROWTH"}
//                         onChange={(e) => updateAnswer(`qSC${idx + 1}`, e.target.value)}
//                       />
//                       {opts[0]}
//                     </label>

//                     <label>
//                       <input
//                         type="radio"
//                         name={`qSC${idx + 1}`}
//                         value="UP_THREAT"
//                         onChange={(e) => updateAnswer(`qSC${idx + 1}`, e.target.value)}
//                       />
//                       {opts[1]}
//                     </label>

//                     <label>
//                       <input
//                         type="radio"
//                         name={`qSC${idx + 1}`}
//                         value={idx === 1 ? "DOWN_BUFFER" : "NEUTRAL"}
//                         onChange={(e) => updateAnswer(`qSC${idx + 1}`, e.target.value)}
//                       />
//                       {opts[2]}
//                     </label>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <button className="calculate-btn" onClick={runQuiz}>See my self-schema snapshot</button>
//         </div>

//         {result && (
//           <div className="card card-full">
//             <h3>Your self-schema snapshot</h3>

//             <p>Your personality pattern:</p>
//             <div className="self-personality-type">{result.personality.type}</div>

//             <div className="self-axis-grid">
//               <AxisBlock axis={{ key: "EI", left: "E", right: "I" }} letters={result.personality.letters} perc={result.personality.percents.EI} />
//               <AxisBlock axis={{ key: "SN", left: "S", right: "N" }} letters={result.personality.letters} perc={result.personality.percents.SN} />
//               <AxisBlock axis={{ key: "TF", left: "T", right: "F" }} letters={result.personality.letters} perc={result.personality.percents.TF} />
//               <AxisBlock axis={{ key: "JP", left: "J", right: "P" }} letters={result.personality.letters} perc={result.personality.percents.JP} />
//             </div>

//             <h3>Social comparison style</h3>
//             <p>
//               Dominant style:{" "}
//               <span className={`self-chip ${result.comparison.chipClass}`}>
//                 {result.comparison.label}
//               </span>
//             </p>

//             <p className="self-results-subtitle">{result.comparison.descriptionA}</p>
//             <p className="self-results-subtitle">{result.comparison.descriptionB}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import "../styles.css";

export default function SelfSchemaExplorer() {
  // =========================================================
  // STATE
  // =========================================================
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const update = (q, v) => {
    setAnswers((prev) => ({ ...prev, [q]: v }));
  };

  // =========================================================
  // AXIS COMPUTATION
  // =========================================================
  function computeAxes() {
    const axisMap = {
      LG: ["q1", "q2", "q3", "q4"],        // Looking-Glass Sensitivity
      IS: ["q5", "q6", "q7", "q8"],        // Interpretive Style
      IO: ["q9", "q10", "q11", "q12"],     // Identity Orientation
      ES: ["q13", "q14", "q15", "q16"],    // Embodied Self Continuity
    };

    const scores = {
      LG_HIGH: 0, LG_LOW: 0,
      IS_CONS: 0, IS_ESS: 0,
      IO_REL: 0, IO_IND: 0,
      ES_CONN: 0, ES_SEP: 0,
    };

    // Validate + count
    for (const axis of Object.keys(axisMap)) {
      for (const q of axisMap[axis]) {
        const v = answers[q];
        if (!v) {
          alert("Please answer all questions in the self-schema section.");
          return null;
        }
        scores[v]++;
      }
    }

    // Decide winners
    const computed = {
      LG: scores.LG_HIGH >= scores.LG_LOW ? "HIGH" : "LOW",
      IS: scores.IS_CONS >= scores.IS_ESS ? "CONS" : "ESS",
      IO: scores.IO_REL >= scores.IO_IND ? "REL" : "IND",
      ES: scores.ES_CONN >= scores.ES_SEP ? "CONN" : "SEP",
    };

    return computed;
  }

  // =========================================================
  // SOCIAL COMPARISON
  // =========================================================
  function computeComparison() {
    const qs = ["q17", "q18", "q19", "q20"];
    const counts = {
      UP_GROWTH: 0,
      UP_THREAT: 0,
      DOWN_BUFFER: 0,
      NEUTRAL: 0,
    };

    for (const q of qs) {
      const v = answers[q];
      if (!v) {
        alert("Please complete the social comparison questions.");
        return null;
      }
      counts[v]++;
    }

    const best = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );

    return best;
  }

  // =========================================================
  // FULL INTERPRETATIONS (LONG PARAGRAPHS)
  // =========================================================
  const axisDescriptions = {
    // ------------------------------------------------------
    // LOOKING-GLASS SENSITIVITY
    // ------------------------------------------------------
    LG_HIGH: {
      title: "High Looking-Glass Sensitivity",
      text: (
        <>
          <p>
            Your responses indicate a heightened sensitivity to the “looking-glass self,” 
            a concept from Charles Horton Cooley that describes how individuals imagine 
            how they appear to others, interpret others’ judgments, and develop feelings 
            about themselves based on those imagined appraisals. A high score suggests 
            that your self-understanding is strongly relational and socially attuned.
          </p>
          <p>
            This does not mean you are overly dependent on external validation; rather, 
            it reflects an interpersonal orientation in which others’ evaluations and 
            reactions hold meaningful informational value. You are more likely to 
            incorporate social cues, emotional nuance, and perceived expectations into 
            your ongoing sense of self. This aligns with symbolic interactionism: the 
            self emerges through interaction, feedback, and shared meaning.
          </p>
          <p>
            In the context of the microbial self, this orientation mirrors the idea that 
            identity is co-constructed — not only psychologically, but biologically. 
            Just as the microbiome is shaped by diet, environment, and contact, a 
            high looking-glass orientation reflects a permeable, responsive sense of self 
            that evolves through relationships. 
          </p>
        </>
      ),
    },

    LG_LOW: {
      title: "Low Looking-Glass Sensitivity",
      text: (
        <>
          <p>
            Your responses indicate a lower sensitivity to Cooley’s looking-glass 
            processes, suggesting that your sense of self is less dependent on how 
            others might perceive you. You tend to form self-evaluations based on 
            personal standards, internal goals, and intrinsic appraisals rather than 
            imagined social judgments.
          </p>
          <p>
            This does not imply detachment or social disinterest; rather, it signals a 
            stable internal frame of reference. Symbolic interactionism argues that 
            interactions shape the self, but individuals vary in how deeply external 
            perspectives are internalized. You appear to filter social information, 
            using some but not allowing it to dominate your sense of identity.
          </p>
          <p>
            In relation to the microbial self, this orientation parallels a view of 
            identity as anchored within the individual — coherent and continuous even 
            amid environmental influence. You may appreciate biological and relational 
            complexity, yet maintain firm boundaries around personal meaning-making.
          </p>
        </>
      ),
    },

    // ------------------------------------------------------
    // INTERPRETIVE STYLE
    // ------------------------------------------------------
    IS_CONS: {
      title: "Constructivist Interpretive Style",
      text: (
        <>
          <p>
            You show a constructivist orientation: the belief that identity, meaning, 
            and even bodily boundaries are shaped through interpretation, context, 
            and interaction. This aligns closely with philosophical perspectives in 
            <i>Microbial Self</i> that frame the self as emergent, relational, and 
            constantly reconstructed through biological and social processes.
          </p>
          <p>
            Constructivists see categories like "healthy," "normal," or "self" as 
            negotiated rather than fixed. Your answers suggest you are comfortable 
            with ambiguity, differing viewpoints, and complexity. This often correlates 
            with curiosity, openness, and an intuitive grasp of systems-level thinking.
          </p>
          <p>
            In microbiome studies, this parallels the scientific understanding that 
            host–microbe identities are dynamic — shaped by lifestyle, ecology, and 
            interaction rather than static essence. You likely find fluidity more 
            natural than rigidity when explaining human identity.
          </p>
        </>
      ),
    },

    IS_ESS: {
      title: "Essentialist Interpretive Style",
      text: (
        <>
          <p>
            Your interpretive style leans toward essentialism — the belief that 
            identity, traits, and categories reflect underlying, stable essences. 
            Essentialism does not mean rigidity; it simply reflects a tendency to 
            see underlying structure, biological grounding, or fundamental nature 
            beneath observable variation.
          </p>
          <p>
            Philosophically, this view contrasts with constructivism by emphasizing 
            inherent properties rather than emergent meaning. Psychologically, it 
            correlates with valuing clarity, stability, and well-defined categories.
          </p>
          <p>
            In the context of the microbial self, an essentialist orientation may 
            incline you to think of microbial signatures or biological markers as 
            revealing stable truths about identity. You may prefer frameworks that 
            identify causal mechanisms rather than fluid relational dynamics.
          </p>
        </>
      ),
    },

    // ------------------------------------------------------
    // IDENTITY ORIENTATION
    // ------------------------------------------------------
    IO_REL: {
      title: "Relational Identity Orientation",
      text: (
        <>
          <p>
            A relational identity orientation means that you understand yourself 
            primarily through relationships, social roles, and interconnectedness. 
            This aligns with symbolic interactionism and relational sociology, which 
            view identity not as internal essence but as socially sustained.
          </p>
          <p>
            You may prioritize connection, empathy, and context when interpreting 
            self-experience. Narratives about who you are often involve others — 
            friends, family, communities, or collaborative values.
          </p>
          <p>
            This mirrors biological relationality: the microbiome itself is a 
            community of relationships shaping the organism. A relational identity 
            echoes this ecological view of self — as something formed through 
            interaction and mutual influence.
          </p>
        </>
      ),
    },

    IO_IND: {
      title: "Individualistic Identity Orientation",
      text: (
        <>
          <p>
            Your responses suggest you orient toward identity as internally anchored 
            and personally constructed. You value autonomy, differentiation, and 
            self-coherence — themes associated with classical humanist and 
            individualist models of the self.
          </p>
          <p>
            This orientation does not reject social influence; rather, it positions 
            the individual as the primary author of identity narratives. You likely 
            emphasize personal agency and internal motivation.
          </p>
          <p>
            Relative to the microbial self, this may incline you to see the organism 
            as the primary unit of identity, with microbes contributing but not 
            fundamentally redefining selfhood.
          </p>
        </>
      ),
    },

    // ------------------------------------------------------
    // EMBODIED SELF CONTINUITY
    // ------------------------------------------------------
    ES_CONN: {
      title: "Embodied Continuity: Connected",
      text: (
        <>
          <p>
            You experience your body and identity as continuous with biological, 
            ecological, and environmental processes. This view resonates strongly with 
            the “holobiont” and “extended phenotype” concepts in microbiome science. 
            You may intuitively grasp that the boundary between self and non-self is 
            porous and dynamically maintained.
          </p>
          <p>
            Philosophically, this reflects an embodied, phenomenological orientation: 
            the self is lived, experienced, and materially embedded. Your responses 
            indicate comfort with interdependence and the idea that biological systems 
            (such as your microbiome) meaningfully participate in who you are.
          </p>
          <p>
            This perspective aligns with contemporary microbiome research, which 
            emphasizes the co-regulation between host and microbes across immunity, 
            metabolism, behavior, and development.
          </p>
        </>
      ),
    },

    ES_SEP: {
      title: "Embodied Continuity: Separate",
      text: (
        <>
          <p>
            You maintain a strong conceptual boundary between yourself and external 
            biological systems. This reflects a classical biomedical model: the self 
            as a discrete organism, with microbes functioning as influences rather 
            than components of identity.
          </p>
          <p>
            This orientation emphasizes cognitive coherence, psychological autonomy, 
            and bodily integrity. You likely prefer explanations that separate 
            environmental influence from personal selfhood rather than blending them.
          </p>
          <p>
            In relation to microbiome studies, this does not signal resistance to 
            science — but rather a conceptual preference for clear organism–environment 
            boundaries. You may appreciate microbiome complexity while still seeing 
            identity as primarily human and internally governed.
          </p>
        </>
      ),
    },
  };

  // ------------------------------------------------------
  // SOCIAL COMPARISON INTERPRETATIONS
  // ------------------------------------------------------
  const comparisonDescriptions = {
    UP_GROWTH: {
      title: "Upward Growth-Oriented Comparison",
      text: (
        <>
          <p>
            When you encounter someone doing better, you tend to interpret it as 
            inspiration or an opportunity for learning. This is known as “upward 
            identification,” a style associated with positive affect, increased 
            motivation, and adaptive self-regulation.
          </p>
          <p>
            Psychological research by Taylor, Wills, and Wood finds that people with 
            this orientation often maintain strong self-efficacy and use comparison 
            information constructively. This style harmonizes with a relational 
            interpretation of the self — one in which others serve as sources of 
            meaning and growth rather than threat.
          </p>
        </>
      ),
    },

    UP_THREAT: {
      title: "Upward Threat-Sensitive Comparison",
      text: (
        <>
          <p>
            You tend to experience upward comparisons — seeing someone outperform you 
            or excel in valued domains — as potentially discouraging or self-critical. 
            This pattern, known as “upward contrast,” can evoke feelings of inadequacy 
            or pressure.
          </p>

          <p>
            Research in social comparison theory shows that this does not reflect 
            weakness, but sensitivity to self-relevance. You are more likely to feel 
            impacted by comparisons when a domain is important to your identity, 
            suggesting you care deeply about mastery and meaningful growth.
          </p>

          <p>
            This style can produce both challenge and strain; however, it often 
            co-occurs with conscientiousness and high personal standards. Recognizing 
            this tendency allows intentional reframing of upward comparisons into 
            opportunities rather than threats.
          </p>
        </>
      ),
    },

    DOWN_BUFFER: {
      title: "Downward Buffering",
      text: (
        <>
          <p>
            You use downward comparisons — reflecting on others doing worse — as a way 
            to protect self-worth. This is a common and psychologically adaptive 
            strategy, especially in moments of stress or self-doubt.
          </p>
          <p>
            Social psychologists Taylor and Wills identify this style as a form of 
            emotional regulation: it provides stability, reassurance, and mood 
            recovery. This pattern is neither selfish nor cynical; it is a normal way 
            of grounding oneself when self-evaluation feels fragile.
          </p>
        </>
      ),
    },

    NEUTRAL: {
      title: "Neutral Comparison Style",
      text: (
        <>
          <p>
            You treat social comparisons as informational rather than emotional events. 
            This style reflects psychological independence, low reactivity, and steady 
            self-concept clarity.
          </p>
          <p>
            You may notice differences, but you rarely interpret them as personal 
            threats or sources of validation. This style promotes cognitive stability 
            and measured self-assessment.
          </p>
        </>
      ),
    },
  };

  // =========================================================
  // RUN QUIZ
  // =========================================================
  function runQuiz() {
    const axes = computeAxes();
    if (!axes) return;

    const comp = computeComparison();
    if (!comp) return;

    setResult({ axes, comp });
  }

  // =========================================================
  // UI COMPONENT – AXIS ROW
  // =========================================================
  function AxisSection({ title, text }) {
    return (
      <div className="result-block">
        <h3>{title}</h3>
        {text}
      </div>
    );
  }

  // =========================================================
  // PAGE LAYOUT
  // =========================================================
  return (
    <div>
      <div className="tagline">Educational prototype · Microbial Self</div>
      <h1>Self-Schema Explorer</h1>
      <p className="subtitle">
        A reflective tool that interprets your sense of self using concepts from symbolic interactionism, embodiment theory, narrative identity, and the microbiome.
      </p>

      <div className="container">
        {/* LEFT COLUMN — QUESTIONS */}
        <div>
          <div className="card">
            <h2>Self-Schema Assessment</h2>
            <p className="subtitle">
              Answer all questions to generate your interpretive profile.
            </p>
          </div>

          {/* ========================================================= */}
          {/* 1. LOOKING-GLASS SENSITIVITY */}
          {/* ========================================================= */}
          <div className="card">
            <h3>1. Looking-glass self (Cooley)</h3>

            <label>When imagining how others see me…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q1" value="LG_HIGH" onChange={(e)=>update("q1",e.target.value)} />I often reflect on it deeply.</label>
              <label><input type="radio" name="q1" value="LG_LOW" onChange={(e)=>update("q1",e.target.value)} />I rarely think about it.</label>
            </div>

            <label>When receiving subtle social cues…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q2" value="LG_HIGH" onChange={(e)=>update("q2",e.target.value)} />I feel influenced by them.</label>
              <label><input type="radio" name="q2" value="LG_LOW" onChange={(e)=>update("q2",e.target.value)} />I filter them out easily.</label>
            </div>

            <label>Evaluations from others…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q3" value="LG_HIGH" onChange={(e)=>update("q3",e.target.value)} />Meaningfully shape how I see myself.</label>
              <label><input type="radio" name="q3" value="LG_LOW" onChange={(e)=>update("q3",e.target.value)} />Matter, but don’t alter my self-view.</label>
            </div>

            <label>When someone reacts to me unexpectedly…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q4" value="LG_HIGH" onChange={(e)=>update("q4",e.target.value)} />I rethink the interaction.</label>
              <label><input type="radio" name="q4" value="LG_LOW" onChange={(e)=>update("q4",e.target.value)} />I move on without revisiting it.</label>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. INTERPRETIVE STYLE */}
          {/* ========================================================= */}
          <div className="card">
            <h3>2. Interpretive style (constructivist ↔ essentialist)</h3>

            <label>When thinking about identity categories…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q5" value="IS_CONS" onChange={(e)=>update("q5",e.target.value)} />I see them as shaped by society and context.</label>
              <label><input type="radio" name="q5" value="IS_ESS" onChange={(e)=>update("q5",e.target.value)} />I see them as reflecting underlying nature.</label>
            </div>

            <label>When interpreting differences between people…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q6" value="IS_CONS" onChange={(e)=>update("q6",e.target.value)} />I emphasize environment and experience.</label>
              <label><input type="radio" name="q6" value="IS_ESS" onChange={(e)=>update("q6",e.target.value)} />I emphasize stable traits.</label>
            </div>

            <label>When learning about the microbiome…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q7" value="IS_CONS" onChange={(e)=>update("q7",e.target.value)} />It reinforces how fluid identity can be.</label>
              <label><input type="radio" name="q7" value="IS_ESS" onChange={(e)=>update("q7",e.target.value)} />It reveals the biological core beneath experience.</label>
            </div>

            <label>When making sense of personal traits…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q8" value="IS_CONS" onChange={(e)=>update("q8",e.target.value)} />I focus on interpretation and meaning.</label>
              <label><input type="radio" name="q8" value="IS_ESS" onChange={(e)=>update("q8",e.target.value)} />I focus on underlying causes or dispositions.</label>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 3. IDENTITY ORIENTATION */}
          {/* ========================================================= */}
          <div className="card">
            <h3>3. Identity orientation (relational ↔ individualistic)</h3>

            <label>When describing who I am…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q9" value="IO_REL" onChange={(e)=>update("q9",e.target.value)} />I talk about relationships & roles.</label>
              <label><input type="radio" name="q9" value="IO_IND" onChange={(e)=>update("q9",e.target.value)} />I talk about personal traits & choices.</label>
            </div>

            <label>My sense of self is shaped mostly by…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q10" value="IO_REL" onChange={(e)=>update("q10",e.target.value)} />Interactions and connections.</label>
              <label><input type="radio" name="q10" value="IO_IND" onChange={(e)=>update("q10",e.target.value)} />Internal reflection and autonomy.</label>
            </div>

            <label>When making decisions…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q11" value="IO_REL" onChange={(e)=>update("q11",e.target.value)} />I consider relationships heavily.</label>
              <label><input type="radio" name="q11" value="IO_IND" onChange={(e)=>update("q11",e.target.value)} />I prioritize personal goals.</label>
            </div>

            <label>Life meaning is grounded in…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q12" value="IO_REL" onChange={(e)=>update("q12",e.target.value)} />Connection and responsibility.</label>
              <label><input type="radio" name="q12" value="IO_IND" onChange={(e)=>update("q12",e.target.value)} />Self-expression and independence.</label>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 4. EMBODIED SELF CONTINUITY */}
          {/* ========================================================= */}
          <div className="card">
            <h3>4. Embodied self continuity (connected ↔ separate)</h3>

            <label>I experience my body as…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q13" value="ES_CONN" onChange={(e)=>update("q13",e.target.value)} />Continuous with environment & ecology.</label>
              <label><input type="radio" name="q13" value="ES_SEP" onChange={(e)=>update("q13",e.target.value)} />A distinct and bounded entity.</label>
            </div>

            <label>The microbiome makes me think identity is…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q14" value="ES_CONN" onChange={(e)=>update("q14",e.target.value)} />Interdependent and co-regulated.</label>
              <label><input type="radio" name="q14" value="ES_SEP" onChange={(e)=>update("q14",e.target.value)} />Primarily human, with microbial influence.</label>
            </div>

            <label>I interpret bodily change as…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q15" value="ES_CONN" onChange={(e)=>update("q15",e.target.value)} />Part of ongoing ecological adaptation.</label>
              <label><input type="radio" name="q15" value="ES_SEP" onChange={(e)=>update("q15",e.target.value)} />Something that happens to me, not part of me.</label>
            </div>

            <label>My relationship to biological systems feels…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q16" value="ES_CONN" onChange={(e)=>update("q16",e.target.value)} />Interwoven and reciprocal.</label>
              <label><input type="radio" name="q16" value="ES_SEP" onChange={(e)=>update("q16",e.target.value)} />Separate and controllable.</label>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 5. SOCIAL COMPARISON STYLE */}
          {/* ========================================================= */}
          <div className="card">
            <h3>5. Social comparison</h3>

            <label>When someone excels at something I value…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q17" value="UP_GROWTH" onChange={(e)=>update("q17",e.target.value)} />I feel motivated.</label>
              <label><input type="radio" name="q17" value="UP_THREAT" onChange={(e)=>update("q17",e.target.value)} />I feel discouraged.</label>
              <label><input type="radio" name="q17" value="NEUTRAL" onChange={(e)=>update("q17",e.target.value)} />I feel neutral.</label>
            </div>

            <label>When I feel behind others…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q18" value="UP_GROWTH" onChange={(e)=>update("q18",e.target.value)} />I rise to the challenge.</label>
              <label><input type="radio" name="q18" value="UP_THREAT" onChange={(e)=>update("q18",e.target.value)} />I feel pressure or shame.</label>
              <label><input type="radio" name="q18" value="DOWN_BUFFER" onChange={(e)=>update("q18",e.target.value)} />I reassure myself by looking downward.</label>
            </div>

            <label>When I’m doing better than someone…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q19" value="DOWN_BUFFER" onChange={(e)=>update("q19",e.target.value)} />I feel reassured.</label>
              <label><input type="radio" name="q19" value="UP_THREAT" onChange={(e)=>update("q19",e.target.value)} />I feel uneasy.</label>
              <label><input type="radio" name="q19" value="NEUTRAL" onChange={(e)=>update("q19",e.target.value)} />I feel neutral.</label>
            </div>

            <label>The voice in my head during comparison is…</label>
            <div className="self-radio-group">
              <label><input type="radio" name="q20" value="UP_GROWTH" onChange={(e)=>update("q20",e.target.value)} />Encouraging.</label>
              <label><input type="radio" name="q20" value="UP_THREAT" onChange={(e)=>update("q20",e.target.value)} />Critical.</label>
              <label><input type="radio" name="q20" value="NEUTRAL" onChange={(e)=>update("q20",e.target.value)} />Neutral.</label>
            </div>
          </div>

          <button className="calculate-btn" onClick={runQuiz}>
            Generate my self-schema profile
          </button>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN — RESULTS */}
        {/* ========================================================= */}
        {result && (
          <div className="card card-full">
            <h2>Your self-schema profile</h2>

            {/* AXIS SECTIONS */}
            <AxisSection
              title={axisDescriptions[`LG_${result.axes.LG}`].title}
              text={axisDescriptions[`LG_${result.axes.LG}`].text}
            />
            <AxisSection
              title={axisDescriptions[`IS_${result.axes.IS}`].title}
              text={axisDescriptions[`IS_${result.axes.IS}`].text}
            />
            <AxisSection
              title={axisDescriptions[`IO_${result.axes.IO}`].title}
              text={axisDescriptions[`IO_${result.axes.IO}`].text}
            />
            <AxisSection
              title={axisDescriptions[`ES_${result.axes.ES}`].title}
              text={axisDescriptions[`ES_${result.axes.ES}`].text}
            />

            {/* SOCIAL COMPARISON */}
            <AxisSection
              title={comparisonDescriptions[result.comp].title}
              text={comparisonDescriptions[result.comp].text}
            />
          </div>
        )}
      </div>
    </div>
  );
}

