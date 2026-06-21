import React from "react";

export default function Hero({ onNavigate }) {
  const handleViewWork = (e) => {
    e.preventDefault();
    onNavigate("projects");
  };

  const handleContact = (e) => {
    e.preventDefault();
    onNavigate("contact");
  };

  return (
    <>
      <header id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-icon">
            <i className="bi bi-code-square" aria-hidden="true"></i>
          </div>

          <p className="hero-eyebrow">Hi, my name is</p>
          <h1 className="hero-title">Prasoon Srivastava</h1>
          <h2 className="hero-subtitle">
            I build scalable software solutions.
          </h2>
          <p className="hero-copy">
            I'm an aspiring software developer currently specializing in C# and
            backend systems.
          </p>
          <div className="hero-actions">
            <button
              onClick={handleViewWork}
              className="hero-button hero-button-primary"
            >
              View My Work
            </button>
            <button
              onClick={handleContact}
              className="hero-button hero-button-secondary"
            >
              Contact Me
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
