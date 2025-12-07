
// import React from "react";
// import "../styles.css";

// export default function SelfSchemaExplorer() {
//   return (
//     <div id="self-tab" className="tab-content">

//       <div className="card">
//         <h2>Self-Schemas & Personality</h2>
//         <p className="subtitle">
//           This informal questionnaire explores how you tend to act, decide, and compare yourself
//           with others. It summarizes your answers into a four-letter profile (E/I, S/N, T/F, J/P)
//           and a social comparison style. It is a reflective tool, not a psychological diagnosis.
//         </p>
//       </div>

//       {/* —————————————————————————— */}
//       {/* 1. SOCIAL ENERGY (E–I) */}
//       {/* —————————————————————————— */}

//       <div className="card">
//         <h3>1. Social energy (E–I)</h3>

//         <label>In social situations, I usually...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qEI1" value="E" />
//             Talk to many people, including people I don’t know yet.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qEI1" value="I" />
//             Stay with a few people I know well or observe quietly.
//           </label>
//         </div>

//         <label>At the end of a long day, I feel most recharged when...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qEI2" value="E" />
//             I spend time with others, talking or doing something together.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qEI2" value="I" />
//             I have time alone or with one very close person.
//           </label>
//         </div>

//         <label>People who know me well would say I’m...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qEI3" value="E" />
//             Outgoing, talkative, and expressive.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qEI3" value="I" />
//             Reserved, quiet, or reflective.
//           </label>
//         </div>

//         <label>When I join a new group (class, club, team)...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qEI4" value="E" />
//             I feel comfortable speaking up early and meeting many people.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qEI4" value="I" />
//             I prefer to watch first and slowly connect with a few people.
//           </label>
//         </div>
//       </div>

//       {/* —————————————————————————— */}
//       {/* 2. INFORMATION PROCESSING (S–N) */}
//       {/* —————————————————————————— */}

//       <div className="card">
//         <h3>2. How you process information (S–N)</h3>

//         <label>When learning something new, I’m more drawn to...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qSN1" value="S" />
//             Clear examples, concrete facts, and step-by-step explanations.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qSN1" value="N" />
//             Big-picture ideas, patterns, and “why it matters” first.
//           </label>
//         </div>

//         <label>When solving a problem, I tend to...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qSN2" value="S" />
//             Focus on what is already known, realistic, and practical.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qSN2" value="N" />
//             Think about alternative framings, metaphors, or creative angles.
//           </label>
//         </div>

//         <label>Descriptions that appeal to me are usually...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qSN3" value="S" />
//             Precise, detailed, and specific.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qSN3" value="N" />
//             Abstract, conceptual, or imaginative.
//           </label>
//         </div>

//         <label>When I think about the future, I...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qSN4" value="S" />
//             Picture concrete plans and realistic steps I can actually take.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qSN4" value="N" />
//             Explore possibilities and “what if” scenarios in my head.
//           </label>
//         </div>
//       </div>

//       {/* —————————————————————————— */}
//       {/* 3. DECISION STYLE (T–F) */}
//       {/* —————————————————————————— */}

//       <div className="card">
//         <h3>3. How you decide (T–F)</h3>

//         <label>When I make a difficult decision, I usually...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qTF1" value="T" />
//             Focus on logic, pros and cons, and internal consistency.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qTF1" value="F" />
//             Focus on relationships, feelings, and how people will be affected.
//           </label>
//         </div>

//         <label>In conflicts, my first instinct is to...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qTF2" value="T" />
//             Clarify what is fair, what makes sense, and where boundaries are.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qTF2" value="F" />
//             Preserve harmony, avoid hurting people, and repair the connection.
//           </label>
//         </div>

//         <label>When giving feedback, I naturally tend to be...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qTF3" value="T" />
//             Direct and honest, even if it might sound blunt.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qTF3" value="F" />
//             Encouraging and gentle, sometimes softening criticism.
//           </label>
//         </div>

//         <label>When I listen to a friend’s problem, I often...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qTF4" value="T" />
//             Offer solutions, frameworks, or ways to think about it differently.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qTF4" value="F" />
//             Offer empathy, validation, and shared emotional space.
//           </label>
//         </div>
//       </div>

