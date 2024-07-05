"use client";

import BlurFade from "@/components/magic-ui/blur-fade";
import BlurFadeText from "@/components/magic-ui/blur-fade-text";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import React from "react";

const ContactSection = () => {
  return (
    <div className="flex flex-col gap-2 w-full justify-center items-center mt-6 mb-[8rem]">
      <BlurFadeText
        delay={BLUR_FADE_DELAY * 15}
        text="Contact"
        className="text-[20px] tracking-tight text-center px-2 py-1 bg-primary text-white rounded-md font-medium mb-2"
      />

      <BlurFadeText
        delay={BLUR_FADE_DELAY * 16}
        text="Get In Touch"
        className="text-[30px] md:text-[50px] w-full text-center tracking-tight font-bold leading-tight"
      />

      <BlurFade>
        <p className="text-lg text-center text-gray-600">
          Want to chat? Just shoot me a dm{" "}
          <a
            className="text-blue-600"
            href="mailto:santhoshprabhakaran02@gmail.com"
          >
            with a direct question on email
          </a>{" "}
          and I&apos;ll get back to you as soon as I can.
        </p>
      </BlurFade>
    </div>
  );
};

export default ContactSection;
