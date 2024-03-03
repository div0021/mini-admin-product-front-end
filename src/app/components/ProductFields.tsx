import { Plus } from 'lucide-react';
import React from 'react';

interface ProductFieldsProps {
  // Define your component props here
}

const ProductFields = ({}: ProductFieldsProps) => {
  return (
    <div className="w-full flex items-center justify-start gap-x-1 pl-2 pr-2">
    <div className="grid grid-cols-9 w-full gap-x-1">
      {/* Brand */}

      <div className="col-span-3 flex justify-between items-center pl-5 pr-2 text-neutral-800 text-opacity-60 text-sm w-full py-2 bg-white">
        <div className="flex justify-center items-center gap-x-2">
          <input
            type="checkbox"
            className="w-5 h-5 accent-neutral-800 outline-none border-none rounded-full cursor-pointer"
            id="brand"
          />
          <label htmlFor="brand" className="font-medium">
            Brand
          </label>
        </div>

        <div className="flex justify-center items-center p-1 rounded-full bg-neutral-200/20 hover:bg-neutral-200/70 transition-all duration-300 ease-in-out">
          <Plus className="h-4 w-4  text-neutral-800/50 hover:text-neutral-800 transition-all duration-300 ease-in-out cursor-pointer" />
        </div>
      </div>

      {/* Description */}

      <div className="col-span-2 flex justify-start items-center pl-3 pr-2 text-neutral-800 text-opacity-60 text-sm w-full py-2 bg-white">
        <p className="font-medium">Description</p>
      </div>

      {/* Members */}

      <div className="col-span-1 flex justify-start items-center pl-3 pr-2 text-neutral-800 text-opacity-60 text-sm w-full py-2 bg-white">
        <p className="font-medium">Members</p>
      </div>

      {/* Categories */}

      <div className="col-span-1 flex justify-start items-center pl-3 pr-2 text-neutral-800 text-opacity-60 text-sm w-full py-2 bg-white">
        <p className="font-medium">Categories</p>
      </div>

      {/* Tags */}

      <div className="col-span-1 flex justify-start items-center pl-3 pr-2 text-neutral-800 text-opacity-60 text-sm w-full py-2 bg-white">
        <p className="font-medium">Tags</p>
      </div>

      {/* Next meeting */}

      <div className="col-span-1 flex justify-start items-center pl-3 pr-2 text-neutral-800 text-opacity-60 text-sm w-full py-2 bg-white">
        <p className="font-medium">Next meeting</p>
      </div>
    </div>

    {/* Add more */}

    <div className="flex justify-center items-center px-4 py-3 rounded-tr-xl bg-white group">
      <Plus className="h-4 w-4  text-neutral-800/50 hover:text-neutral-800 transition-all duration-300 ease-in-out cursor-pointer group-hover:scale-110" />
    </div>

    <div></div>
  </div>
  );
};

export default ProductFields;