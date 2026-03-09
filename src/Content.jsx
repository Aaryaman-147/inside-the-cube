import React from 'react';

function Content() {
  return (
    <main className="print-page">
      {/* This image is hidden until the user tries to print the page */}
      <img className="print-background-image" src="/cube.svg" alt="Printable website" aria-hidden="true" />
      
      <div className="print-content">
        <header>
          <h1><span>Aaryaman Arora</span></h1>
        </header>

        <div className="container">
          <article>
            <ul>
              <li>Learning by building — ☆ Turning ideas into working things</li>
              <li>aaryaman1407@gmail.com</li>
              <li>
                <a href="https://instagram.com/lord.m0untbatten" target="_blank" rel="noopener noreferrer">instagram.com/lord.m0untbatten</a>
              </li>
            </ul>
          </article>

          <section>
            <h2>Project Shortlist</h2>
            <hr />
            <article>
              <ul>
                <li><a href="https://roommateapplications.vercel.app/" target="_blank" rel="noopener noreferrer">Roommate Compatibility System (RCS™)</a><span className="status-indicator status-built" title="Shipped / Built"></span> — A gamified full-stack roommate recruitment pipeline disguised as a brutalist alternate-reality game. Applicants go through a multi-stage behavioral and algorithmic vetting system that analyzes responses, extracts metadata (IP/location), scores candidates, stores results in a backend database, and automatically sends acceptance/rejection emails with a public leaderboard.</li>
                <li><a href="https://in-dev.com/" target="_blank" rel="noopener noreferrer">Back to 2006</a><span className="status-indicator status-dev" title="In Development"></span> — A nostalgic web experience that recreates the internet aesthetic of the mid-2000s, exploring early web design patterns, layouts, and interactions. Designed as an interactive time capsule of the pre-social-media web.</li>
                <li><a href="https://in-dev.com/" target="_blank" rel="noopener noreferrer">Open-Source Cortex</a><span className="status-indicator status-dev" title="In Development"></span> — idk</li>
                <li><a href="https://subscripted.vercel.app/" target="_blank" rel="noopener noreferrer">Subscripted</a> <span className="status-indicator status-built" title="Shipped / Built"></span> — A smart subscription tracker that helps users understand where their money goes — monthly, yearly, and over a lifetime. It eliminates forgotten trials and surprise renewals by visualizing subscription costs and spending patterns.</li>
                <li><a href="https://in-dev.com/" target="_blank" rel="noopener noreferrer">Windows 95 Simulation</a><span className="status-indicator status-dev" title="In Development"></span> — A browser-based recreation of the Windows 95 desktop environment, simulating classic UI components, window management, and system interactions directly in the browser.</li>
                <li><a href="https://aaryaman-147.github.io/hand-gesture-particle-system/" target="_blank" rel="noopener noreferrer">3D Particle System</a><span className="status-indicator status-built" title="Shipped / Built"></span> — An interactive gesture-controlled particle simulation where users manipulate a particle field using hand movements captured via MediaPipe and rendered with Three.js.</li>
                <li><a href="https://schedly-c3po.vercel.app/" target="_blank" rel="noopener noreferrer">Schedly</a><span className="status-indicator status-built" title="Shipped / Built"></span> — A unified academic scheduling platform designed so every student can see every class in one place, simplifying timetable management and schedule coordination.</li>
                <li><a href="https://github.com/Aaryaman-147/mood-of-the-internet" target="_blank" rel="noopener noreferrer">Mood of the Internet</a><span className="status-indicator status-dev" title="In Development"></span> — An experimental web project that captures and visualizes the collective mood of the internet using sentiment signals and live data sources.</li>
                <li><a href="https://github.com/Aaryaman-147/second-look" target="_blank" rel="noopener noreferrer">Second Look</a><span className="status-indicator status-built" title="Shipped / Built"></span> — A minimal Chrome extension that introduces a pause between impulse and intent, prompting users to reconsider actions before committing them.</li>
              </ul>
            </article>
          </section>

          <section>
            <h2>Work Experience</h2>
            <hr />
            <article>
              <ul className="tight">
                <li><sup>2025</sup>Gamma, San Francisco — <i>Design Engineer</i></li>
                <li><sup>2023</sup>Magical Tome, San Francisco — <i>Front End Engineer</i></li>
                <li><sup>2018</sup>Meta, San Francisco/New York/London — <i>Front End Engineer</i></li>
                <li><sup>2018</sup>Lyft, Seattle — <i>Software Engineer Intern</i></li>
                <li><sup>2017</sup>Apple, Sunnyvale — <i>Software Engineer Intern</i></li>
              </ul>
            </article>
          </section>

          <section>
            <h2>Outside the Terminal</h2>
            <hr />
            <article>
              <ul>
                <li>Retro computing and operating system design</li>
                <li>Creative coding and generative visuals</li>
                <li>Biomedical sensing and wearable health technologies</li>
                <li>Nostalgia-driven web design and early internet aesthetics</li>
                <li>Building experimental side projects late at night</li>
              </ul>
            </article>
          </section>

          <section>
            <h2>Education</h2>
            <hr />
            <article>
              <div>
                <h3>B.Tech, Biotechnology— <br />Thapar Institute of Engineering & Technology</h3>
              </div>
            </article>
          </section>

          <section>
            <h2>Things I Like</h2>
            <hr />
            <article>
              <div>
                <p>Logging films on Letterboxd, good coffee and late-night conversations, Long walks with music, finding great cafés in new places and clean design and well-made objects.</p>
              </div>
            </article>
          </section>

          <footer>
            <p>☆</p>
            <p>Happy to chat, reach out!</p>
            <ul>
              <li><a href="https://linkedin.com/in/aaryaman-arora" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default Content;