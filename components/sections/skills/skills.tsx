"use client";

import { motion } from "framer-motion";

import { slideInFromBottom, slideInFromTop } from "@/lib/motion";

import { cn } from "@/lib/utils";

import {skills, mainSkills, secondarySkills } from "../../../app/data";

import { Modal } from "../../modal";

import { SkillsDetails } from "./skills-details";

export const Skills = () => {

 
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="flex items-center mt-[40px] pb-24 min-h-screen overflow-hidden text-[#e5e7eb]"
      id="skills"
    >
      <div className="max-w-[1440px] pt-[30px] px-[20px] mx-auto ">
        <motion.div variants={slideInFromBottom(0.3, 2.5)}>
          <h2
            
            className="mt-[40px] pb-16 title-h2  text-[40px] sm:text-[50px] md:text-[60px] xxs:text-[45px]  capitalize text-center"
          >
            My Skills
          </h2>

          <motion.div
            variants={slideInFromBottom(0.3, 2.5)}
            className=" customBorder mb-14"
          >
            <div className="px-5 grid grid-cols-4 gap-5 bgBlock rounded-[20px]  w-full">
              {skills.map((item, index) => (
                <div
                  key={Math.random()}
                  className="card flex flex-col gap-5 items-center justify-center group hover:scale-105  p-6   text-center  "
                >
                  <div
                    className={cn(
                      "p-4  primary_gradient group-hover:text-[#abec3d] group-hover:bg-black group-hover:bg-none hover:bg-none text-black rounded-[20px] text-[40px]"
                    )}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-[26px] group-hover:text-black duration-200 group-hover:font-semibold">
                    {item.title}
                  </h3>
                  <p className="line-clamp-4 text-[16px] mb-2  group-hover:text-black duration-200 group-hover:font-semibold">
                    {item.descr}
                  </p>

                 <Modal content={item.descr} title={item.title} />
                </div>
              ))}
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </motion.section>
  );
};


