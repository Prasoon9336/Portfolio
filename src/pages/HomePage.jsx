import React from 'react';
import PageLayout from '../components/PageLayout';
import Hero from '../components/Hero';

export default function HomePage({ onNavigate }) {
  return (
    <PageLayout>
      <main>
        <Hero onNavigate={onNavigate} />
      </main>
    </PageLayout>
  );
}