//       {/* —————————————————————————— */}
//       {/* 4. STRUCTURE STYLE (J–P) */}
//       {/* —————————————————————————— */}

//       <div className="card">
//         <h3>4. How you structure your life (J–P)</h3>

//         <label>When working on assignments or projects, I prefer to...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qJP1" value="J" />
//             Plan ahead and finish early or on time with a clear schedule.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qJP1" value="P" />
//             Keep options open and often work closer to the deadline.
//           </label>
//         </div>

//         <label>My physical and digital spaces are usually...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qJP2" value="J" />
//             Organised, labeled, and structured.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qJP2" value="P" />
//             “Organised chaos” that I understand but others might not.
//           </label>
//         </div>

//         <label>I feel most comfortable when...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qJP3" value="J" />
//             Plans are decided and I know what will happen.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qJP3" value="P" />
//             Plans are flexible and we can adapt as we go.
//           </label>
//         </div>

//         <label>When something unexpected changes my plans, I usually...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qJP4" value="J" />
//             Feel stressed and try to quickly re-establish structure.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qJP4" value="P" />
//             Feel stimulated or curious and see how to work with it.
//           </label>
//         </div>
//       </div>

//       {/* —————————————————————————— */}
//       {/* 5. SOCIAL COMPARISON STYLE */}
//       {/* —————————————————————————— */}

//       <div className="card">
//         <h3>5. Social comparison & self-evaluation style</h3>

//         <label>When I meet someone who is clearly “better” than me at something important...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qSC1" value="UP_GROWTH" />
//             I feel inspired and try to learn from them or use it as motivation.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qSC1" value="UP_THREAT" />
//             I feel discouraged or inferior and compare myself negatively.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qSC1" value="NEUTRAL" />
//             I notice it, but it doesn’t affect how I feel about myself much.
//           </label>
//         </div>

//         <label>When I feel “behind” others (grades, careers, bodies, etc.)...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qSC2" value="UP_GROWTH" />
//             I set goals or adjust habits to grow in that direction.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qSC2" value="UP_THREAT" />
//             I ruminate, feel stuck, or avoid thinking about it.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qSC2" value="DOWN_BUFFER" />
//             I remind myself of areas where I’m doing better than others.
//           </label>
//         </div>

//         <label>When I’m doing “better” than someone else, I usually...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qSC3" value="DOWN_BUFFER" />
//             Feel reassured or comforted that I’m at least not doing worse.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qSC3" value="UP_GROWTH" />
//             Focus more on my own path and what I still want to improve.
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qSC3" value="NEUTRAL" />
//             Don’t think much about it in comparison terms.
//           </label>
//         </div>

//         <label>Overall, the voice in my head when I compare myself to others is...</label>
//         <div className="self-radio-group">
//           <label className="self-radio-option">
//             <input type="radio" name="qSC4" value="UP_GROWTH" />
//             Encouraging (“You can grow into this, here’s what to try.”).
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qSC4" value="UP_THREAT" />
//             Harsh or critical (“You’re not good enough, you’re failing.”).
//           </label>
//           <label className="self-radio-option">
//             <input type="radio" name="qSC4" value="DOWN_BUFFER" />
//             Protective (“You’re still doing fine compared to X or Y.”).
//           </label>
//         </div>

//         <button onClick={() => window.runSelfSchemaQuiz?.()}>
//           See my self-schema snapshot
//         </button>
//       </div>

//       <div className="card" id="self-results-card" style={{ display: "none" }}></div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import "../styles.css";

// export default function SelfSchemaExplorer() {
//   const [answers, setAnswers] = useState({});
//   const [result, setResult] = useState(null);

//   function updateAnswer(name, value) {
//     setAnswers((prev) => ({ ...prev, [name]: value }));
//   }

//   // -----------------------------
//   // Compute MBTI
//   // -----------------------------
//   function computeMBTIType() {
//     const axes = {
//       EI: ["qEI1", "qEI2", "qEI3", "qEI4"],
//       SN: ["qSN1", "qSN2", "qSN3", "qSN4"],
//       TF: ["qTF1", "qTF2", "qTF3", "qTF4"],
//       JP: ["qJP1", "qJP2", "qJP3", "qJP4"],
//     };

//     const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

