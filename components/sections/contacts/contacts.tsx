'use client';

import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromBottom } from '@/lib/motion';
import { Ring } from './ring';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';




export const Contacts = () => {
    return (
        <motion.section initial="hidden" whileInView="visible" className='flex items-center text-[#e5e7eb] min-h-screen overflow-hidden pb-[50px]' id="contacts">
            <div className='max-w-[1440px] mt-[50px] px-[20px] mx-auto z-[60]'>
                <motion.div>
                    <motion.h2 variants={slideInFromTop(0.3, 2)} className='mb-[150px] title-h2 text-[40px] sm:text-[50px] md:text-[60px] xxs:text-[45px] leading-tight capitalize text-center'>
                        Contact Me!
                    </motion.h2>
                    <div className='grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 gap-[150px]'>
                    <Ring icon={<FaTelegramPlane />} href={"https://t.me/norixlab"} variant={slideInFromBottom(0.3, 2)} />
                    <Ring icon={<FaWhatsapp />} href={"https://wa.me/message/W7TW3RZT2NESN1"} variant={slideInFromBottom(0.5, 2)} />
                    <Ring icon={<LuMail />} href={"mailto:support@norixlab.com"} variant={slideInFromBottom(0.7, 2)} />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

