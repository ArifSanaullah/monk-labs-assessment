import { labelOrDefault } from "@/lib/labelOrDefault";
import { addItem } from "@/lib/store/features/cart";
import { useAppDispatch } from "@/lib/store/hooks";
import { MenuItem } from "@/types";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

export const ItemDetails = ({ item }: { item: MenuItem }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-gray-40 flex-1 flex flex-col max-w-7xl w-full mx-auto">
      <div className="pl-6 bg-white pb-6 rounded-b-[48px] flex-1">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex-1 flex items-center justify-center pr-4 sm:pr-6">
            <Image
              width={0}
              height={0}
              sizes="100vh"
              alt={labelOrDefault(item.name)}
              src={`https://source.unsplash.com/300x300?sig=${labelOrDefault(
                item.name
              )}`}
              className="w-full sm:w-[21rem] max-w-72 sm:max-w-[21rem] min-w-72 h-72 sm:h-[auto] rounded-full object-cover shadow-xl"
            />
          </div>
          <div className="flex-1 flex flex-row sm:flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold capitalize">
                {labelOrDefault(item.name)}
              </h2>
              <p className="text-gray-500 text-sm">By Steak house</p>
              <div className="flex items-center gap-1">
                <StarIcon className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <span className="font-light">4.5</span>
              </div>
            </div>
            <div className="flex-1 flex items-center sm:items-end justify-end sm:justify-center">
              <div className="flex items-center gap-4 p-4 sm:p-6">
                <button className="hover:bg-primary/5">
                  <PlusCircleIcon className="w-9 sm:w-12 h-9 sm:h-12 text-primary" />
                </button>
                <span className="text-xl">1</span>
                <button>
                  <MinusCircleIcon className="w-9 sm:w-12 h-9 sm:h-12 text-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {labelOrDefault(item.description) && (
          <div className="mt-6 pr-4 sm:pr-6">
            <h3>Description</h3>
            <p className="text-sm text-gray-500">
              {labelOrDefault(item.description)}
            </p>
          </div>
        )}
      </div>
      <div className="p-6 flex items-end justify-between">
        <div>
          <span>Price</span>
          <span className="flex gap-1 items-center text-4xl">
            <span>{item.price}</span>
            <span className="text-primary">$</span>
          </span>
        </div>
        <button
          className="py-4 px-6 rounded-full bg-primary text-white text-lg"
          onClick={() => dispatch(addItem(item))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
