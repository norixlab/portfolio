import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("max-w-[1440px]  px-[10px] mx-auto ", className)}>
      {children}
    </div>
  );
};
