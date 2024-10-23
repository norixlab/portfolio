"use client";

import { motion } from "framer-motion";
import { slideInFromRight, slideInFromTop } from "@/lib/motion";

import Image from "next/image";
import PrimaryLink from "./ui/link";

const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="flex items-center relative min-h-screen overflow-hidden mb-10"
      id="about"
    >
      

      <Image
        src={"/decor-left.svg"}
        alt="decor"
        width={500}
        height={600}
       className="absolute w-1/2 max-h-[600px] top-1/2 -translate-y-1/3  left-0 z-[-1]"
      />
      

      <div className="max-w-[1440px] w-full px-[10px] sm:pt-[80px] mx-auto  text-[#e5e7eb]">
        <motion.div className=" flex-col flex lg:flex-row items-center justify-between gap-[30px]">
          <div  
             className="order-2 lg:order-1">
            {/* variants={slideInFromLeft(0.2, 2)}  */}
            <Image
              className="relative right-[5px]  xxs:right-0"
              src="/about2.png"
              alt="My photo"
              width={500}
              height={600}
              quality={75}
              priority={false}
            />
          </div>

          <motion.div
            variants={slideInFromRight(0.2, 2)}
            className="max-w-[650px] lg:pt-0 pt-[80px] order-1"
          >
            <motion.h2
              variants={slideInFromTop(0.2, 2)}
              className="title-h2 font-[Orbitron] text-[40px] sm:text-[50px] md:text-[60px] text-left   xxs:text-[45px] capitalize leading-tight	 "
            >
              About Me
            </motion.h2>
            <h3 className="text-[29px] font-bold mb-[20px]">
              Frontend Developer!
            </h3>
            <p className="mb-[50px] text-[19px] leading-snug	">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              est doloribus autem rem officiis aperiam dolores adipisci quos vel
              perferendis ipsum nisi atque voluptatibus hic voluptatem repellat
              soluta, ducimus molestias totam voluptate. Quae similique ut
              ratione est, hic dolorum sunt, officiis consequatur quod
              architecto consequuntur beatae!
            </p>

            <PrimaryLink name="My Projects" href="#projects" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
