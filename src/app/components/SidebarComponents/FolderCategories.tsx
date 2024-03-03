"use client"
import { cn } from "@/app/utils/cn";
import { ChevronDown, Folder, PlusSquare } from "lucide-react";
import React, { useState } from "react";

interface FolderCategoriesProps {
  // Define your component props here
  name: string;
  isSubCategory: boolean;
}
const subCategory = ["Roadmap", "Feedback", "Performance", "Team", "Analytics"];

const FolderCategories = ({ name, isSubCategory }: FolderCategoriesProps) => {
    const [open,setOpen] = useState<boolean>(false);
  return (
    <div className="w-full">
      <div className={cn("flex justify-between items-center p-1 py-1.5 hover:bg-neutral-400/15 cursor-pointer rounded-lg text-sm transition-all duration-300 ease-in-out",{"bg-neutral-400/15":open && isSubCategory})} onClick={()=> setOpen(pre=>!pre)}>
        <div className="flex justify-center-items-center">
          <Folder className="h-4 w-4 mr-2" />
          <span className="font-semibold">{name}</span>
        </div>

        {isSubCategory && <ChevronDown className={cn("h-5 w-5 rotate-180 transition-all duration-300 ease-in-out",{"rotate-0":open})} />}
      </div>

      {isSubCategory && open && (
        <div className="pl-6 p-1 gap-y-1">
          {subCategory.map((subcategory) => (
            <p
              key={subcategory}
              className="pl-3 py-1 text-semibold hover:bg-neutral-400/15 cursor-pointer rounded-lg text-sm transition-all duration-300 ease-in-out"
            >
              {subcategory}
            </p>
          ))}

          <div className="pl-3 py-1.5 text-semibold hover:bg-neutral-400/15 cursor-pointer rounded-lg text-sm flex justify-start items-center text-neutral-400 hover:text-neutral-600 transition-all duration-300 ease-in-out">
            <PlusSquare className="w-4 h-4 mr-2" />
            <p className=" text-sm">Add new sub</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FolderCategories;
