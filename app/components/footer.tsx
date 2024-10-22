import { TbChevronsUp } from 'react-icons/tb';

import Link from 'next/link';


const Footer = () => {
    return (
        <footer className='bg-[#1f242d] text-white z-[60]  border-t border-primary'>
            <div className='max-w-[1920px]  px-[20px] mx-auto'>
                <div className='flex justify-between items-center  py-[20px]'>
                    <div className='text-left md:text-center w-full md:ml-[50px] '>
                        <p className='uppercase text-[16px] text-[#e5e7eb] '>&copy; COPYRIGHT BY NORIXLAB {(new Date()).getFullYear()}</p>
                    </div>
                    
                        <Link href="#home" className='flex items-center justify-center hover:text-white text-black py-[8px] px-[10px] outLine cursor-pointer ml-[20px] rounded-[50%] primary_gradient hover:shadow-[0_0_10px_rgb(171,236,61)]  transition-all'>
                            <TbChevronsUp size={23} />
                            
                        </Link>

                </div>
            </div>
        </footer>
    );
};

export default Footer;