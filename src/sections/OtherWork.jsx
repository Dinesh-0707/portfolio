import { Reveal } from '../motion.jsx';

export default function OtherWork() {
  return (
    <section id={"other"}>
        <Reveal as="p" className={"eyebrow"}>Other work</Reveal>
        <Reveal as="h2">More things I've built</Reveal>
        <Reveal as="p" className={"lede"}>Research, an AI agent and two industry job simulations.</Reveal>
        <div className={"others"}>
          <Reveal as="article" className={"card other"}>
            <h3><a href={"https://github.com/Dinesh-0707/voice-comparison"}>Forensic voice comparison</a></h3>
            <p className={"kind"}>MSc dissertation</p>
            <p>Speaker verification with SpeechBrain embeddings and cosine similarity on LibriSpeech clips. <a href={"https://voice-comparison-gafkqkg4wzbdsahpvj6x3v.streamlit.app/"}>Demo</a></p>
          </Reveal>
          <Reveal as="article" className={"card other"} delay={0.08}>
            <h3><a href={"https://github.com/Dinesh-0707/law-firm-intake"}>Intake</a></h3>
            <p className={"kind"}>AI enquiry assistant for small law firms</p>
            <p>A Gemini agent with tool calls that checks conflicts against a Postgres database and drafts replies for a solicitor to approve. <a href={"https://law-firm-intake-sage.vercel.app/"}>Demo</a></p>
          </Reveal>
          <Reveal as="article" className={"card other"}>
            <h3><a href={"https://github.com/Dinesh-0707/british-airways-data-science-forage"}>British Airways data science</a></h3>
            <p className={"kind"}>Forage job simulation</p>
            <p>Review sentiment analysis and a booking prediction model on 50,000 customer records (ROC-AUC 0.765).</p>
          </Reveal>
          <Reveal as="article" className={"card other"} delay={0.08}>
            <h3><a href={"https://github.com/Dinesh-0707/Quantium-data-analytics-forage"}>Quantium retail analytics</a></h3>
            <p className={"kind"}>Forage job simulation</p>
            <p>Customer segmentation and a trial-store test showing a statistically significant sales uplift.</p>
          </Reveal>
        </div>
      </section>
  );
}
