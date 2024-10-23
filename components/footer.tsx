import { TbChevronsUp } from "react-icons/tb";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1f242d] text-white z-[60]  border-t border-primary mt-5">
      <div className="max-w-[1920px]  px-[20px] mx-auto">
        <div className="flex justify-between md:justify-center items-center  py-[20px]">
          {/* <div className='text-left md:text-center w-full md:ml-[50px] '> */}
          <p className="uppercase text-[14px] sm:text-[16px] text-[#e5e7eb] ">
            &copy; COPYRIGHT BY NORIXLAB {new Date().getFullYear()}
          </p>
          {/* </div> */}
          <Link
        href="#home"
        className="primary_link py-[6px] px-[8px] rounded-[50%] flex items-center justify-center md:hidden"
      >
        <TbChevronsUp size={20} />
      </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
