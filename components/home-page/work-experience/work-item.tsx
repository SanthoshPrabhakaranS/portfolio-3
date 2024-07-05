"use client";

import Image from "next/image";
import React, { FC } from "react";

interface WorkItemProps {
  item: any;
}

const WorkItem: FC<WorkItemProps> = ({ item }) => {
  return (
    <div className="flex flex-row gap-5">
      <div className="max-md:min-h-[60px] max-md:min-w-[60px] max-md:max-h-[60px] max-md:max-w-[60px] min-h-[70px] min-w-[70px] max-h-[70px] max-w-[70px] rounded-full border border-gray-400">
        <Image
          src={item.logo}
          alt="logo"
          className="h-full w-full object-cover rounded-full"
        />
      </div>
      <div className="w-full">
        <div className="w-full flex max-md:flex-col flex-row justify-between md:items-center">
          <p className="font-semibold text-base">{item.company}</p>
          <p className="max-md:text-sm text-gray-600">{item.duration}</p>
        </div>
        <p className="text-[17px] mt-1">{item.title}</p>
        <p className="max-md:text-sm mt-2 text-gray-600">{item.description}</p>
      </div>
    </div>
  );
};

export default WorkItem;