//     function countFor(names) {
//       for (const q of names) {
//         if (!answers[q]) {
//           alert("Please answer all personality questions.");
//           return false;
//         }
//         scores[answers[q]]++;
//       }
//       return true;
//     }

//     if (!countFor(axes.EI)) return null;
//     if (!countFor(axes.SN)) return null;
//     if (!countFor(axes.TF)) return null;
//     if (!countFor(axes.JP)) return null;

//     const letters = {
//       EI: scores.E >= scores.I ? "E" : "I",
//       SN: scores.S >= scores.N ? "S" : "N",
//       TF: scores.T >= scores.F ? "T" : "F",
//       JP: scores.J >= scores.P ? "J" : "P",
//     };

//     const type = letters.EI + letters.SN + letters.TF + letters.JP;

//     const axisPerc = (pos, neg) => {
//       const posScore = scores[pos];
//       const negScore = scores[neg];
//       const total = posScore + negScore || 1;
//       return {
//         pos: Math.round((posScore / total) * 100),
//         neg: Math.round((negScore / total) * 100),
//       };
//     };

//     return {
//       type,
//       letters,
//       percents: {
//         EI: axisPerc("E", "I"),
//         SN: axisPerc("S", "N"),
//         TF: axisPerc("T", "F"),
//         JP: axisPerc("J", "P"),
//       },
//     };
//   }

//   // -----------------------------
//   // Compute Social Comparison Style
//   // -----------------------------
//   function computeComparisonStyle() {
//     const questions = ["qSC1", "qSC2", "qSC3", "qSC4"];
//     const counts = {
//       UP_GROWTH: 0,
//       UP_THREAT: 0,
//       DOWN_BUFFER: 0,
//       NEUTRAL: 0,
//     };

//     for (const q of questions) {
//       if (!answers[q]) {
//         alert("Please answer all social comparison questions.");
//         return null;
//       }
//       counts[answers[q]]++;
//     }

//     const bestKey = Object.keys(counts).reduce((a, b) =>
//       counts[a] > counts[b] ? a : b
//     );

//     const map = {
//       UP_GROWTH: {
//         label: "Upward growth-oriented",
//         desc:
//           "You respond to upward comparisons with motivation and inspiration.",
//         chip: "self-chip-growth",
//       },
//       UP_THREAT: {
//         label: "Upward threat-sensitive",
//         desc:
//           "Upward comparisons feel self-critical or discouraging.",
//         chip: "self-chip-threat",
//       },
//       DOWN_BUFFER: {
//         label: "Downward buffering",
//         desc:
//           "You protect your self-worth by comparing yourself downward.",
//         chip: "self-chip-buffer",
//       },
//       NEUTRAL: {
//         label: "Low comparison / Neutral",
//         desc:
//           "Comparison isn't a dominant part of your self-evaluation.",
//         chip: "self-chip-neutral",
//       },
//     };

//     return {
//       key: bestKey,
//       label: map[bestKey].label,
//       description: map[bestKey].desc,
//       chipClass: map[bestKey].chip,
//     };
//   }

//   // -----------------------------
//   // Main Quiz Runner
//   // -----------------------------
//   function runSelfSchemaQuiz() {
//     const personality = computeMBTIType();
//     if (!personality) return;

//     const comparison = computeComparisonStyle();
//     if (!comparison) return;

//     setResult({ personality, comparison });
//   }

//   // -----------------------------
//   // Result Axis Component
//   // -----------------------------
//   function AxisResult({ axis, letters, perc }) {
//     const descriptions = {
//       EI:
//         letters.EI === "E"
//           ? "You lean toward Extraversion."
//           : "You lean toward Introversion.",
//       SN:
//         letters.SN === "S"
//           ? "You lean toward Sensing."
//           : "You lean toward Intuition.",
//       TF:
//         letters.TF === "T"
//           ? "You lean toward Thinking."
//           : "You lean toward Feeling.",
//       JP:
//         letters.JP === "J"
//           ? "You lean toward Judging."
//           : "You lean toward Perceiving.",
//     };

//     return (
//       <div className="self-axis-row">
//         <div className="self-axis-header">
//           <div>{axis.left} – {axis.right}</div>
//           <div>{perc.pos}% {axis.left} · {perc.neg}% {axis.right}</div>
//         </div>

