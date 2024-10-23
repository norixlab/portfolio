import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/lib/motion";
import { SkillsDetails } from "../skills";
import { mainSkills, secondarySkills } from "@/app/data";
import { Container } from "@/components/container";

interface Props {
  className?: string;
}

export const Resources: React.FC<Props> = ({ className }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={cn(
        "flex items-center mt-[40px] pb-24 min-h-screen overflow-hidden text-[#e5e7eb]",
        className
      )}
      id="resources"
    >
      <Container className="w-full">
      <motion.div variants={slideInFromBottom(0.3, 2.5)} className="pt-5 ">
        <h2 className="pt-[40px] mb-[50px] title-h2  text-[40px] sm:text-[50px] md:text-[60px] xxs:text-[45px]  capitalize text-center">
          Is used in the development
        </h2>

        <motion.div
          variants={slideInFromBottom(0.3, 2.5)}
          className="flex gap-8 "
        >
          <SkillsDetails
            title="frontend & backend"
            skills={mainSkills}
            type="right"
            // className="flex-1"
          />
          <SkillsDetails
            title="styles, animations & images"
            skills={secondarySkills}
            // className="flex-1"
          />
        </motion.div>
      </motion.div>
      </Container>
    </motion.section>
  );
};
