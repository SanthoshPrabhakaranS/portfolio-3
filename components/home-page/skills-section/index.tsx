"use client";

import BlurFade from "@/components/magic-ui/blur-fade";
import BlurFadeText from "@/components/magic-ui/blur-fade-text";
import { DATA } from "@/data/data";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import React from "react";

const SkillsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <BlurFadeText
        delay={BLUR_FADE_DELAY * 9}
        text="Skills"
        className="text-[30px] font-bold tracking-tight"
      />

      <div className="w-full flex flex-row flex-wrap gap-2">
        {DATA.skills.map((skill: string, Idx: number) => {
          return (
            <BlurFade
              delay={BLUR_FADE_DELAY * 10 + Idx * 0.1}
              key={Idx}
              className="px-2 py-1 bg-primary text-white text-sm rounded-md font-medium"
            >
              {skill}
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
