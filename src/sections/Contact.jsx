import { Reveal } from '../motion.jsx';

export default function Contact() {
  return (
    <section id={"contact"} className={"contact"}>
        <Reveal as="p" className={"eyebrow"}>Contact</Reveal>
        <Reveal as="h2">Let's build something <span className={"grad"}>with data</span></Reveal>
        <Reveal as="p">Based in Birmingham, UK, and open to relocation.</Reveal>
        <Reveal as="a" className={"mail"} href={"mailto:dineshnavneethan@gmail.com"}>dineshnavneethan@gmail.com</Reveal>
        <Reveal as="div" className={"btns"}>
          <a className={"btn primary"} href={"mailto:dineshnavneethan@gmail.com"}>Email me</a>
          <a className={"btn"} href={"https://www.linkedin.com/in/dineshnavaneethan"}>LinkedIn</a>
          <a className={"btn"} href={"https://github.com/Dinesh-0707"}>GitHub</a>
        </Reveal>
        <Reveal as="p" className={"note"}>
          The live demos run on free hosting, so one that hasn't been used for a while can
          take up to a minute to start.
        </Reveal>
      </section>
  );
}
