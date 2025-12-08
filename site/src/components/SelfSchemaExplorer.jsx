
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
      <h1>Self-Schema Interpreter</h1>
      <p className="subtitle">
        A reflective tool that interprets your sense of self using concepts from symbolic interactionism, embodiment theory, narrative identity, and the microbiome.
      </p>

      <div className="container">
        {/* LEFT COLUMN — QUESTIONS */}
        <div>

          {/* ========================================================= */}
          {/* 1. LOOKING-GLASS SENSITIVITY */}
          {/* ========================================================= */}
          <div className="card">
            <h3>1. Looking-glass self</h3>

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
          <div className="container">
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
          </div>
        )}
      </div>
    </div>
  );
}

