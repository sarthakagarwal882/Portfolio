import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Service from "../components/Service";
import AboutPage from "../components/AboutPage";
import ProjectPanel from "../components/ProjectPanel";
import SkillPanel from "../components/SkillPanel";

function Home({ cssClass }) {
  document.title = "Sarthak - Portfolio";
  return (
    <div>
      <Navbar />
      <Intro />
      <Service />
      <section id="skills">
        <SkillPanel />
      </section>
      <section id="projects">
        <ProjectPanel />
      </section>
      {/* <Subscribe /> */}
      <section id="about">
        <AboutPage />
      </section>
      <Faq />
      <section id="contacts">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
