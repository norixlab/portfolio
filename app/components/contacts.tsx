'use client';

import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromBottom } from '@/lib/motion';


import Link from 'next/link';
import { Rings } from './rings';
const Contacts = () => {
    return (
        <motion.section initial="hidden" whileInView="visible" className='flex items-center text-[#e5e7eb] min-h-screen overflow-hidden pb-[50px]' id="contacts">
            <div className='max-w-[1440px] mt-[50px] px-[20px] mx-auto z-[60]'>
                <motion.div>
                    <motion.h2 variants={slideInFromTop(0.3, 2)} className='mb-[150px] title-h2 text-[40px] sm:text-[50px] md:text-[60px] xxs:text-[45px] leading-tight capitalize text-center'>
                        Contact Me!
                    </motion.h2>
                    <Rings />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contacts;