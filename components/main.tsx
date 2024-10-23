"use client";

import React from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Skills, Contacts, Resources, Hero, About } from "./sections";
import Projects from "./projects";
import { ToTop } from "./ui/to-top";

const MyPortfolio = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = React.useState(false); // Состояние видимости кнопки

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const viewportHeight = window.innerHeight;

    latest > viewportHeight * 1.5 ? setIsVisible(true) : setIsVisible(false);
  });

  return (
    <div className="max-w-[1920px]   mx-auto relative">
      <main className="overflow-hidden">
        <motion.div className="progress " style={{ scaleX: scrollYProgress }} />
        <Hero />
        <About />
        <Skills />
        <Resources />
        <Projects />
        <Contacts />
      </main>
      <ToTop isVisible={isVisible} />
    </div>
  );
};

export default MyPortfolio;
