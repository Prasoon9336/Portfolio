import React, { useState } from "react";
import Navigation from "./components/Navigation";
// import Lightfall from "./components/Lightfall";
import LiquidEther from './components/LiquidEther';
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
      {/* <div className="lightfall-bg-fixed">
        <Lightfall
          colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
          backgroundColor="#0A29FF"
          speed={0.5}
          streakCount={2}
          streakWidth={0.1}
          streakLength={0.5}
          glow={1}
          density={1}
          twinkle={1}
          zoom={0.75}
          backgroundGlow={0.2}
          opacity={10}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={0.04}
        />
      </div> */}
      <div style={{ width: '100%', height: 600, position: 'relative' }}>
  <LiquidEther
    colors={[ '#5227FF', '#FF9FFC', '#B497CF' ]}
    mouseForce={20}
    cursorSize={70}
    isViscous
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={true}
    autoDemo
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
    color0="#5227FF"
    color1="#FF9FFC"
    color2="#B497CF"
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