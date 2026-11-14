import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Nav from './Nav.jsx';
import Hero from './sections/Hero.jsx';
import Education from './sections/Education.jsx';
import Projects from './sections/Projects.jsx';
import OtherWork from './sections/OtherWork.jsx';
import Skills from './sections/Skills.jsx';
import Certifications from './sections/Certifications.jsx';
import Contact from './sections/Contact.jsx';
import ProjectPage from './ProjectPage.jsx';
import { PROJECTS } from './projects.js';

// Routing is hash based (#/project/<id>), so section links like #education keep working
// and the site needs no server rules on GitHub Pages.
const PROJECT_HASH = /^#\/project\/([\w-]+)$/;
const readRoute = () => { const m = PROJECT_HASH.exec(location.hash); return m ? m[1] : null; };
const HOME_TITLE = document.title;

export default function App() {
  const [projectId, setProjectId] = useState(readRoute);
  const homeScroll = useRef(0);
  const previous = useRef(projectId);

  useEffect(() => {
    const onHash = () => {
      const next = readRoute();
      if (previous.current === null && next !== null) homeScroll.current = scrollY;   // remember where the list was
      setProjectId(next);
    };
    addEventListener('hashchange', onHash);
    return () => removeEventListener('hashchange', onHash);
  }, []);

  useLayoutEffect(() => {
    const from = previous.current;
    previous.current = projectId;
    const project = PROJECTS.find((p) => p.id === projectId);
    document.title = projectId ? `${project ? project.title : 'Project'} · Dinesh Navaneethan` : HOME_TITLE;
    if (from === projectId) return;
    if (projectId !== null) { scrollTo({ top: 0, behavior: 'instant' }); return; }
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView({ behavior: 'instant' });
    else scrollTo({ top: homeScroll.current, behavior: 'instant' });
  }, [projectId]);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  return (
    <>
      <motion.div className="progress" aria-hidden="true" style={{ scaleX: progress }} />
      <Nav />
      {projectId !== null ? (
        <ProjectPage project={PROJECTS.find((p) => p.id === projectId)} />
      ) : (
        <main id="top">
          <Hero />
          <Education />
          <Projects />
          <OtherWork />
          <Skills />
          <Certifications />
          <Contact />
        </main>
      )}
    </>
  );
}
