import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Mannam Manohar</h1>
          <h3>Bachelor of Technology in Computer Science Engineering</h3>

          <p>
            I am a Computer Science student at Mahindra University with a strong
            interest in Artificial Intelligence, problem solving, and building
            scalable applications.
          </p>

          <div className="buttons">
            <a href="/resume.pdf" className="btn" download>
              Download Resume
            </a>

            <div className="socials">
              <a href="https://github.com/YOUR-USERNAME" className="btn secondary">
                GitHub
              </a>
              <a href="https://linkedin.com/in/YOUR-LINK" className="btn secondary">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="/myphoto.jpg" alt="profile" />
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section">
        <h2>Education</h2>

        <div className="edu-card">
          <h3>Mahindra University</h3>
          <p>Bachelor of Technology in Computer Science Engineering</p>
          <span>CGPA: 5.0</span>
        </div>

        <div className="edu-card">
          <h3>Narayana Junior College</h3>
          <p>Intermediate</p>
          <span>78%</span>
        </div>

        <div className="edu-card">
          <h3>Naagarjuna High School</h3>
          <p>10th Grade</p>
          <span>95%</span>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>C</span>
          <span>Python</span>
          <span>Java</span>
          <span>MATLAB</span>
          <span>LaTeX</span>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section">
        <h2>Achievements</h2>

        <div className="edu-card">
          <h3>Mahindra University Scholarship</h3>
          <p>
            Awarded a merit-based scholarship of ₹1,00,000 for academic
            performance at Mahindra University (2023).
          </p>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="section">
        <h2>Interests</h2>
        <p>
          Artificial Intelligence, Game Development, Problem Solving,
          Video Editing, and Cricket.
        </p>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Contact</h2>
        <p>Email: se23ucse109@mahindrauniversity.edu.in</p>
        <p>Phone: 9059921519</p>
      </section>

    </div>
  );
}

export default Home;