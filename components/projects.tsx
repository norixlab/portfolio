"use client";

import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromTop } from "@/lib/motion";

import { projects } from "../app/data/data";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";

const Projects = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="flex items-center mt-[40px] pb-24 min-h-screen overflow-hidden text-[#e5e7eb]"
      id="projects"
    >
      <div className="max-w-[1440px] px-[20px] pb-[30px] mx-auto ">
        <motion.div variants={slideInFromBottom(0.3, 2.5)}>
          <h2
            // variants={slideInFromTop(0.2, 2)}
            className="mt-[80px] pb-16 title-h2   text-[40px] sm:text-[50px] md:text-[60px] xxs:text-[45px] leading-tight capitalize text-center"
          >
            Lasted Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[25px] pb-[70px]">
            {projects.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                key={Math.random()}
                className="projectsBox relative flex rounded-[20px] border-[2px] border-[#0ef] shadow-[0_0_10px_rgb(0,238,255)] overflow-hidden"
                variants={slideInFromBottom(0.3, 2.5)}
              >
                <Image
                  src={item.imageUrl}
                  className="img"
                  width={410}
                  height={270}
                  
                  alt={item.alt}
                />
                <div className="projectsLayer">
                  <h4 className="text-[30px]">{item.title}</h4>
                  <p className="text-[18px] font-bold mt-[3px] mb-[10px]">
                    {item.description}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className=" inline-flex justify-center items-center w-[50px] h-[50px] bg-[#e5e7eb] rounded-[50%] text-[20px] text-[#323946] transition-background hover:bg-transparent hover:border-[2px] hover:border-[#0ef]"
                  >
                    <BiLinkExternal />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
