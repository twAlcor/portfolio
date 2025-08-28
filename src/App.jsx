import { useState } from 'react';
import './App.css';
import portrait from './assets/portrait.jpg';

// Each section is a simple object with a key, label, and content
const sections = [
    {
        key: "home",
        label: "Home",
        content: (
            <section>
                <h2>Welcome</h2>
                <div className="photo">
                    <img src={portrait} alt="Portrait of Rasya Akbar Nugraha" />
                </div>
                <p>Hello, my name is Rasya Akbar Nugraha.</p>
                <p>
                    This is my portfolio website. The image above is a recent portrait of me.
                </p>
            </section>
        ),
    },
    {
        key: "biodata",
        label: "Biodata",
        content: (
            <section>
                <h2>Biodata</h2>
                <ul>
                    <li>Name: Rasya Akbar Nugraha</li>
                    <li>Class: XI RPL B</li>
                    <li>Number: 27</li>
                </ul>
            </section>
        ),
    },
    {
        key: "about",
        label: "About",
        content: (
            <section>
                <h2>About Me</h2>
                <p>
                    I am a student at SMKN 8 Malang interested in computers, web development, Linux, and open source technology.
                </p>
            </section>
        ),
    },
    {
        key: "projects",
        label: "Projects",
        content: (
            <section>
                <h2>Projects</h2>
                <div className="projects">
                    <div className="project-card">
                        <h3>Portfolio Website</h3>
                        <p>This website shows my personal info, biodata, and projects. Made with HTML, CSS, and React.</p>
                    </div>
                    <div className="project-card">
                        <h3>Arch Linux Installation</h3>
                        <p>Installing and configuring Arch Linux from scratch, including disk partitioning and desktop setup.</p>
                    </div>
                </div>
            </section>
        ),
    },
    {
        key: "contact",
        label: "Contact",
        content: (
            <section>
                <h2>Contact</h2>
                <p>Email: <a href="mailto:rasyaakbar5b@gmail.com">rasyaakbar5b@gmail.com</a></p>
            </section>
        ),
    },
];

function App() {
  // Track which section is active
  const [activeSection, setActiveSection] = useState("home");

  // Find the content for the active section
  const currentSection = sections.find(s => s.key === activeSection);

  return (
    <div className="layout">
      <aside className="sidebar">
        <h1 className="title">Portfolio</h1>
        <nav>
          {sections.map(section => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              className={activeSection === section.key ? "nav-btn active" : "nav-btn"}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="main-content">
        {currentSection && currentSection.content}
        <footer>
          <p>&copy; 2025 Rasya Akbar Nugraha</p>
        </footer>
      </main>
    </div>
  );
}

export default App;