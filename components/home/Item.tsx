"use client";
import { labelOrDefault } from "@/lib/labelOrDefault";
import { MenuItem } from "@/types";
import { ArrowLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import { Drawer } from "vaul";
import { ItemDetails } from "./ItemDetails";

export const Item = ({ item }: { item: MenuItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <>
      <Drawer.Root snapPoints={[1]} open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col h-[99%] mt-24 fixed bottom-0 left-0 right-0 z-[51]">
            <div className="p-2 flex items-center justify-between">
              <Drawer.Close asChild>
                <button className="p-3 hover:bg-gray-200 rounded-full transition-colors">
                  <ArrowLeftIcon className="w-6 h-6" />
                </button>
              </Drawer.Close>
              <button className="p-3 hover:bg-gray-200 rounded-full transition-colors">
                <HeartIcon className="w-6 h-6" />
              </button>
            </div>
            {selectedItem && <ItemDetails item={selectedItem} />}
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <div
        className="flex relative flex-col shadow-md rounded-lg col-span-6 sm:col-span-3 md:col-span-2 bg-white"
        role="list-item"
        onClick={() => {
          setSelectedItem(item);
          setIsOpen(true);
        }}
      >
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
                    <div className="text-base block line-clamp-2 font-medium capitalize text-gray-900">
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
    </>
  );
};
