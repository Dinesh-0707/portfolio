import { Reveal } from '../motion.jsx';

export default function Education() {
  return (
    <section id="education">
      <Reveal as="h2" className="big">Education</Reveal>
      <div className="edu">
        <Reveal as="article" className="card edu-card">
          <p className="when">2024 to 2026</p>
          <h3>MSc Artificial Intelligence with Business Strategy</h3>
          <p className="uni">Aston University, Birmingham</p>
        </Reveal>
        <Reveal as="article" className="card edu-card" delay={0.08}>
          <p className="when">2021 to 2024</p>
          <h3>BCA Data Science</h3>
          <p className="uni">Vels University, Chennai</p>
          <p className="grade">First Class with Distinction · CGPA 8.04/10</p>
        </Reveal>
      </div>
    </section>
  );
}
