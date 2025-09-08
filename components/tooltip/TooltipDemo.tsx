import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type TooltipoDemoProps = {
  contentClassName?: string;
  trigger?: ReactNode;
  children?: ReactNode;
  content?: ReactNode;
  side?: "top" | "right" | "bottom" | "left" | undefined;
  align?: "center" | "start" | "end" | undefined;
};

export function TooltipDemo({
  contentClassName = "",
  trigger = null,
  children = null,
  content = null,
  side = "top",
  align = "center",
}: TooltipoDemoProps) {
  return (
    <TooltipProvider disableHoverableContent >
      <Tooltip>
        <TooltipTrigger asChild>{trigger || <Button variant="outline">Hover</Button>}</TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          // avoidCollisions={true}
          // sideOffset={6}
          className={`${contentClassName} max-w-[90vw] sm:max-w-[500px]`}
        >
          {children || content || "Empty"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
