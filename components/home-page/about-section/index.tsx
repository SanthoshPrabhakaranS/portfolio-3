"use client";

import BlurFade from "@/components/magic-ui/blur-fade";
import BlurFadeText from "@/components/magic-ui/blur-fade-text";
import { DATA } from "@/data/data";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import React from "react";

const AboutSection = () => {
  const classStyle = "text-black font-medium";
  return (
    <div>
      <BlurFadeText
        delay={BLUR_FADE_DELAY * 3}
        text="About"
        className="text-[30px] font-bold tracking-tight"
      />
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <p className="max-md:text-sm text-gray-600">
          My name is Santhosh Prabhakaran, and I am a passionate full-stack
          developer hailing from India. I have dived into the realm of{" "}
          <span className={classStyle}>web development</span>, exploring both
          the frontend and backend aspects. Armed with a solid foundation in{" "}
          <span className={classStyle}>
            HTML, CSS, JavaScript, and various frameworks
          </span>
          , I craft immersive user interfaces and ensure seamless functionality.
          From database management to{" "}
          <span className={classStyle}>server-side scripting</span>, I have
          gained expertise in building robust and scalable web applications.
          Continuously learning and adapting, I strive to push boundaries and
          deliver <span className={classStyle}>high-quality </span>
          solutions that make a meaningful impact in the digital world.
        </p>
      </BlurFade>
    </div>
  );
};

export default AboutSection;
