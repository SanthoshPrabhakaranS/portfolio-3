"use client";

import BlurFadeText from "@/components/magic-ui/blur-fade-text";
import { DATA } from "@/data/data";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import React from "react";
import ProjectItem from "./project-item";
import BlurFade from "@/components/magic-ui/blur-fade";
import { BorderBeam } from "@/components/magic-ui/border-beam";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex flex-col items-center justify-center">
        <BlurFadeText
          delay={BLUR_FADE_DELAY * 11}
          text="My Projects"
          className="text-[20px] tracking-tight text-center px-2 py-1 bg-primary text-white rounded-md font-medium mb-2"
        />

        <BlurFadeText
          delay={BLUR_FADE_DELAY * 12}
          text="Check out some of my projects below!"
          className="text-[30px] md:text-[50px] w-full text-center tracking-tight font-bold leading-tight"
        />

        <BlurFadeText
          delay={BLUR_FADE_DELAY * 13}
          text="I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites."
          className="text-gray-600 text-base md:text-lg text-center"
        />
      </div>

      {/* Project Items */}
      <div className="w-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
        {DATA.projects.map((project) => {
          return (
            <BlurFade
              delay={BLUR_FADE_DELAY * 14 + project.id * 0.5}
              key={project.id}
              className="relative rounded-md"
            >
              <ProjectItem project={project} />
              <BorderBeam delay={BLUR_FADE_DELAY * 14 + project.id * 2} />
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
