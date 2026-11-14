import { Reveal } from '../motion.jsx';
import { PROJECTS } from '../projects.js';

export default function Projects() {
  return (
    <section id="projects">
      <Reveal as="h2" className="big">Projects</Reveal>
      <div className="projects">
        {PROJECTS.map((p, i) => (
          <Reveal as="a" className="card proj" href={`#/project/${p.id}`} key={p.id} delay={(i % 2) * 0.06}>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <span className="open" aria-hidden="true">View project &rarr;</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
