import React from 'react';

export default function About() {
  const bulletPoints = [
    'BCA Student',
    'Remote Work Ready',
    'Continuous Learner',
    'Available for Freelance',
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-inner">
        <div className="section-heading my-5">
          <h2>About Me</h2>
          <p>
            Hi! I am a passionate developer focusing on modern software development practices.
            I specialize in building complete backend and logical systems using <strong>C#</strong>,
            using <strong>Visual Studio Code</strong> and <strong>Visual Studio IDE</strong>,
            with <strong>Microsoft SQL Server</strong> managing data structures.
          </p>
          <p>
            Outside of programming, I enjoy testing my strategy skills playing chess,
            diving into online multiplayer games, and watching movies.
          </p>
        </div>

        <div className="about-grid">
          {bulletPoints.map((point, index) => (
            <div key={index} className="about-item">
              <span className="about-icon">✔</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}