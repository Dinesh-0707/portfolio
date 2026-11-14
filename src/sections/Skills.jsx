import { Reveal } from '../motion.jsx';

// Add or remove skills here; each one shows as a chip.
const SKILLS = [
  'Python', 'SQL', 'PostgreSQL', 'SQLite', 'pandas',
  'ETL and ELT pipelines', 'REST API ingestion', 'Data modelling', 'Data warehousing', 'Medallion architecture',
  'Apache Airflow', 'dbt', 'Delta Lake', 'DuckDB', 'Docker',
  'Data quality and testing', 'Git and GitHub', 'GitHub Actions',
  'Streamlit', 'Power BI', 'matplotlib',
];

export default function Skills() {
  return (
    <section id="skills">
      <Reveal as="h2" className="big">Skills</Reveal>
      <Reveal as="ul" className="skill-list" delay={0.05}>
        {SKILLS.map((s) => <li key={s}>{s}</li>)}
      </Reveal>
    </section>
  );
}
