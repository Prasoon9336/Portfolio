import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import WeatherPage from './pages/WeatherPage';
import ContactPage from './pages/ContactPage';

const pageComponents = {
  home: HomePage,
  about: AboutPage,
  projects: ProjectsPage,
  weather: WeatherPage,
  contact: ContactPage,
};

export default function App() {
  const [page, setPage] = useState('home');
  const PageComponent = pageComponents[page] || HomePage;

  return (
    <div className="app-shell">
      <Navigation currentPage={page} onNavigate={setPage} />
      <div className="page-wrapper">
        <div key={page} className="page-content">
          <PageComponent onNavigate={setPage} />
        </div>
      </div>
    </div>
  );
}
