import React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PrimaryButton from "./ui/button";

interface Props {
  className?: string;
  content: string;
  title: string;
}

export const Modal: React.FC<Props> = ({ title, content, className }) => {
  return (
    <div className={cn("", className)}>
      <Dialog>
        <DialogTrigger asChild>
          <button
            
            className="primary_link border-[2px] py-[6px] border-transparent group-hover:border-white"
          >Read more</button>
        </DialogTrigger>
        <DialogContent className="border-zinc-400 max-h-[500px]  overflow-y-auto bgBlock border-[2px] text-white">
          <DialogHeader>
            <DialogTitle className="text-[22px]">{title}</DialogTitle>
            <DialogDescription className="text-white text-[16px] ">{content}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
