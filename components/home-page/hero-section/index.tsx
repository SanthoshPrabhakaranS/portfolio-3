"use client";

import React from "react";
import { DATA } from "@/data/data";
import BlurFadeText from "@/components/magic-ui/blur-fade-text";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileImg from "@/public/assets/profile.jpg";
import Image from "next/image";
import BlurIn from "@/components/magic-ui/blur-fade";
import BlurFade from "@/components/magic-ui/blur-fade";
import { BorderBeam } from "@/components/magic-ui/border-beam";

const HeroSection = () => {
  return (
    <div className="mt-[2rem] md:mt-[5rem] flex flex-col-reverse md:flex-row gap-5">
      <div className="flex flex-col gap-2">
        {/* Title */}
        <BlurFadeText
          className="text-[40px] md:text-[50px] lg:text-[65px] font-extrabold flex flex-row items-center tracking-tight leading-tight"
          text={`Hi, I'm ${DATA.name.split(" ")[0]}  👋`}
          delay={BLUR_FADE_DELAY}
          yOffset={8}
        />
        {/* Description */}
        <BlurFadeText
          className="text-sm md:text-base"
          text={DATA.description}
          delay={BLUR_FADE_DELAY}
          yOffset={8}
        />
      </div>
      <div className="min-w-[200px] mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="relative h-[180px] w-[180px] rounded-full p-1 border">
            <Image
              src={ProfileImg}
              alt="profile"
              className="h-full w-full object-cover rounded-full"
            />
            <BorderBeam duration={8} borderWidth={2} />
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default HeroSection;
