import Image from "next/image";
import React from "react";
import Teams from "./Teams";
import Folders from "./Folders";
import { HelpCircle, UserPlus } from "lucide-react";

interface SidebarProps {
  // Define your component props here
}

const Sidebar = ({}: SidebarProps) => {
  return (
    <div className="hidden lg:block lg:w-full max-h-screen overflow-y-scroll" id="sidebar">
      <div className="w-full min-h-screen h-auto overscroll-contain p-1">
      <div className="w-full min-h-screen p-2 flex flex-col justify-between items-center gap-y-5 shadow-sm shadow-neutral-400 rounded-xl bg-white/10">
        <div className="w-full flex flex-col justify-start items-center gap-y-1">
          <div className="flex justify-between items-center w-full h-full bg-white rounded-xl p-1 hover:bg-neutral-300/20 transition-all duration-300 ease-in-out">
            <div className="flex justify-center items-center gap-x-1">
              <div className="flex items-center justify-center bg-black rounded-lg">
                <Image
                  src="/brand.png"
                  width={40}
                  height={40}
                  alt="brand_logo"
                  className=" scale-125"
                />
              </div>

              <div className="-space-y-1">
                <p className="text-neutral-500 text-sm">INC</p>
                <p className="text-neutral-800 font-bold">InnvovatoHub</p>
              </div>
            </div>

            <div className="rounded-full border border-zinc-600/30 bg-transparent hover:bg-zinc-200/70  h-9 w-9 flex items-center justify-center p-1 overflow-hidden cursor-pointer transition-all duration-300 ease-in-out">
              <Image
                src="/avatar2.jpg"
                width={32}
                height={32}
                alt="avatar"
                className="scale-105 rounded-xl"
              />
            </div>
          </div>

          <Teams />
          <Folders />
        </div>

        <div className="w-full space-y-0.5 px-0.5 py-1 text-sm rounded-xl bg-white">
          <div className="flex justify-start items-center cursor-pointer text-neutral-600 hover:text-neutral-800 transition-all duration-300 ease-in-out hover:bg-neutral-400/20 py-1 px-1.5 rounded-lg">
            <UserPlus className="h-4 w-4 mr-2" />
            <p>invite teammates</p>
          </div>
          <div className="flex justify-start items-center cursor-pointer text-neutral-600 hover:text-neutral-800 transition-all duration-300 ease-in-out hover:bg-neutral-400/20 py-1 px-1.5 rounded-lg">
            <HelpCircle className="h-4 w-4 mr-2" />
            <p>Help and first steps</p>
          </div>
          <div className="flex justify-between items-center cursor-pointer hover:bg-neutral-400/20 py-1 px-1.5 rounded-lg">
            <div className="flex justify-center items-center text-neutral-600 hover:text-neutral-800 transition-all duration-300 ease-in-out">
              <p className="flex justify-center items-center w-4 h-4 rounded-full bg-white shadow-sm p-1 shadow-neutral-400 mr-2">
                7
              </p>
              <p>days left on trail</p>
            </div>
            <button
              type="button"
              className="bg-black text-white px-2 py-1 rounded-lg text-xs"
            >
              Add billing
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