//         <div className="self-axis-bar">
//           <div
//             className="self-axis-segment self-axis-left"
//             style={{ width: `${perc.pos}%` }}
//           />
//           <div
//             className="self-axis-segment self-axis-right"
//             style={{ width: `${perc.neg}%` }}
//           />
//         </div>

//         <p className="self-results-subtitle">
//           {descriptions[axis.key]}
//         </p>
//       </div>
//     );
//   }

//   // -----------------------------
//   // JSX
//   // -----------------------------
//   return (
//     <div id="self-tab" className="tab-content">
//       <div className="card">
//         <h2>Self-Schemas & Personality</h2>
//         <p className="subtitle">
//           This informal questionnaire explores how you act, decide, and compare yourself
//           with others.
//         </p>
//       </div>

//       {/* — YOUR QUESTIONNAIRE EXACTLY AS YOU WROTE IT — */}
//       {/* except every <input> now calls updateAnswer() */}

//       {/* Example conversion for one input: */}
//       {/* 
//       <input
//         type="radio"
//         name="qEI1"
//         value="E"
//         onChange={(e) => updateAnswer("qEI1", e.target.value)}
//       />
//       */}

//       {/* ⚠️ If you want, I will convert ALL your inputs in the next message. */}

//       <button onClick={runSelfSchemaQuiz} className="calculate-btn">
//         See my self-schema snapshot
//       </button>

//       {result && (
//         <div className="card" id="self-results-card">
//           <h3>Your self-schema snapshot</h3>
//           <p>Your personality pattern is:</p>
//           <div className="self-personality-type">{result.personality.type}</div>

//           <div className="self-axis-grid">
//             <AxisResult
//               axis={{ key: "EI", left: "E", right: "I" }}
//               letters={result.personality.letters}
//               perc={result.personality.percents.EI}
//             />
//             <AxisResult
//               axis={{ key: "SN", left: "S", right: "N" }}
//               letters={result.personality.letters}
//               perc={result.personality.percents.SN}
//             />
//             <AxisResult
//               axis={{ key: "TF", left: "T", right: "F" }}
//               letters={result.personality.letters}
//               perc={result.personality.percents.TF}
//             />
//             <AxisResult
//               axis={{ key: "JP", left: "J", right: "P" }}
//               letters={result.personality.letters}
//               perc={result.personality.percents.JP}
//             />
//           </div>

//           <h3>Social Comparison Style</h3>
//           <p>
//             Dominant style:{" "}
//             <span className={`self-chip ${result.comparison.chipClass}`}>
//               {result.comparison.label}
//             </span>
//           </p>

//           <p className="self-results-subtitle">
//             {result.comparison.description}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }






import React, { useState } from "react";
import "../styles.css";

