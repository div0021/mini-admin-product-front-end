import { MessagesSquare, Search, Settings } from "lucide-react";
import React from "react";

interface HeadingProps {
  // Define your component props here
}

const Heading = ({}: HeadingProps) => {
  return (
    <div className="w-full flex justify-between items-center px-3 py-2">
      <h4 className="text-neutral-900 font-semibold text-3xl">Product</h4>

      <div className="flex justify-center items-center mr-4">
        {/* Search */}
        <div className="flex justify-center items-center px-3 py-2 bg-white shadow-sm shadow-neutral-200 hover:shadow-neutral-300  transition-all duration-300 ease-in-out text-neutral-400 hover:text-neutral-700 focus-within:text-neutral-700 cursor-text rounded-xl ">
          <Search className="h-4 w-4 mr-2 " />
          <input
            type="text"
            placeholder="Search for..."
            className="outline-none focus:outline-none hover:outline-none text-sm tracking-wide"
          />
        </div>

        {/* messages */}

        <div className="flex justify-center items-center ml-5 px-2 py-1 rounded-lg cursor-pointer shadow-sm shadow-neutral-200 hover:shadow-neutral-300  transition-all duration-300 ease-in-out bg-white">
          <MessagesSquare
            className="w-5 h-5 opacity-60 hover:opacity-90
                  transition-all duration-300 ease-in-out"
          />
        </div>

        {/* settings */}

        <div className="flex justify-center rounded-lg cursor-pointer items-center ml-5 px-2 py-1 shadow-sm shadow-neutral-200 hover:shadow-neutral-300 focus-within:shadow-neutral-400 transition-all duration-300 ease-in-out bg-white">
          <Settings
            className="w-5 h-5  opacity-60 hover:opacity-90
                  transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
