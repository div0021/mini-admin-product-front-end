import {
  ArrowDownUp,
  ChevronDown,
  Component,
  FolderUp,
  Presentation,
  SlidersHorizontal,
} from "lucide-react";
import React from "react";

interface FilterSectionProps {
  // Define your component props here
}

const FilterSection = ({}: FilterSectionProps) => {
  return (
    <div className="w-full flex justify-between items-center px-7 py-1">
      <div className="flex justify-center items-center gap-x-2">
        {/* brand filter */}
        <div className="flex justify-center items-center px-2.5 py-1.5 text-sm gap-x-1.5 text-opacity-70 text-neutral-800 hover:text-opacity-95 bg-white shadow-sm shadow-neutral-200 hover:shadow-neutral-300 focus-within:shadow-neutral-400 transition-all duration-300 ease-in-out cursor-pointer rounded-lg">
          <Component className="h-3 w-3" />
          <p>All brands</p>
          <ChevronDown className="h-3 w-3" />
        </div>

        {/* Description filter */}

        <div className="flex justify-center items-center px-2.5 py-1.5 text-sm gap-x-1.5 text-opacity-70 text-neutral-800 hover:text-opacity-95 bg-white shadow-sm shadow-neutral-200 hover:shadow-neutral-300 focus-within:shadow-neutral-400 transition-all duration-300 ease-in-out cursor-pointer rounded-lg">
          <p>Description</p>
          <ChevronDown className="h-3 w-3" />
        </div>

        {/* Tags */}

        <div className="flex justify-center items-center px-2.5 py-1.5 text-sm gap-x-1.5 text-opacity-70 text-neutral-800 hover:text-opacity-95 bg-white shadow-sm shadow-neutral-200 hover:shadow-neutral-300 focus-within:shadow-neutral-400 transition-all duration-300 ease-in-out cursor-pointer rounded-lg">
          <p>Tags</p>
          <ChevronDown className="h-3 w-3" />
        </div>

        {/* Sort */}

        <div className="flex justify-center items-center px-2.5 py-1.5 text-sm gap-x-1.5 text-opacity-50 text-neutral-800 hover:text-opacity-95 bg-white shadow-sm shadow-neutral-200 hover:shadow-neutral-300 focus-within:shadow-neutral-400 transition-all duration-300 ease-in-out cursor-pointer rounded-lg">
          <ArrowDownUp className="h-3 w-3" />
          <p>Sort</p>
        </div>

        {/* Filter */}

        <div className="flex justify-center items-center px-2.5 py-1.5 text-sm gap-x-1.5 text-opacity-50 text-neutral-800 hover:text-opacity-95 bg-white shadow-sm shadow-neutral-200 hover:shadow-neutral-300 focus-within:shadow-neutral-400 transition-all duration-300 ease-in-out cursor-pointer rounded-lg">
          <SlidersHorizontal className="h-3 w-3" />
          <p>Filter</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-2">
        {/* Meeting */}
        <div className="flex items-center justify-center px-2.5 py-1.5 text-sm gap-x-1.5 text-opacity-80 text-neutral-800 hover:text-opacity-95 bg-white shadow-sm shadow-neutral-200 hover:shadow-neutral-300 focus-within:shadow-neutral-400 transition-all duration-300 ease-in-out cursor-pointer rounded-lg font-medium">
          <Presentation className="w-4 h-4" />
          <p>Meeting</p>
        </div>

        {/* import/export */}

        <div className="flex items-center justify-center px-2.5 py-1.5 text-sm gap-x-1.5 text-opacity-80 text-neutral-800 hover:text-opacity-95 bg-white shadow-sm shadow-neutral-200 hover:shadow-neutral-300 focus-within:shadow-neutral-400 transition-all duration-300 ease-in-out cursor-pointer rounded-lg font-medium">
          <FolderUp className="w-4 h-4" />
          <p>Import/Export</p>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
