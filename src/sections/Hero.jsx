import { Reveal } from '../motion.jsx';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <Reveal as="p" className="kicker">Data &amp; AI Professional</Reveal>
        <Reveal as="h1" delay={0.05}>Dinesh Navaneethan <span className="creds">BCA, MSc</span></Reveal>
        <Reveal as="p" className="intro" delay={0.1}>
          Data and AI graduate with an MSc in Artificial Intelligence with Business Strategy from
          Aston University and a BCA in Data Science. I work across the data lifecycle: collecting
          and cleaning data, building pipelines and analysis in Python and SQL, and applying machine
          learning to produce results that support decisions.
        </Reveal>
        <Reveal as="div" className="btns" delay={0.15}>
            <a className={"btn primary"} href={"mailto:dineshnavneethan@gmail.com"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><rect x={"3"} y={"5"} width={"18"} height={"14"} rx={"2"}></rect><path d={"m3 7 9 6 9-6"}></path></svg>
              Email
            </a>
            <a className={"btn"} href={"https://www.linkedin.com/in/dineshnavaneethan"}>
              <svg viewBox={"0 0 24 24"} fill={"currentColor"}><path d={"M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.6h.06c.53-1 1.83-1.9 3.76-1.9 4 0 4.88 2.5 4.88 5.9v5.4h-4v-4.8c0-1.3-.03-2.9-1.8-2.9s-2.1 1.4-2.1 2.8v4.9h-4v-11Z"}></path></svg>
              LinkedIn
            </a>
            <a className={"btn"} href={"https://github.com/Dinesh-0707"}>
              <svg viewBox={"0 0 24 24"} fill={"currentColor"}><path d={"M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"}></path></svg>
              GitHub
            </a>
        </Reveal>
      </div>
      <Reveal as="figure" className="portrait" delay={0.1}>
        <img src="assets/img/profile-cutout.webp" width="832" height="1146" alt="Portrait of Dinesh Navaneethan" />
      </Reveal>
    </section>
  );
}
