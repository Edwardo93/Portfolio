import { useState, useEffect, useRef } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    // Use requestAnimationFrame for smoother visual updates
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isMoving = false;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(updateCursorPosition);
      }
    };

    const updateCursorPosition = () => {
      // Simple linear interpolation (lerp) for smoother follow, or direct assignment for instant
      // For "laggy" complaints, direct assignment is often better unless they want a "trailing" effect.
      // Let's stick to direct assignment but inside rAF to sync with refresh rate.
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
      isMoving = false;
    };

    const addHoverClass = () => cursor.classList.add("hovered");
    const removeHoverClass = () => cursor.classList.remove("hovered");

    window.addEventListener("mousemove", moveCursor);

    // Optimized delegation for hover effects
    const handleHover = (e) => {
      // Check if target or any parent is clickable
      const clickable = e.target.closest('a, button, .project-card, .skill-pill');
      if (clickable) {
        addHoverClass();
      } else {
        removeHoverClass();
      }
    };

    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest('a, button, .project-card, .skill-pill')) {
        removeHoverClass();
      }
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mouseout', handleHover); // Clean up both
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const videoRef = useRef(null);

  useEffect(() => {
    // Force video to play to ensure autoplay works
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">Eduard</div>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="section hero-section">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          id="background-video"
        >
          <source src="https://video.wixstatic.com/video/11062b_b02d1b7883d5447fb2453acb93a5102b/1080p/mp4/file.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <span className="hero-label">Hi, I'm Eduard</span>
          <h1>Junior Web Developer with<br />Real Client Experience</h1>
          <p>
            I build fast, conversion-focused websites for small businesses using HTML, CSS, JavaScript, Wix and WordPress. Available for junior roles, contract or part-time work.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#" className="btn btn-secondary">Download My CV</a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <h3>E-commerce Startup</h3>
              <p>Developed a e-commerce site for a reseller, focusing on a seamless UX from browsing to checkout. Implemented key features including categorization, secure payment, and inventory management.</p>
              <div className="tech-stack">
                <span className="tech-tag">Wix</span>
                <span className="tech-tag">Wix CMS</span>
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">JS</span>
              </div>
              <a href="https://www.auraprocosmetics.com/" className="project-link">View Project &rarr;</a>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <h3>Creative Design Agency</h3>
              <p>Developed a visually bold website that highlights work through large imagery, subtle animations, and a modern, grid-based layout.</p>
              <div className="tech-stack">
                <span className="tech-tag">Framer</span>
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">CSS</span>
              </div>
              <a href="https://www.txengo.com/" className="project-link">View Project &rarr;</a>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <h3>Events Company 1</h3>
              <p>Redesigned the site with a modern, elegant layout focused on visuals and simplicity — helping clients explore photo booth options, view real event galleries, and book directly online with ease.</p>
              <div className="tech-stack">
                <span className="tech-tag">Wix</span>
                <span className="tech-tag">Wix CMS</span>
                <span className="tech-tag">Figma</span>
              </div>
              <a href="https://www.thememorycorners.co.uk/" className="project-link">View Project &rarr;</a>
            </div>
            {/* Project 4 */}
            <div className="project-card">
              <h3>Events Company 2 (In Progress) </h3>
              <p>Developed a soft, romantic design with modern touches that highlights testimonials, services, and past events — making it easy for couples to connect and start planning their big day.</p>
              <div className="tech-stack">
                <span className="tech-tag">WordPress</span>
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">phpMyAdmin</span>
              </div>
              <a href="https://www.sayidoweddings.co.uk/" className="project-link">View Project &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container skills-container">
          <div className="skills-intro">
            <h2>Technical Skills</h2>
            <p>
              I constantly learn new technologies and tools to keep my skills sharp. Here are some of the key areas I focus on.
            </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
          <div className="skills-grid">
            <div className="skills-category">
              <h3>Languages</h3>
              <div className="skills-list">
                <span className="skill-pill">JavaScript</span>
                <span className="skill-pill">Python</span>
                <span className="skill-pill">HTML5</span>
                <span className="skill-pill">CSS3</span>
              </div>
            </div>

            <div className="skills-category">
              <h3>Frameworks & Libraries</h3>
              <div className="skills-list">
                <span className="skill-pill">Bootstrap</span>
              </div>
            </div>

            <div className="skills-category">
              <h3>CMS</h3>
              <div className="skills-list">
                <span className="skill-pill">WordPress</span>
                <span className="skill-pill">Wix Velo</span>
                <span className="skill-pill">Wix Editor</span>
                <span className="skill-pill">Wix Studio</span>
                <span className="skill-pill">Framer</span>
              </div>
            </div>

            <div className="skills-category">
              <h3>Databases</h3>
              <div className="skills-list">
                <span className="skill-pill">MySQL</span>
                <span className="skill-pill">MSSQL</span>
                <span className="skill-pill">Wix Data Collections</span>
              </div>
            </div>

            <div className="skills-category">
              <h3>APIs & Integrations</h3>
              <div className="skills-list">
                <span className="skill-pill">REST APIs</span>
                <span className="skill-pill">Webhooks</span>
                <span className="skill-pill">Zapier</span>
                <span className="skill-pill">CRM Integrations</span>
              </div>
            </div>

            <div className="skills-category">
              <h3>Automation Tools</h3>
              <div className="skills-list">
                <span className="skill-pill">Zapier</span>
              </div>
            </div>

            <div className="skills-category">
              <h3>Version Control</h3>
              <div className="skills-list">
                <span className="skill-pill">Git</span>
              </div>
            </div>

            <div className="skills-category">
              <h3>Development Methodology</h3>
              <div className="skills-list">
                <span className="skill-pill">Agile</span>
                <span className="skill-pill">Scrum</span>
                <span className="skill-pill">Kanban</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container about-container">
          <div className="about-text">
            <h2>About Me.</h2>
            <p>
              I'm a Junior Web Developer with a passion for building user-friendly websites. I have experience working with real clients, helping small businesses establish their online presence.
            </p>
            <p>
              My journey started with self-taught coding and has evolved into building custom solutions using modern web technologies. I enjoy solving problems and turning designs into functional, responsive websites.
            </p>
            <p>
              When I'm not coding, you can find me exploring new tech trends or working on personal projects to expand my portfolio.
            </p>
          </div>
          {/* <div className="about-image">
            <div className="about-image-placeholder"></div>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2>Let's Work Together</h2>
          <p>
            I'm currently available for junior developer roles, contract work, or freelance projects. If you're looking for someone who is eager to learn and ready to contribute, I'd love to hear from you.
          </p>
          <div className="contact-links">
            <a href="mailto:eduard.proca93@gmail.com" className="btn btn-primary">Email Me</a>
            <a href="Https://www.linkedin.com/in/eduard-p-34a06b232" className="linkedin-link">Connect on LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Eduard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
