import React from 'react';
import Projects from '../components/Projects';

export default function ProjectsPage({ onNavigate }) {
  return (
    <main>
      <Projects onNavigate={onNavigate} />
    </main>
  );
}
