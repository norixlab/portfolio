"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { slideInFromBottom } from "@/lib/motion";
import { skills } from "@/app/data";
import { Modal } from "@/components/shared";






export const Skills = () => {

 
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="flex items-center mt-[40px] pb-16 md:pb-24 min-h-screen overflow-hidden text-[#e5e7eb]"
      id="skills"
    >
      <div className="max-w-[1440px] pt-[30px] px-[10px] mx-auto ">
        <motion.div variants={slideInFromBottom(0.3, 2.5)}>
          <h2
            
            className="sm:mt-[40px] pt-4 pb-8 sm:py-16 title-h2  text-[35px] sm:text-[50px] md:text-[60px] xxs:text-[45px]  capitalize text-center"
          >
            My Skills
          </h2>

          <motion.div
            variants={slideInFromBottom(0.3, 2.5)}
            className=" customBorder mb-14"
          >
            <div className="sm:px-5 grid grid-cols-2 sm:grid-cols-4 sm:gap-5 bgBlock rounded-[20px]  w-full">
              {skills.map((item) => (
                <div
                  key={item.title}
                  className="card flex flex-col gap-5 items-center justify-center group hover:scale-105 p-6 text-center  "
                >
                  <div
                    className={cn(
                      "p-3 sm:p-4 text-[35px] sm:text-[40px]  primary_gradient group-hover:text-[#abec3d] group-hover:bg-black group-hover:bg-none hover:bg-none text-black rounded-[15px] sm:rounded-[20px]  "
                    )}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-[20px] line-clamp-1 sm:line-clamp-none sm:text-[26px] group-hover:text-black duration-200 group-hover:font-semibold">
                    {item.title}
                  </h3>
                  <p className="line-clamp-3 text-start sm:text-center sm:line-clamp-4 text-[14px] sm:text-[16px] mb-2  group-hover:text-black duration-200 group-hover:font-semibold">
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