export default function SelfSchemaExplorer() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  function updateAnswer(name, value) {
    setAnswers((prev) => ({ ...prev, [name]: value }));
  }

  // ------------------------------------------------------------
  // COMPUTE MBTI TYPE
  // ------------------------------------------------------------
  function computeMBTIType() {
    const axes = {
      EI: ["qEI1", "qEI2", "qEI3", "qEI4"],
      SN: ["qSN1", "qSN2", "qSN3", "qSN4"],
      TF: ["qTF1", "qTF2", "qTF3", "qTF4"],
      JP: ["qJP1", "qJP2", "qJP3", "qJP4"],
    };

    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    function countFor(group) {
      for (const q of group) {
        if (!answers[q]) {
          alert("Please answer all personality questions.");
          return false;
        }
        scores[answers[q]]++;
      }
      return true;
    }

    if (!countFor(axes.EI)) return null;
    if (!countFor(axes.SN)) return null;
    if (!countFor(axes.TF)) return null;
    if (!countFor(axes.JP)) return null;

    const letters = {
      EI: scores.E >= scores.I ? "E" : "I",
      SN: scores.S >= scores.N ? "S" : "N",
      TF: scores.T >= scores.F ? "T" : "F",
      JP: scores.J >= scores.P ? "J" : "P",
    };

    const type = letters.EI + letters.SN + letters.TF + letters.JP;

    const percent = (pos, neg) => {
      const posScore = scores[pos];
      const negScore = scores[neg];
      const total = posScore + negScore || 1;
      return {
        pos: Math.round((posScore / total) * 100),
        neg: Math.round((negScore / total) * 100),
      };
    };

    return {
      type,
      letters,
      percents: {
        EI: percent("E", "I"),
        SN: percent("S", "N"),
        TF: percent("T", "F"),
        JP: percent("J", "P"),
      },
    };
  }

  // ------------------------------------------------------------
  // SOCIAL COMPARISON STYLE
  // ------------------------------------------------------------
  function computeComparisonStyle() {
    const keys = ["qSC1", "qSC2", "qSC3", "qSC4"];
    const counts = {
      UP_GROWTH: 0,
      UP_THREAT: 0,
      DOWN_BUFFER: 0,
      NEUTRAL: 0,
    };

    for (const q of keys) {
      if (!answers[q]) {
        alert("Please answer all social comparison questions.");
        return null;
      }
      counts[answers[q]]++;
    }

    const best = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );

    const map = {
      UP_GROWTH: {
        label: "Upward growth-oriented",
        description:
          "You respond to people ahead of you as sources of inspiration and motivation.",
        chipClass: "self-chip-growth",
      },
      UP_THREAT: {
        label: "Upward threat-sensitive",
        description:
          "Upward comparisons feel discouraging or self-critical.",
        chipClass: "self-chip-threat",
      },
      DOWN_BUFFER: {
        label: "Downward buffering",
        description:
          "You protect your self-worth by comparing downward.",
        chipClass: "self-chip-buffer",
      },
      NEUTRAL: {
        label: "Low comparison / neutral",
        description:
          "You notice differences but don't interpret them strongly.",
        chipClass: "self-chip-neutral",
      },
    };

    return { ...map[best], key: best };
  }

  // ------------------------------------------------------------
  // RUN QUIZ
  // ------------------------------------------------------------
  function runQuiz() {
    const personality = computeMBTIType();
    if (!personality) return;
    const comparison = computeComparisonStyle();
    if (!comparison) return;
    setResult({ personality, comparison });
  }

  // ------------------------------------------------------------
  // AXIS RESULT BLOCK
  // ------------------------------------------------------------
  function AxisBlock({ axis, letters, perc }) {
    const text = {
      EI:
        letters.EI === "E"
          ? "You lean toward Extraversion."
          : "You lean toward Introversion.",
      SN:
        letters.SN === "S"
          ? "You lean toward Sensing."
          : "You lean toward Intuition.",
      TF:
        letters.TF === "T"
          ? "You lean toward Thinking."
          : "You lean toward Feeling.",
      JP:
        letters.JP === "J"
          ? "You lean toward Judging."
          : "You lean toward Perceiving.",
    };

    return (
      <div className="self-axis-row">
        <div className="self-axis-header">
          <div className="self-axis-names">
            {axis.left} – {axis.right}
          </div>
          <div className="self-axis-balance">
            {perc.pos}% {axis.left} · {perc.neg}% {axis.right}
          </div>
        </div>

        <div className="self-axis-bar">
          <div
            className="self-axis-segment self-axis-left"
            style={{ width: `${perc.pos}%` }}
          />
          <div
            className="self-axis-segment self-axis-right"
            style={{ width: `${perc.neg}%` }}
          />
        </div>

        <p className="self-results-subtitle">{text[axis.key]}</p>
      </div>
    );
  }

  // ------------------------------------------------------------
  // RENDER
  // ------------------------------------------------------------
  return (
    <div id="self-tab" className="tab-content">

      {/* ---------------- HEADER ---------------- */}
      <div className="card">
        <h2>Self-Schemas & Personality</h2>
        <p className="subtitle">
          This reflective tool summarizes how you act, process information,
          make decisions, and evaluate yourself socially.
        </p>
      </div>

      {/* ---------------- ALL QUESTIONS BLOCKS ---------------- */}
      {/** ---------------- SECTION 1: E/I ---------------- */}
      <div className="card">
        <h3>1. Social energy (E–I)</h3>

        <label>In social situations, I usually…</label>
        <div className="self-radio-group">
          <label className="self-radio-option">
            <input type="radio" name="qEI1" value="E"
              onChange={(e) => updateAnswer("qEI1", e.target.value)} />
            Talk to many people, including people I don't know.
          </label>
          <label className="self-radio-option">
            <input type="radio" name="qEI1" value="I"
              onChange={(e) => updateAnswer("qEI1", e.target.value)} />
            Stay with a few close people.
          </label>
        </div>

        <label>At the end of a long day…</label>
        <div className="self-radio-group">
          <label className="self-radio-option">
            <input type="radio" name="qEI2" value="E"
              onChange={(e) => updateAnswer("qEI2", e.target.value)} />
            I recharge with others.
          </label>
          <label className="self-radio-option">
            <input type="radio" name="qEI2" value="I"
              onChange={(e) => updateAnswer("qEI2", e.target.value)} />
            I recharge alone.
          </label>
        </div>

        <label>People who know me say I'm…</label>
        <div className="self-radio-group">
          <label className="self-radio-option">
            <input type="radio" name="qEI3" value="E"
              onChange={(e) => updateAnswer("qEI3", e.target.value)} />
            Outgoing and expressive.
          </label>
          <label className="self-radio-option">
            <input type="radio" name="qEI3" value="I"
              onChange={(e) => updateAnswer("qEI3", e.target.value)} />
            Reserved or reflective.
          </label>
        </div>

        <label>In a new group…</label>
        <div className="self-radio-group">
          <label className="self-radio-option">
            <input type="radio" name="qEI4" value="E"
              onChange={(e) => updateAnswer("qEI4", e.target.value)} />
            I speak up quickly.
          </label>
          <label className="self-radio-option">
            <input type="radio" name="qEI4" value="I"
              onChange={(e) => updateAnswer("qEI4", e.target.value)} />
            I observe first.
          </label>
        </div>
      </div>

      {/* ---------------- SECTION 2: S/N ---------------- */}
      <div className="card">
        <h3>2. How you process information (S–N)</h3>

        {["1","2","3","4"].map((n, idx) => {
          const prompts = [
            ["Clear examples & facts","Big-picture ideas & patterns"],
            ["Realistic/practical focus","Creative reframing"],
            ["Precise & detailed","Abstract & imaginative"],
            ["Concrete future plans","Exploring possibilities"]
          ];
          return (
            <div key={idx}>
              <label>{[
                "When learning something new…",
                "When solving a problem…",
                "Descriptions I prefer…",
                "When thinking about the future…"
              ][idx]}</label>
              <div className="self-radio-group">
                <label className="self-radio-option">
                  <input
                    type="radio"
                    name={`qSN${n}`}
                    value="S"
                    onChange={(e) => updateAnswer(`qSN${n}`, e.target.value)}
                  />
                  {prompts[idx][0]}
                </label>
                <label className="self-radio-option">
                  <input
                    type="radio"
                    name={`qSN${n}`}
                    value="N"
                    onChange={(e) => updateAnswer(`qSN${n}`, e.target.value)}
                  />
                  {prompts[idx][1]}
                </label>
              </div>
            </div>
          );
        })}
      </div>

      {/* ---------------- SECTION 3: T/F ---------------- */}
      <div className="card">
        <h3>3. How you decide (T–F)</h3>

        {[
          ["Logic, pros/cons", "Feelings & relational impact"],
          ["Clarify fairness/boundaries", "Preserve harmony"],
          ["Direct & honest", "Supportive and gentle"],
          ["Offer solutions/frameworks", "Offer empathy & validation"]
        ].map((pair, idx) => (
          <div key={idx}>
            <label>{[
              "When making a difficult decision…",
              "In conflicts, my first instinct…",
              "When giving feedback…",
              "When hearing a friend's problem…"
            ][idx]}</label>

            <div className="self-radio-group">
              <label className="self-radio-option">
                <input
                  type="radio"
                  name={`qTF${idx + 1}`}
                  value="T"
                  onChange={(e) => updateAnswer(`qTF${idx + 1}`, e.target.value)}
                />
                {pair[0]}
              </label>

              <label className="self-radio-option">
                <input
                  type="radio"
                  name={`qTF${idx + 1}`}
                  value="F"
                  onChange={(e) => updateAnswer(`qTF${idx + 1}`, e.target.value)}
                />
                {pair[1]}
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- SECTION 4: J/P ---------------- */}
      <div className="card">
        <h3>4. How you structure your life (J–P)</h3>

        {[
          ["Plan ahead & schedule", "Keep options open"],
          ["Organized & structured", "Organized chaos"],
          ["Comfortable when plans are set", "Prefer adaptable plans"],
          ["Stress from change", "Curious about change"]
        ].map((pair, idx) => (
          <div key={idx}>
            <label>{[
              "When working on assignments…",
              "My spaces are usually…",
              "I feel most comfortable when…",
              "When plans change unexpectedly…"
            ][idx]}</label>

            <div className="self-radio-group">
              <label className="self-radio-option">
                <input
                  type="radio"
                  name={`qJP${idx + 1}`}
                  value="J"
                  onChange={(e) => updateAnswer(`qJP${idx + 1}`, e.target.value)}
                />
                {pair[0]}
              </label>

              <label className="self-radio-option">
                <input
                  type="radio"
                  name={`qJP${idx + 1}`}
                  value="P"
                  onChange={(e) => updateAnswer(`qJP${idx + 1}`, e.target.value)}
                />
                {pair[1]}
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- SECTION 5: SOCIAL COMPARISON ---------------- */}
      <div className="card">
        <h3>5. Social comparison & self-evaluation</h3>

        {[
          [
            "I feel inspired & motivated.",
            "I feel discouraged or inferior.",
            "I notice it but it doesn't affect me much."
          ],
          [
            "I set goals & grow.",
            "I ruminate or feel stuck.",
            "I reassure myself by comparing downward."
          ],
          [
            "I stay focused on my path.",
            "I feel reassured I'm not doing worse.",
            "I don't think in comparison terms."
          ],
          [
            "Encouraging voice.",
            "Harsh/critical voice.",
            "A protective voice."
          ]
        ].map((opts, idx) => (
          <div key={idx}>
            <label>{[
              "When someone is better than me at something important…",
              "When I feel behind others…",
              "When I'm doing better than someone…",
              "The voice in my head during comparisons…"
            ][idx]}</label>

            <div className="self-radio-group">
              <label className="self-radio-option">
                <input
                  type="radio"
                  name={`qSC${idx + 1}`}
                  value={idx === 2 ? "DOWN_BUFFER" : "UP_GROWTH"}
                  onChange={(e) => updateAnswer(`qSC${idx + 1}`, e.target.value)}
                />
                {opts[0]}
              </label>

              <label className="self-radio-option">
                <input
                  type="radio"
                  name={`qSC${idx + 1}`}
                  value="UP_THREAT"
                  onChange={(e) => updateAnswer(`qSC${idx + 1}`, e.target.value)}
                />
                {opts[1]}
              </label>

              <label className="self-radio-option">
                <input
                  type="radio"
                  name={`qSC${idx + 1}`}
                  value={idx === 1 ? "DOWN_BUFFER" : "NEUTRAL"}
                  onChange={(e) => updateAnswer(`qSC${idx + 1}`, e.target.value)}
                />
                {opts[2]}
              </label>
            </div>
          </div>
        ))}

        <button className="calculate-btn" onClick={runQuiz}>
          See my self-schema snapshot
        </button>
      </div>

      {/* ---------------- RESULTS CARD ---------------- */}
      {result && (
        <div className="card" id="self-results-card">
          <h3>Your self-schema snapshot</h3>

          <p>Your MBTI-style pattern:</p>
          <div className="self-personality-type">{result.personality.type}</div>

          <div className="self-axis-grid">
            <AxisBlock
              axis={{ key: "EI", left: "E", right: "I" }}
              letters={result.personality.letters}
              perc={result.personality.percents.EI}
            />
            <AxisBlock
              axis={{ key: "SN", left: "S", right: "N" }}
              letters={result.personality.letters}
              perc={result.personality.percents.SN}
            />
            <AxisBlock
              axis={{ key: "TF", left: "T", right: "F" }}
              letters={result.personality.letters}
              perc={result.personality.percents.TF}
            />
            <AxisBlock
              axis={{ key: "JP", left: "J", right: "P" }}
              letters={result.personality.letters}
              perc={result.personality.percents.JP}
            />
          </div>

          <h3>Social comparison style</h3>
          <p>
            Dominant style:{" "}
            <span className={`self-chip ${result.comparison.chipClass}`}>
              {result.comparison.label}
            </span>
          </p>

          <p className="self-results-subtitle">{result.comparison.description}</p>
        </div>
      )}
    </div>
  );
}
