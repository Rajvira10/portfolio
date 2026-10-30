import './App.css';

const github = 'https://github.com/Rajvira10';
const email = 'mailto:rajvirahmedshuvo10@gmail.com';
const contributions = [
  { project: 'franz-go', title: 'Fix a kfake shutdown deadlock', language: 'Go', status: 'Merged', href: 'https://github.com/twmb/franz-go/pull/1509' },
  { project: 'fx', title: 'Render Unicode symbol matches correctly', language: 'Go', status: 'Merged', href: 'https://github.com/antonmedv/fx/pull/440' },
  { project: 'd3-scale', title: 'Degenerate descending domains', language: 'JavaScript', status: 'Open', href: 'https://github.com/d3/d3-scale/pull/291' },
];

function App() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <div className="page">
      <header className="profile">
        <a className="monogram" href="#main" aria-label="Rajvir Ahmed Shuvo, home">r<span>.</span></a>
        <h1>Rajvir Ahmed<br/>Shuvo</h1>
        <p className="role">Full-stack developer</p>
        <p className="location">Dhaka, Bangladesh</p>
        <nav aria-label="Contact links"><a href={email}>Email <span aria-hidden="true">↗</span></a><a href={github}>GitHub <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/rajvir-ahmed-shuvo/">LinkedIn <span aria-hidden="true">↗</span></a></nav>
      </header>
      <main id="main">
        <section className="intro" aria-label="Introduction"><p>I build backend services and web and mobile apps.</p><p>I work with Go, Laravel, PostgreSQL and Redis, alongside React, TypeScript and Flutter.</p><p className="interests">Interested in distributed systems, queues, caching and the work of debugging failures.</p></section>
        <section className="product" aria-labelledby="product-title">
          <h2 id="product-title">Building</h2>
          <h3><a href="https://github.com/Rajvira10/remvyn">Remvyn <span aria-hidden="true">↗</span></a></h3>
          <p>Open-source desktop SSH and server management: terminals, SFTP, port forwarding and Linux host monitoring.</p>
          <p className="product-stack">Go, Wails, React, TypeScript</p>
        </section>
        <section className="work" aria-labelledby="work-title"><div className="section-heading"><h2 id="work-title">Recent contributions</h2><span>2026</span></div><p className="work-intro">Selected fixes, with code, tests and review.</p><div className="work-list">{contributions.map(item=><a className="work-row" key={item.project} href={item.href}><div className="work-name"><h3>{item.project}</h3><span>{item.language}</span></div><div className="work-details"><span>{item.title}</span><span className={item.status==='Merged'?'status merged':'status'}>{item.status}</span></div><span className="external" aria-hidden="true">↗</span></a>)}</div><a className="all-work" href="https://github.com/pulls?q=is%3Apr+author%3ARajvira10+is%3Apublic">All public pull requests <span aria-hidden="true">↗</span></a><p className="status-note">Status checked 30 October 2026. Open changes are awaiting review.</p></section>
        <footer><p>Have something to build?<br/><a href={email}>Let’s get in touch.</a></p><span>© {new Date().getFullYear()}</span></footer>
      </main>
    </div>
  </>;
}
export default App;
