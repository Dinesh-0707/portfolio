import { Reveal } from './motion.jsx';

export default function ProjectPage({ project }) {
  if (!project) {
    return (
      <main className="page" id="top">
        <a className="back" href="#projects">&larr; All projects</a>
        <h1 className="page-title">Project not found</h1>
        <p className="lead">That project doesn&rsquo;t exist. Head back to the list to pick one.</p>
      </main>
    );
  }
  const { title, about, kpis, points, stack, links, image } = project;
  return (
    <main className="page" id="top">
      <a className="back" href="#projects">&larr; All projects</a>
      <Reveal as="p" className="eyebrow">Project</Reveal>
      <Reveal as="h1" className="page-title">{title}</Reveal>
      <Reveal as="p" className="lead" delay={0.05}>{about}</Reveal>

      {links?.length > 0 && (
        <Reveal as="div" className="btns" delay={0.08}>
          {links.map((l) => (
            <a key={l.href} className={`btn${l.primary ? ' primary' : ''}`} href={l.href} target="_blank" rel="noopener">{l.label} &rarr;</a>
          ))}
        </Reveal>
      )}

      {kpis?.length > 0 && (
        <Reveal as="div" className="kpis page-kpis">
          {kpis.map((k) => <div key={k.label}><b>{k.value}</b><span>{k.label}</span></div>)}
        </Reveal>
      )}

      {image && (
        <Reveal as="figure" className="shot page-shot">
          <img src={image.src} width={image.width} height={image.height} alt={image.alt} />
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </Reveal>
      )}

      {points?.length > 0 && (
        <Reveal as="div" className="page-block">
          <h2 className="eyebrow">What I did</h2>
          <ul className="points">{points.map((t) => <li key={t}>{t}</li>)}</ul>
        </Reveal>
      )}

      {stack?.length > 0 && (
        <Reveal as="div" className="page-block">
          <h2 className="eyebrow">Built with</h2>
          <ul className="tags">{stack.map((t) => <li key={t}>{t}</li>)}</ul>
        </Reveal>
      )}
    </main>
  );
}
