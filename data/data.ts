import IonixxLogo from "@/public/assets/ionixx.png";
import AequalisLogo from "@/public/assets/aequalis.png";
import SNMVLogo from "@/public/assets/snmv.png";
import PSGLogo from "@/public/assets/psg.png";
import Project1Img from "@/public/assets/project1.png";
import Project2Img from "@/public/assets/project2.png";
import Project3Img from "@/public/assets/project3.png";
import Project4Img from "@/public/assets/project4.png";
import Project5Img from "@/public/assets/project5.png";
import Project6Img from "@/public/assets/project6.png";
import Project7Img from "@/public/assets/project7.png";
import { Github, Linkedin } from "lucide-react";

export const DATA = {
  name: "Santhosh Prabhakaran",
  description:
    "Your friendly neighborhood full-stack developer and JavaScript engineer. I am driven by a sense of responsibility and a desire to make a positive impact with my web development skills, I craft dynamic and visually stunning applications that captivate users.",
  workExperience: [
    {
      id: 1,
      title: "Full-stack Engineer",
      company: "Ionixx Technologies",
      duration: "Oct 2022 - Present",
      logo: IonixxLogo,
      description:
        "Implemented and maintained a finance application called EPL where the verification of suers documents and the approval of loans are done using React, TypeScript, and Tailwind CSS. Worked on web3 and blockchain project called Shiseido where NFT tokens are minted and sold using Next JS, TypeScript, Tailwind CSS, Solidity and GraphQL. Developed and maintained a web application called Cashflow Management System for managing the cashflow of finance the company using React, TypeScript, Tailwind and React-query.",
    },
    {
      id: 2,
      title: "Frontend Engineer",
      company: "Aequalis Software Solutions",
      duration: "Aug 2022 - Oct 2022",
      logo: AequalisLogo,
      description:
        "Developed and maintained a web application called Nerkathir for farmers to manage their crops and get real-time weather updates using React, TypeScript, and Material-UI.",
    },
  ],
  education: [
    {
      id: 1,
      instituite: "SNMV College of Arts and Science",
      degree: "Bachelor of Computer Applications",
      duration: "2019 - 2022",
      logo: SNMVLogo,
    },
    {
      id: 2,
      instituite: "PSG Sarvajana Higher Secondary School",
      degree: "Higher Secondary Education",
      duration: "2017 - 2019",
      logo: PSGLogo,
    },
  ],
  skills: [
    "React",
    "Next JS",
    "Typescript",
    "Tailwind CSS",
    "Material UI",
    "SCSS",
    "Bootstrap",
    "Node JS",
    "Express JS",
    "Prisma",
    "MongoDB",
    "Firebase",
    "MySQL",
    "Supabase",
    "GrpahQL",
    "Git",
    "Github",
    "Bitbucket",
    "Jest",
  ],
  projects: [
    {
      id: 1,
      name: "Shopeee",
      image: Project1Img,
      description: "An E-Commerce site to buy fashion pieces.",
      techs: [
        "Next JS",
        "Tailwind CSS",
        "Redux Toolkit",
        "Express JS",
        "MongoDB",
      ],
      link: "https://shopieeee.vercel.app/",
      source: "https://github.com/SanthoshPrabhakaranS/e-commerce",
    },
    {
      id: 2,
      name: "Hangman",
      image: Project2Img,
      description: "Game application using english words.",
      techs: ["React", "TypeScript"],
      link: "https://santhoshprabhakarans.github.io/hang-man-game/",
      source: "https://github.com/SanthoshPrabhakaranS/hang-man-game",
    },
    {
      id: 3,
      name: "Blogging Application",
      image: Project3Img,
      description: "Blogging site to post your articles.",
      techs: [
        "NextJS",
        "Tailwind CSS",
        "Prisma",
        "MongoDB",
        "NextAuth",
        "React-Query",
      ],
      link: "https://blog-a9jwavsue-santhoshprabhakarans.vercel.app/",
      source: "https://github.com/SanthoshPrabhakaranS/blog-app",
    },
    {
      id: 4,
      name: "Chat Application",
      image: Project4Img,
      description: "Group chat application to chat with your friends.",
      techs: ["React JS", "Tailwind CSS", "Firebase"],
      link: "https://chat-app-ffced.web.app/",
      source: "https://github.com/SanthoshPrabhakaranS/firebase-chat-app",
    },
    {
      id: 5,
      name: "Real Estate Application",
      image: Project5Img,
      description: "Real estate application to check and book.",
      techs: [
        "React JS",
        "Material UI",
        "Zustand",
        "Express JS",
        "Prisma",
        "MongoDB",
      ],
      link: "https://real-estate-site-url.vercel.app/",
      source: "https://github.com/SanthoshPrabhakaranS/real-estate-site",
    },
    {
      id: 6,
      name: "Airbnb Clone",
      image: Project6Img,
      description:
        "Airbnb clone to create and book reservations and properties.",
      techs: [
        "Next JS",
        "Typescript",
        "Tailwind CSS",
        "Prisma",
        "MongoDB",
        "React Query",
        "NextAuth",
      ],
      link: "https://air-bnb-clone-sooty-three.vercel.app/",
      source: "https://github.com/SanthoshPrabhakaranS/airbnb-clone",
    },
    {
      id: 7,
      name: "Authentication Application",
      image: Project7Img,
      description:
        "Auth application using Next-auth v5 with client and server actions.",
      techs: ["NextJS 14.0", "TypeScript", "Tailwind CSS", "NextAuth V5"],
      link: "https://next-auth-v5-26tr-p742udv9q-santhoshprabhakarans.vercel.app/",
      source: "https://github.com/SanthoshPrabhakaranS/next-auth-v5",
    },
  ],
  social: {
    GitHub: {
      url: "https://github.com/SanthoshPrabhakaranS",
      icon: Github,
    },
    LinkedIn: {
      url: "https://www.linkedin.com/in/-santhosh-dev/",
      icon: Linkedin,
    },
  },
};
