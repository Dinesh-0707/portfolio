import { Reveal } from '../motion.jsx';

export default function Certifications() {
  return (
    <section id={"certifications"}>
        <Reveal as="p" className={"eyebrow"}>Certifications</Reveal>
        <Reveal as="h2">Certifications</Reveal>
        <div className={"certs"}>
        <Reveal as="a" className={"card cert"} href={"assets/certs/niit-certified-data-analyst.jpg"}>
          <div><b>Certified Data Analyst Professional</b><span>NIIT, powered by StackRoute</span></div>
          <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M7 17 17 7M8 7h9v9"}></path></svg>
        </Reveal>
        <Reveal as="a" className={"card cert"} href={"https://www.theforage.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_38gAxsPFbDfLFbGdg_1775992315651_completion_certificate.pdf"} delay={0.08}>
          <div><b>Data Science Job Simulation, British Airways</b><span>Forage</span></div>
          <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M7 17 17 7M8 7h9v9"}></path></svg>
        </Reveal>
        <Reveal as="a" className={"card cert"} href={"https://www.theforage.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_38gAxsPFbDfLFbGdg_1775896611767_completion_certificate.pdf"} delay={0.16}>
          <div><b>Data Analytics Job Simulation, Quantium</b><span>Forage</span></div>
          <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M7 17 17 7M8 7h9v9"}></path></svg>
        </Reveal>
        </div>
      </section>
  );
}
