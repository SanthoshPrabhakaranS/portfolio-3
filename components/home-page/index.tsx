"use client";

import React from "react";
import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import WorkExperience from "./work-experience";
import EducationSection from "./education-section";
import SkillsSection from "./skills-section";
import ProjectsSection from "./projects";
import ContactSection from "./contact-section";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <HeroSection />
      <AboutSection />
      <WorkExperience />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ContactSection /> */}
    </div>
  );
};

export default HomePage;
