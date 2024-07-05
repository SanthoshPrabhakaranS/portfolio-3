"use client";

import BlurFade from "@/components/magic-ui/blur-fade";
import BlurFadeText from "@/components/magic-ui/blur-fade-text";
import { DATA } from "@/data/data";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import React from "react";
import EducationItem from "./education-item";

const EducationSection = () => {
  return (
    <div>
      <BlurFadeText
        delay={BLUR_FADE_DELAY * 7}
        text="Education"
        className="text-[30px] font-bold tracking-tight"
      />

      {DATA.education.map((item) => {
        return (
          <BlurFade
            delay={BLUR_FADE_DELAY * 8 + item.id * 0.5}
            key={item.id}
            className=""
          >
            <EducationItem item={item} />
          </BlurFade>
        );
      })}
    </div>
  );
};

export default EducationSection;
