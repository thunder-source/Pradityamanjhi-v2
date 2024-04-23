import React from "react";
import { SkillPillProps } from "../skills/skills-pill";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TechnologyDisplay(props: SkillPillProps) {
  const { name, icon: Icon } = props;
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex w-max items-center gap-2 overflow-hidden rounded-full border border-accent/70 bg-white px-3 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-3 md:py-3 md:text-lg">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <span className=" font-medium">{name}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
