import React from "react";
import Home from "./Home";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import StickyNavbar from "./StickyNavbar";

export default function MainLayout() {
  return (
    <div>
      <StickyNavbar />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
