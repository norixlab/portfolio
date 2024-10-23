import React from "react";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

interface Props {
  icon: React.ReactElement;
  href: string;
  variant: Variants;
  className?: string;
}

export const Ring: React.FC<Props> = ({ icon, href, variant, className }) => {
  return (
    <div className={cn("", className)}>
      <motion.div
        variants={variant}
        className="relative flex justify-center items-center"
      >
        <div className="ringItem"></div>
        <div className="ringItem"></div>
        <div className="ringItem"></div>
        <Link href={href} className="cursor-pointer z-[60]">
          <span className="cursor-pointer text-[27px] md:text-[50px] text-white  transition-all duration-200 hover:drop-shadow-[0_0_4px_rgb(171,236,61)] hover:scale-110">
            {icon}
          </span>
        </Link>
      </motion.div>
    </div>
  );
};
