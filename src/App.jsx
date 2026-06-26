import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Lightfall from "./components/Lightfall";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import WeatherPage from "./pages/WeatherPage";
import ContactPage from "./pages/ContactPage";

const pageComponents = {
  home: HomePage,
  about: AboutPage,
  projects: ProjectsPage,
  weather: WeatherPage,
  contact: ContactPage,
};

export default function App() {
  const [page, setPage] = useState("home");
  const PageComponent = pageComponents[page] || HomePage;

  return (
    <>
      <div className="lightfall-bg-fixed">
        <Lightfall
          colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
          backgroundColor="#0A29FF"
          speed={0.5}
          streakCount={4}
          streakWidth={1}
          streakLength={1}
          glow={1}
          density={0.5}
          twinkle={0.9}
          zoom={3}
          backgroundGlow={0.5}
          opacity={1}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={0.1}
        />
      </div>
      <Navigation currentPage={page} onNavigate={setPage} />
      <div className="scrollable-content">
        <div key={page} className="page-content">
          <PageComponent onNavigate={setPage} />
        </div>
      </div>
    </>
  );
}