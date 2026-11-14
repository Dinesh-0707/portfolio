// All project content lives here. To add a project, add one object to this list:
// it appears as a card in the Projects section and gets its own page at #/project/<id>.
//
//   id        short url-safe name, used in the page address
//   title     shown on the card and as the page heading
//   summary   one or two lines for the card
//   about     the longer introduction on the project page
//   kpis      optional headline numbers: [{ value, label }]
//   points    what you did, one bullet per item
//   stack     tools used
//   links     [{ label, href, primary? }]  (primary = highlighted button)
//   image     optional: { src, width, height, alt, caption }

export const PROJECTS = [
  {
    id: 'energy',
    title: 'UK Energy Price & Carbon Tracker',
    summary: 'When is electricity cheapest and cleanest? A year of half-hourly London price and carbon data, answered in SQL.',
    about: 'When is electricity cheapest and cleanest, and how much does it save to use it then? A pipeline that collects a year of half-hourly prices and carbon intensity for London and answers that in SQL.',
    kpis: [
      { value: '£843', label: 'saved per year' },
      { value: '64%', label: 'lower cost' },
      { value: '273 kg', label: 'CO2 avoided' },
    ],
    points: [
      'Ingests two public APIs (Octopus Agile prices, National Grid carbon intensity) with retries, saving each day\'s raw response before loading.',
      'Loads 17,568 half-hourly periods into PostgreSQL with primary keys and upserts, so re-running a day never creates duplicates.',
      'A completeness check found one missing half hour, traced to an API quirk at the year boundary. Fixing the loader brought coverage to 100%.',
      'Result: charging an EV in each day\'s cheapest hours instead of at 6pm costs 64% less, about £843 a year, and avoids 273 kg of CO2.',
    ],
    stack: ['Python', 'PostgreSQL', 'SQL', 'Docker', 'pandas', 'matplotlib'],
    links: [{ label: 'Code and write-up', href: 'https://github.com/Dinesh-0707/energy_tracker', primary: true }],
    image: {
      src: 'assets/img/energy-dashboard.png', width: 1532, height: 1035,
      alt: 'Dashboard: smart EV charging saves £843 a year (64%) and 273 kg of CO2; price and carbon by hour of day peak at 4 to 7pm; windier days have lower carbon; monthly EV cost by charging strategy.',
      caption: 'Dashboard generated from the pipeline\'s data, Nov 2025 to Oct 2026.',
    },
  },
  {
    id: 'stock',
    title: 'Stock Market Data Pipeline',
    summary: 'A daily stock-price batch pipeline with Airflow, Delta Lake and dbt, including a duplicate-data bug found and fixed.',
    about: 'A batch pipeline for daily stock prices, built to practise the tools data teams use: Airflow for scheduling, a Bronze/Silver/Gold layout, Delta Lake and dbt.',
    points: [
      'Five-task Airflow DAG in Docker: ingest, clean and validate, aggregate, merge into Delta Lake, then run dbt models and tests on DuckDB. A full run takes about 80 seconds.',
      'Found that 75% of the rows being read were duplicates from overlapping daily snapshots, which had made 93% of weekly return figures wrong. Fixed with run-date loads and Delta Lake MERGE.',
      '10 dbt data tests, including one row per stock per day, so the duplicate problem can\'t come back unnoticed.',
      'A separate demo app shows the reporting layer with a plain-English question box that turns questions into SQL.',
    ],
    stack: ['Python', 'Apache Airflow', 'dbt', 'Delta Lake', 'DuckDB', 'Docker'],
    links: [
      { label: 'Live demo', href: 'https://stock-nl-sql-demo-dwy26ueqy4gb3ybcbdohuk.streamlit.app/', primary: true },
      { label: 'Code', href: 'https://github.com/Dinesh-0707/stock-data-pipeline' },
    ],
  },
  {
    id: 'house-prices',
    title: 'UK Regional House Price Monitor',
    summary: 'Monthly house price data for 8 UK regions from HM Land Registry, kept in a small warehouse and shown in a dashboard.',
    about: 'Which UK regions are heating up or cooling down? Monthly house price data for 8 regions from HM Land Registry, kept in a small warehouse and shown in a dashboard.',
    points: [
      'Extracts three years of monthly figures from the UK House Price Index API, then cleans and deduplicates them into SQLite.',
      'Dashboard shows regional trends, year-on-year change and prices by property type.',
    ],
    stack: ['Python', 'SQLite', 'pandas', 'Streamlit'],
    links: [
      { label: 'Live demo', href: 'https://uk-house-price-dashboard-3kxstxtkpbp5hqpsdbglyf.streamlit.app/', primary: true },
      { label: 'Code', href: 'https://github.com/Dinesh-0707/uk-house-price-dashboard' },
    ],
  },
  {
    id: 'crime',
    title: 'UK City Crime Trends & Forecast',
    summary: 'Reported crime across 5 UK cities from the Police API, with a city comparison and a 3-month forecast.',
    about: 'Reported crime across 5 UK cities from the Police API, with a breakdown by category, a city comparison and a 3-month forecast.',
    points: [
      'Same pattern as the house price monitor (API to SQL warehouse to app), applied to a different domain.',
      'Forecasts each city with Holt\'s linear trend exponential smoothing.',
    ],
    stack: ['Python', 'SQLite', 'statsmodels', 'Streamlit'],
    links: [
      { label: 'Live demo', href: 'https://uk-crime-trends-forecast-2km7uvnzwmqwdkwnj6xu4s.streamlit.app/', primary: true },
      { label: 'Code', href: 'https://github.com/Dinesh-0707/uk-crime-trends-forecast' },
    ],
  },
];
