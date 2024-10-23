import Link from "next/link";
import { TbChevronsUp } from "react-icons/tb";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  isVisible?: boolean;
}
export const ToTop: React.FC<Props> = ({ isVisible, className }) => {
  return (
    <div
      className={cn(
        "sticky w-fit bottom-5 ml-auto right-5 z-[100]  hidden duration-300   ",
        {
          "md:block": isVisible,
        },
        className
      )}
    >
      <Link
        href="#home"
        className="primary_link py-[8px] px-[10px] rounded-[50%] flex items-center justify-center"
      >
        <TbChevronsUp size={23} />
      </Link>
    </div>
  );
};
