import { MessagesSquare } from "lucide-react";
import Image from "next/image";
import React from "react";
import { v4 as uuid } from "uuid";

interface ProductTableItemProps {
  // Define your component props here
  brand: string;
  logo: string;
  description: string;
  chat: boolean;
  totalChat: number;
  members: string[];
  categories: string[];
  tags: string[];
  nextmeeting: string;
}

const ProductTableItem = ({
  brand,
  categories,
  chat,
  description,
  logo,
  members,
  nextmeeting,
  tags,
  totalChat,
}: ProductTableItemProps) => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start gap-x-1 pl-2 pr-2">
        <div className="grid grid-cols-9 w-full gap-x-1">
          {/* Brand */}

          <div className="col-span-3 flex justify-between items-center pl-5 pr-2 text-neutral-800 text-opacity-60 text-sm w-full py-2 bg-white">
            <div className="flex justify-center items-center gap-x-3">
              <input
                type="checkbox"
                className="w-5 h-5 accent-neutral-800 outline-none border-none rounded-full cursor-pointer"
                id={brand.toLowerCase()}
              />
              <label
                htmlFor={brand.toLowerCase()}
                className="font-medium flex justify-center items-center gap-x-1.5"
              >
                <Image src={logo} width={22} height={22} alt="wix" />
                <p>{brand}</p>
              </label>
            </div>

            {chat && (
              <div className="flex justify-center items-center gap-x-1 p-1 transition-all duration-300 ease-in-out">
                <MessagesSquare className="h-4 w-4  text-neutral-800/50" />
                <p className="text-neutral-800/90">{totalChat}</p>
              </div>
            )}
          </div>

          {/* Description */}

          <div className="col-span-2 flex justify-start items-center pl-3 pr-2 text-neutral-800 text-opacity-90 text-sm w-full py-2 bg-white">
            <p className="font-medium truncate">{description}</p>
          </div>

          {/* Members */}

          <div className="col-span-1 flex justify-start items-center pl-3 pr-2 text-neutral-800 text-opacity-60 text-sm w-full py-2 bg-white relative">
            <div className="flex items-center justify-center absolute p-1 bg-white">
              <Image
                src={members[1]}
                alt="avatar"
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
            <div className="flex items-center justify-center absolute left-7 rounded-full p-0.5 bg-white">
              <Image
                src={members[0]}
                alt="avatar"
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Categories */}

          <div className="col-span-1 flex justify-start items-center pl-3 pr-2 text-sm w-full py-2 bg-white overflow-x-scroll">
            <div className="flex items-center justify-start overscroll-contain gap-x-2 text-xs">
              {categories.map((el) => (
                <p
                  key={uuid()}
                  className="font-medium bg-purple-300 text-purple-700 border border-purple-600 py-0.5 px-1 rounded-md"
                >
                  {el}
                </p>
              ))}
            </div>
          </div>

          {/* Tags */}

          <div className="col-span-1 flex justify-start items-center pl-3 pr-2 text-neutral-800 text-opacity-60 text-sm w-full py-2 bg-white overflow-x-scroll">
            <div className="flex items-center justify-start overscroll-contain gap-x-2 text-xs">
              {tags.map((el) => (
                <p
                  key={uuid()}
                  className=" text-neutral-400 border border-neutral-400 bg-neutral-200 py-0.5 px-1 rounded-lg tracking-wide"
                >
                  {el}
                </p>
              ))}
            </div>
          </div>

          {/* Next meeting */}

          <div className="col-span-1 flex justify-start items-center pl-3 pr-2 text-neutral-800 text-opacity-60 text-sm w-full py-2 bg-white overflow-x-scroll">
            <div className="flex items-center justify-start overscroll-contain gap-x-2 text-xs">
              <p className="font-medium text-neutral-400 border border-neutral-400 bg-neutral-200 py-0.5 px-1 rounded-lg tracking-wide">
                {nextmeeting}
              </p>
            </div>
          </div>
        </div>

        {/* Add more */}

        <div className="flex justify-center items-center px-6 py-5 bg-white flex-grow h-full group"></div>

        <div></div>
      </div>
    </div>
  );
};

export default ProductTableItem;
