import React from 'react';
import PageLayout from '../components/PageLayout';
import Projects from '../components/Projects';

export default function ProjectsPage({ onNavigate }) {
  return (
    <PageLayout>
      <main>
        <Projects onNavigate={onNavigate} />
      </main>
    </PageLayout>
  );
}
