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
              <li>Creative Technologist — Making art in the digital and print worlds</li>
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
                <li><a href="https://horsehabit.com/" target="_blank" rel="noopener noreferrer">Horse Habit</a> — Original ASCII art for 2026, the Year of the Horse</li>
                <li><a href="https://ur-aura.com/" target="_blank" rel="noopener noreferrer">UR–AURA</a> — An digital aura photo booth and in-person experience. Visit a pop-up IRL to purchase your aura photo and companion guidebook</li>
                <li><a href="https://skinsshark.github.io/yeet-hay" target="_blank" rel="noopener noreferrer">Yeet Hay or Yeet Nay?</a> — Bringing analog to digital in a new reading format.</li>
                <li><a href="https://sushiaipod.vercel.app/" target="_blank" rel="noopener noreferrer">ai爱pod</a> — Photo gallery inspired by the iPod Classic.</li>
                <li><a href="https://the-offisse.com/" target="_blank" rel="noopener noreferrer">The Offisse</a> — High-end fashion inspired by The Office (US)</li>
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
            <h2>More Projects</h2>
            <hr />
            <article>
              <ul>
                <li><sup>2026</sup><a href="https://gray-area-foundation.myshopify.com/collections/whole-earth-redux" target="_blank" rel="noopener noreferrer">Whole Earth Redux</a> — A print publication offering new perspectives on the Whole Earth Catalog</li>
                <li><sup>2024</sup><a href="https://metalabel.com/aiphabet" target="_blank" rel="noopener noreferrer">Aiphabet</a> — Free, printable zine created using Stable Diffusion</li>
                <li><sup>2024</sup><a href="https://imscared.com/" target="_blank" rel="noopener noreferrer">Mom Come Pick Me Up, I'm Scared</a> — A tool to visualize your crowd at a public speaking event</li>
              </ul>
            </article>
            <div>
              <p className="smaller">Full list available on <a href="https://github.com/skinsshark/skinsshark.github.io/blob/master/README.md" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
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
                <p>Visiting contemporary art museums, volunteering around the city, giving generous ratings on Letterboxd, running for utility but not for fun, playing Just Dance on Wii, trying to guess your zodiac sign, furniture shopping, white tea, and black coffee</p>
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