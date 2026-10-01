export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        {/* LEFT — INTRODUCTION */}
        <div className="hero-card">

          <p className="hero-intro">
            Hello, I'm
          </p>

          <h1>
            Affan.
          </h1>

          <h2>
            Computer Science Student &amp; Developer
          </h2>

          <p className="hero-description">
            I enjoy building software, web applications, and mobile apps.
            I'm always learning new technologies by turning ideas into
            real projects.
          </p>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="button-primary"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="button-secondary"
            >
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/m-A-i-VA-n"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            
          </div>

        </div>


        {/* RIGHT — PROFILE PHOTO */}
        <div className="hero-photo">
          <img
            src="/img/profile.jpeg"
            alt="Affan"
          />
        </div>

      </div>
    </section>
  );
}