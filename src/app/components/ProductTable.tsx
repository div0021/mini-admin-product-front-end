import { MessagesSquare, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import ProductFields from "./ProductFields";
import productData from "@/app/data/product.json";
import ProductTableItem from "./ProductTableItem";
import { v4 as uuid } from "uuid";

interface ProductTableProps {
  // Define your component props here
}

const ProductTable = ({}: ProductTableProps) => {
  return (
    <div className="w-full pt-3 space-y-1">
      {/* Fields */}
      <ProductFields />

      {/* Products */}

      {productData.map((el) => (
        <ProductTableItem
          brand={el.brand}
          categories={el.categories}
          chat={el.chat}
          description={el.description}
          logo={el.logo}
          members={el.members}
          nextmeeting={el.nextmeeting}
          tags={el.tags}
          totalChat={el.totalChat}
          key={uuid()}
        />
      ))}

      <div className="w-full">
        <div className="w-full flex items-center justify-start gap-x-1 pl-2 pr-2">
          <div className="grid grid-cols-9 w-full gap-x-1">
            {/* totalcount */}

            <div className="col-span-3 flex justify-end items-center pl-5 pr-2 text-neutral-800 text-opacity-60 text-sm w-full py-2 bg-white">
              <span className="text-neutral-800/90">{productData.length}</span>
              <span>count</span>
            </div>

            {/* Description */}

            <div className="col-span-2 flex justify-end items-center pl-3 pr-2 text-neutral-800 text-opacity-90 text-sm w-full py-2 bg-white group">
              <div className="flex justify-center items-center gap-x-2">
                <Plus className="h-4 w-4  text-neutral-800/50 hover:text-neutral-800 group-hover:text-neutral-800 transition-all duration-300 ease-in-out cursor-pointer group-hover:scale-110" />
                <p className="text-neutral-800/50 hover:text-neutral-800 group-hover:text-neutral-800 ">
                  Add calculation
                </p>
              </div>
            </div>

            {/* Members */}

            <div className="col-span-1 flex justify-end items-center pl-3 pr-2 text-neutral-800 text-opacity-60 text-sm w-full py-2 bg-white group">
              <div className="flex justify-center items-center gap-x-2">
                <Plus className="h-4 w-4  text-neutral-800/50 hover:text-neutral-800 group-hover:text-neutral-800 transition-all duration-300 ease-in-out cursor-pointer group-hover:scale-110" />
                <p className="text-neutral-800/50 hover:text-neutral-800 group-hover:text-neutral-800 ">
                  Add calculation
                </p>
              </div>
            </div>

            {/* Categories */}

            <div className="col-span-1 flex justify-end items-center pl-3 pr-2 text-sm w-full py-2 bg-white group">
              <div className="flex justify-center items-center gap-x-2">
                <Plus className="h-4 w-4  text-neutral-800/50 hover:text-neutral-800 group-hover:text-neutral-800 transition-all duration-300 ease-in-out cursor-pointer group-hover:scale-110" />
                <p className="text-neutral-800/50 hover:text-neutral-800 group-hover:text-neutral-800 ">
                  Add calculation
                </p>
              </div>
            </div>

            {/* Tags */}

            <div className="col-span-1 flex justify-start items-center pl-3 pr-2 text-neutral-800 text-opacity-60 text-sm w-full py-2 bg-white group cursor-pointer overscroll-contain">
              <div className="flex justify-center items-center gap-x-2 overflow-x-scroll">
                <Plus className="h-4 w-4  text-neutral-800/50 hover:text-neutral-800 group-hover:text-neutral-800 transition-all duration-300 ease-in-out cursor-pointer group-hover:scale-110" />
                <p className="text-neutral-800/50 hover:text-neutral-800 group-hover:text-neutral-800 ">
                  Add calculation
                </p>
              </div>
            </div>

            {/* Next meeting */}

            <div className="col-span-1 flex justify-start items-center pl-3 pr-2 text-neutral-800 text-opacity-60 text-sm w-full py-2 bg-white"></div>
          </div>

          {/* Add more */}

          <div className="flex justify-center items-center px-6 py-5 bg-white rounded-br-xl flex-grow h-full group"></div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
