"use client";

import { motion } from "framer-motion";
import { GrReactjs } from "react-icons/gr";
import { BiCodeAlt } from "react-icons/bi";
import { PiFunctionBold } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { SiReactquery } from "react-icons/si";
import { TbCodeDots } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { BsFillDatabaseFill } from "react-icons/bs";
import { slideInFromBottom, slideInFromTop } from "@/lib/motion";
import PrimaryLink from "./ui/Link";
import { cn } from "@/lib/utils";
import { Database } from "lucide-react";
import { mainSkills, secondarySkills } from "./data";
import PrimaryButton from "./ui/Button";
import { Modal } from "./modal";

const Skills = () => {
  const skills = [
    {
      title: "NEXTJS",
      icon: <RiNextjsFill />,

      descr: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptas quam harum neque vel ratione. Iure distinctio aut
        itaque necessitatibus!`,
    },
    {
      title: "JS TS",
      icon: <PiFunctionBold />,

      descr: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptas quam harum neque vel ratione. Iure distinctio aut
        itaque necessitatibus!`,
    },
    {
      title: "TANSTACK QUERY",
      icon: <SiReactquery />,

     
      descr: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptas quam harum neque vel ratione. Iure distinctio aut
        itaque necessitatibus!`,
    },

    {
      title: "DATABASES",
      icon: <BsFillDatabaseFill />,
      
      descr: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptas quam harum neque vel ratione. Iure distinctio aut
        itaque necessitatibus!`,
    },
    {
      title: "POSTGRESQL",
      icon: <SiMongodb />,
     
      descr: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptas quam harum neque vel ratione. Iure distinctio aut
        itaque necessitatibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptas quam harum neque vel ratione. Iure distinctio aut
        itaque necessitatibus!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptas quam harum neque vel ratione. Iure distinctio aut
        itaque necessitatibus!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptas quam harum neque vel ratione. Iure distinctio aut
        itaque necessitatibus!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptas quam harum neque vel ratione. Iure distinctio aut
        itaque necessitatibus!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptas quam harum neque vel ratione. Iure distinctio aut
        itaque necessitatibus!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptas quam harum neque vel ratione. Iure distinctio aut
        itaque necessitatibus!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptas quam harum neque vel ratione. Iure distinctio aut
        itaque necessitatibus!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptas quam harum neque vel ratione. Iure distinctio aut
        itaque necessitatibus!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptas quam harum neque vel ratione. Iure distinctio aut
        itaque necessitatibus!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptas quam harum neque vel ratione. Iure distinctio aut
        itaque necessitatibus!`,
    },
  ];
 
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="flex items-center mt-[40px] pb-20 min-h-screen overflow-hidden text-[#e5e7eb]"
      id="skills"
    >
      <div className="max-w-[1440px] pt-[30px] px-[20px] mx-auto ">
        <motion.div>
          <motion.h2
            variants={slideInFromTop(0.2, 2)}
            className="pt-[40px] mb-[50px] title-h2  text-[40px] sm:text-[50px] md:text-[60px] xxs:text-[45px]  capitalize text-center"
          >
            My Skills
          </motion.h2>

          <motion.div
            variants={slideInFromBottom(0.2, 2)}
            className=" customBorder mb-14"
          >
            <div className="px-5 grid grid-cols-4 gap-5 bgBlock rounded-[20px] pb-5 w-full">
              {skills.map((item, index) => (
                <div
                  key={index}
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInFromBottom(0.2, 2)}
            className=""
          >
            <h2 className="title-h2 text-[45px] text-center mb-6">I use in my projects</h2>
            {/* <div className="flex flex-col"> */}

            <div className="flex gap-7">
              <div className=" w-full space-y-2">
                <h4 className="text-2xl text-zinc-300 uppercase font-semibold text-center">main </h4>
                <div className="relative customBorderRight  rounded-[20px]">
                  <div className="bgBlockRight p-5">
                    {mainSkills.map((item, index) => (
                      <div key={item.id} className="py-2">
                        <h3 className="text-xl flex justify-between">
                          {item.title}
                          <span
                            className={cn("text-primary", {
                              "text-orange-500": item.skill < 50,
                              "text-red-500": item.skill < 20,
                            })}
                          >
                            {item.skill}%
                          </span>
                        </h3>
                        <div className="h-5 rounded-[8px] border-[2px] border-primary p-1 my-1 ">
                          <span
                            style={{ width: `${item.skill}%` }}
                            className="block h-full rounded-[3px] bg-primary"
                          ></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className=" w-full space-y-2">
                <h4 className="text-2xl text-zinc-300 uppercase font-semibold text-center">styles & images</h4>
                <div className="relative customBorder  rounded-[20px]">
                  <div className="bgBlock p-5">
                    {secondarySkills.map((item, index) => (
                      <div key={item.id} className="py-2">
                        <h3 className="text-xl flex justify-between">
                          {item.title}
                          <span
                            className={cn("text-primary", {
                              "text-orange-500": item.skill < 50,
                              "text-red-500": item.skill < 20,
                            })}
                          >
                            {item.skill}%
                          </span>
                        </h3>
                        <div className="h-5 rounded-[8px] border-[2px] border-primary p-1 my-1 ">
                          <span
                            style={{ width: `${item.skill}%` }}
                            className="block h-full rounded-[3px] bg-primary"
                          ></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
