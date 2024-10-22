import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { slideInFromBottom } from '@/lib/motion';
import Link from 'next/link';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';

interface Props {
    className?: string
};

export const Rings: React.FC<Props> = ({className}) => {
    return (
       
            <div className={cn('grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 gap-[150px]', className)}>
                        <motion.div
                            variants={slideInFromBottom(0.3, 2)}
                            className='relative flex justify-center items-center'>
                            <div className='ringItem'></div>
                            <div className='ringItem'></div>
                            <div className='ringItem'></div>
                            <Link href="https://t.me/norixlab" className='cursor-pointer z-[60]'>
                                <FaTelegramPlane size={50} className='cursor-pointer text-white  transition-all duration-200 hover:drop-shadow-[0_0_4px_rgb(171,236,61)] hover:scale-110' />
                            </Link>
                        </motion.div>
                        <motion.div
                            variants={slideInFromBottom(0.5, 2)}
                            className='relative flex justify-center items-center'>
                            <div className='ringItem'></div>
                            <div className='ringItem'></div>
                            <div className='ringItem'></div>
                            <Link href="https://wa.me/message/W7TW3RZT2NESN1" className='cursor-pointer  z-[60]'>
                                <FaWhatsapp size={50} className='cursor-pointer text-white transition-all duration-200 hover:drop-shadow-[0_0_4px_rgb(171,236,61)] hover:scale-110' />
                            </Link>
                        </motion.div>
                        <motion.div
                            variants={slideInFromBottom(0.7, 2)}
                            className='relative flex justify-center items-center xxs:col-span-2 sm:col-span-1'>
                            <div className='ringItem'></div>
                            <div className='ringItem'></div>
                            <div className='ringItem'></div>
                            <Link href="mailto:support@norixlab.com" className='cursor-pointer z-[60]'>
                                <LuMail size={46} className='cursor-pointer text-white transition-all duration-200 hover:drop-shadow-[0_0_4px_rgb(171,236,61)] hover:scale-110' />
                                {/* <FaInstagram size={50} className='cursor-pointer text-white transition-all duration-200 hover:drop-shadow-[0_0_4px_rgb(171,236,61)] hover:scale-110' /> */}
                            </Link>
                        </motion.div>
                    </div>
        
    );
};