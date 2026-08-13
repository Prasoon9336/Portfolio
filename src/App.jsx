import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Lightfall from "./components/Lightfall";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import WeatherPage from "./pages/WeatherPage";
import Dictionary from "./pages/Dictionary";
import ContactPage from "./pages/ContactPage";

const pageComponents = {
  home: HomePage,
  about: AboutPage,
  projects: ProjectsPage,
  weather: WeatherPage,
  Dictionary: Dictionary,
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
          speed={1}
          streakCount={2}
          streakWidth={1}
          streakLength={1}
          glow={0.5}
          density={1}
          twinkle={1}
          zoom={0.2}
          backgroundGlow={0}
          opacity={1}
          mouseInteraction
          mouseStrength={0.7}
          mouseRadius={0.05}
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