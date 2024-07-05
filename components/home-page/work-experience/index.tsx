"use client";

import BlurFadeText from "@/components/magic-ui/blur-fade-text";
import { DATA } from "@/data/data";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import React from "react";
import WorkItem from "./work-item";
import BlurFade from "@/components/magic-ui/blur-fade";

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-4">
      <BlurFadeText
        delay={BLUR_FADE_DELAY * 5}
        text="Work Experience"
        className="text-[30px] font-bold tracking-tight"
      />

      {DATA.workExperience.map((item) => {
        return (
          <BlurFade
            delay={BLUR_FADE_DELAY * 6 + item.id * 0.5}
            key={item.id}
            className=""
          >
            <WorkItem item={item} />
          </BlurFade>
        );
      })}
    </div>
  );
};

export default WorkExperience;
