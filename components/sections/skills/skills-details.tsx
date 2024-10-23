import React from "react";
import { cn } from "@/lib/utils";
import { SkillsDetail } from "@/app/data";

interface Props {
  title: string;
  type?: "left" | "right";
  className?: string;
  skills: SkillsDetail[];
}

export const SkillsDetails: React.FC<Props> = ({
  title,
  skills,
  type = "left",
  className,
}) => {
  return (
    <div className={cn(" w-full space-y-2", className)}>
      <h4 className="text-2xl text-zinc-300 uppercase font-semibold text-center">
        {title}
      </h4>
      <div
        className={cn("relative rounded-[20px]", {
          customBorder: type === "left",
          customBorderRight: type === "right",
        })}
      >
        <div
          className={cn("p-5", {
            bgBlock: type === "left",
            bgBlockRight: type === "right",
          })}
        >
          {skills.map((item) => (
            <div key={item.title} className="py-2">
              <h3 className="text-xl flex justify-between">
                {item.title}
                <span
                  className={cn("text-primary", {
                    "text-orange-500": item.percent < 50,
                    "text-red-500": item.percent < 20,
                  })}
                >
                  {item.percent}%
                </span>
              </h3>
              <div className="h-5 rounded-[8px] border-[2px] border-primary p-1 my-1 ">
                <span
                  style={{ width: `${item.percent}%` }}
                  className="block h-full rounded-[3px] bg-primary"
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
