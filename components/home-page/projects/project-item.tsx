"use client";

import { BorderBeam } from "@/components/magic-ui/border-beam";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

interface ProjectItemProps {
  project: any;
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="h-full flex flex-col rounded-md border text-sm hover:shadow-md transition-all">
      <Image
        src={project.image}
        alt="project"
        className="w-full min-h-[200px] max-h-[200px] rounded-t-md object-cover border-b"
      />
      <div className="flex flex-col gap-2 p-2">
        <p className="text-lg font-semibold">{project.name}</p>
        <p className="text-gray-600">{project.description}</p>
        <div className="flex flex-row flex-wrap gap-2 mt-1">
          {project.techs.map((tech: string, Idx: number) => {
            return (
              <div
                key={Idx}
                className="px-2 bg-gray-200 text-[13px] rounded-md font-medium"
              >
                {tech}
              </div>
            );
          })}
        </div>
      </div>

      {/* Website Link */}
      <div className="h-full flex items-end">
        <div
          onClick={() => window.open(project.link, "_blank")}
          className="w-[100px] text-white flex items-center gap-2 mt-2 ml-2 mb-2 text-[13px] px-2 py-[3px] rounded-md bg-primary cursor-pointer"
        >
          <Globe size={"18"} />
          <p>Website</p>
        </div>

        <div
          onClick={() => window.open(project.source, "_blank")}
          className="w-[100px] text-white flex items-center gap-2 mt-2 ml-2 mb-2 text-[13px] px-2 py-[3px] rounded-md bg-primary cursor-pointer"
        >
          <Github size={"18"} />
          <p>Source</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
