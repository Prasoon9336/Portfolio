import React from 'react';

export default function Projects({ onNavigate }) {
  const projectList = [
    {
      title: 'String Analyzer',
      description: 'An application engineered to process text datasets, analyzing individual character occurrences and string metrics dynamically.',
      URL: 'https://github.com/Prasoon9336/CharHandling',
      tags: ['C#', '.NET'],
    },
    {
      title: 'Mathematical Calculator',
      description: 'A robust terminal calculator designed to evaluate arithmetic operations with custom control flow logic architectures.',
      URL: 'https://github.com/Prasoon9336/Calculator',
      tags: ['C#', '.NET'],
    },
    {
      title: 'Weather Forecaster',
      description: 'A console-based weather forecasting tool that retrieves and displays real-time weather data using API integration.',
      URL: 'https://github.com/Prasoon9336/WeatherForcast',
      tags: ['C#', '.NET', 'API'],
      apptype: 'Webpage Application',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <div className="section-heading">
          <h2>Featured Projects</h2>
          <p>A selection of terminal applications and software systems I have built.</p>
        </div>
        <div className="project-grid">
          {projectList.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-card-header">
                <div className="project-icon">📁</div>
                <div className="project-links">
                  <a href={project.URL} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Repo
                  </a>
                </div>
              </div>

              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-type">{project.apptype || 'Console Application'}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <a href={project.URL} target="_blank" rel="noopener noreferrer" className="project-button project-button-primary">
                  Source Code
                </a>
                {project.apptype === 'Webpage Application' && (
                  <button type="button" className="project-button project-button-secondary" onClick={() => onNavigate && onNavigate('weather')}>
                    Open App
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
