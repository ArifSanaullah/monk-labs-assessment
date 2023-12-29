import { labelOrDefault } from "@/lib/labelOrDefault";
import { MenuItem } from "@/types";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

export const Item = ({ item }: { item: MenuItem }) => {
  return (
    <div className="flex relative flex-col shadow-md rounded-lg col-span-6 sm:col-span-3 md:col-span-2 bg-white">
      <div className="no-underline">
        <div className="">
          <div className="flex flex-row">
            <div className="relative h-32 w-32 flex-shrink-0">
              <Image
                src={`https://source.unsplash.com/200x200?sig=${labelOrDefault(
                  item.name
                )}`}
                alt={labelOrDefault(item.name)}
                width={200}
                height={200}
                className="rounded-l-lg"
              />
            </div>
            <div className="p-3 flex justify-between flex-col w-full bg-white rounded-r-lg">
              <div>
                <div className="flex justify-between items-center w-full">
                  <div
                    title="Sotosss"
                    className="text-base block line-clamp-2 font-medium capitalize text-gray-900"
                  >
                    {labelOrDefault(item.name)}
                  </div>
                </div>
                <p className="my-1 line-clamp-2 word-break text-sm font-normal leading-5 italic text-gray-500">
                  {labelOrDefault(item.description)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-700 flex items-center gap-[2px] text-sm leading-5">
                  <span className="text-primary">$</span>
                  <span>{item.price}</span>
                </div>
                <button>
                  <HeartIcon className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
