import './App.css'

const projects = [
  {
    name: 'Inventory API',
    description:
      'Inventory management API with role-based access control and immutable stock movement history.',
    technologies: ['TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    repositoryUrl: 'https://github.com/CarlosGit0519/inventory-api',
    docsUrl: 'https://inventory-api-6k0r.onrender.com/docs',
  },
  {
    name: 'E-commerce API',
    description:
      'E-commerce API for catalog, cart, checkout, orders, payments, and stock validation.',
    technologies: ['TypeScript', 'PostgreSQL', 'Prisma', 'Swagger'],
    repositoryUrl: 'https://github.com/CarlosGit0519/ecommerce-api',
  },
  {
    name: 'Booking System',
    description:
      'Service booking API with staff schedules, customer bookings, and conflict prevention.',
    technologies: ['TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    repositoryUrl: 'https://github.com/CarlosGit0519/booking-system',
  },
  {
    name: 'Auth API',
    description:
      'Authentication API with secure password hashing, JWT, refresh tokens, and role-based access.',
    technologies: ['Node.js', 'MongoDB', 'JWT', 'Express'],
    repositoryUrl: 'https://github.com/CarlosGit0519/auth-api',
  },
]

function App() {
  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#home">
          CM<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <p className="eyebrow">BACKEND-FOCUSED SOFTWARE DEVELOPER</p>

        <h1>
          Building secure APIs
          <br />
          and reliable systems.
        </h1>

        <p className="hero-text">
          I’m Carlos Mendes, a developer focused on TypeScript, Node.js,
          databases, authentication, and production-minded backend projects.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View my projects
          </a>

          <a
            className="button button-secondary"
            href="https://github.com/CarlosGit0519"
            target="_blank"
            rel="noreferrer"
          >
            GitHub profile
          </a>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-heading">
          <p className="eyebrow">ABOUT ME</p>
          <h2>Backend development with a product mindset.</h2>
        </div>

        <div className="about-content">
          <p>
            I build backend projects that focus on clear architecture, secure
            authentication, reliable data handling, and useful documentation.
            My goal is to create software that another developer can understand,
            run, and continue improving.
          </p>

          <div className="stack-list" aria-label="Technology stack">
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>PostgreSQL</span>
            <span>MongoDB</span>
            <span>Prisma</span>
            <span>Docker</span>
            <span>Swagger / OpenAPI</span>
            <span>GitHub Actions</span>
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="projects-heading">
          <p className="eyebrow">FEATURED WORK</p>
          <h2>Projects built to solve real backend problems.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <ul className="project-technologies" aria-label={`${project.name} technologies`}>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className="project-links">
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                  GitHub <span aria-hidden="true">↗</span>
                </a>

                {project.docsUrl && (
                  <a href={project.docsUrl} target="_blank" rel="noreferrer">
                    Live API docs <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>Let&apos;s build something reliable.</h2>
        <p>
          I&apos;m focused on backend development and open to opportunities where I
          can learn, contribute, and grow as a software developer.
        </p>

        <div className="contact-links">
          <a className="button button-primary" href="mailto:carlosvtm01@icloud.com">
            Send me an email
          </a>
          <a
            className="button button-secondary"
            href="https://github.com/CarlosGit0519"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
          </a>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Carlos Mendes. Built with React and TypeScript.</p>
      </footer>
    </main>
  )
}

export default App
