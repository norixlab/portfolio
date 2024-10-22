'use client'

import Link from 'next/link';
import { motion, useScroll } from "framer-motion";
import About from './about';
import Hero from './hero';
import Skills from './skills';
import Projects from './projects';
import Contacts from './contacts';
import React from 'react';


const MyPortfolio = () => {
    const { scrollYProgress } = useScroll();

    
    // const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    // const intersectionRef = React.useRef(null);
    // const intersection = useIntersection(intersectionRef, {
    //   threshold: 0.4,
    // });
  
    // React.useEffect(() => {
    //   if (intersection?.isIntersecting) {
    //     setActiveCategoryId(categoryId);
    //   }
    // }, [categoryId, intersection?.isIntersecting, title]);
    return (
        <main className='overflow-hidden'>
        <motion.div className='progress '  style={{ scaleX: scrollYProgress }} />
            <Hero />
            <About />
             <Skills />
            <Projects />
            <Contacts /> 
         </main>   
        
    );
};

export default MyPortfolio;