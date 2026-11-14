import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'education', label: 'Education', hideSmall: true },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

export default function Nav() {
  const [active, setActive] = useState(-1);
  useEffect(() => {
    const onScroll = () => {
      const mid = innerHeight * 0.4;
      let current = -1;
      LINKS.forEach((l, k) => {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top < mid) current = k;
      });
      setActive(current);
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav aria-label="Main">
      <div className="nav-inner">
        <a className="brand" href="#top">Dinesh Navaneethan</a>
        <div className="nav-links">
          {LINKS.map((l, k) => (
            <a key={l.id} href={`#${l.id}`} className={`${l.hideSmall ? 'hide-s' : ''}${k === active ? ' active' : ''}`.trim() || undefined}>{l.label}</a>
          ))}
          <a className="cta" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
