"use client";
import { useRef, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import Image from "next/image";
import Link from "next/link";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { AiFillInstagram, AiOutlineGithub } from "react-icons/ai";
// import { SlSocialVkontakte } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";
import { BiLogoTelegram } from "react-icons/bi";
import PrimaryLink from "../../ui/link";

// import styles from "./hero.module.css";

export const Hero = () => {


  const socialLink = [
    { path: "#", icon: <AiFillInstagram size={22} /> },
    { path: "#", icon: <AiOutlineGithub size={22} /> },
    { path: "#", icon: <SiWhatsapp size={22} /> },
    { path: "#", icon: <BiLogoTelegram size={24} className="pr-[2px]"/> },
  ];

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Full Stack Developer"],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <motion.section
   
      initial="hidden"
      whileInView="visible"
      className="flex relative items-center pt-[80px] mb-10 min-h-screen overflow-hidden"
      id="home"
    >
      <Image src={'/decor-right.svg'} alt="decor" width={500} height={600} className="absolute lg:w-1/2 max-h-[600px] top-[22%] lg:top-1/2 lg:translate-y-[-40%] right-0 z-[-1]" />
      <div className="max-w-[1440px] w-full pb-[30px] px-[10px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-[30px] sm:gap-[50px]">
          <motion.div
            variants={slideInFromTop(0.2, 2)}
            className="text-[#e5e7eb] "
          >
            <motion.p
              variants={slideInFromRight(0.2, 2)}
              className=" font-bold text-[25px] sm:text-[32px] leading-snug"
            >
              Hello, my name&apos;s 
           
            </motion.p>
            <motion.h1
              variants={slideInFromLeft(0.2, 2)}
              className="font-bold title-h2 lg:promoTitleRev font-[Orbitron] text-[35px] sm:text-[50px] md:text-[56px] text-left   xxs:text-[45px] capitalize leading-snug	"
            >
              Sergey Taydakov
            </motion.h1>
            <h3 className="mb-[20px] font-bold text-[23px] md:text-[32px] ">
              I&apos;m a <span ref={el} className="text-[#bfff53] " />
            </h3>
            <motion.p
              variants={slideInFromRight(0.2, 2)}
              className="text-[19px] mb-[30px] leading-snug max-w-[600px]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              tempore necessitatibus officiis dolor voluptatibus eos adipisci
              et?
            </motion.p>

            <ul className="flex items-center mb-[50px] gap-[15px]">
              {socialLink.map((item, index) => (
                <li key={index}>
                  <Link
                    className=" w-[40px] h-[40px] flex items-center justify-center bg-transparent border-[2px] border-primary rounded-[50%] text-primary transition-all ease-in-out hover:bg-primary hover:text-black hover:shadow-[0_0_10px_rgb(171,236,61)]"
                    href={item.path}
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}

            </ul>

            <PrimaryLink name="Contact Me" href="#contacts" />
          </motion.div>

          <div
           
            // animate={{ opacity: 1, transition: { duration: 2, delay: 0.7 } }}
            className="relative inline-block"
          >
            
            
            <Image
              className='img'
              src="/hero.png"
              alt="My photo"
              width={500}
              height={600}
              quality={75}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

