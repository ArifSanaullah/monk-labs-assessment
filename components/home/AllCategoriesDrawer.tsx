import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Drawer } from "vaul";
import { categories } from "@/data";
import classNames from "classnames";
import { labelOrDefault } from "@/lib/labelOrDefault";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AllCategoriesDrawer = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Drawer.Root snapPoints={[1]} open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-white flex flex-col h-[99%] mt-24 fixed bottom-0 left-0 right-0 z-[51]">
          <div className="p-4 sm:p-6 relative bg-gray-40 h-full flex flex-col overflow-auto">
            <div className="flex items-center justify-center p-4 sm:pb-6">
              <Drawer.Close asChild className="absolute left-6">
                <button className="hover:bg-gray-200 rounded-full transition-colors p-4">
                  <ArrowLeftIcon className="w-6 h-6" />
                </button>
              </Drawer.Close>
              <h2 className="text-xl font-semibold">All Categories</h2>
            </div>
            <div className="mb-4 sm:mb-6 grid grid-cols-6 gap-4 w-full max-w-7xl mx-auto">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className={classNames(
                    "p-4 rounded-lg relative flex items-center gap-4 pr-20 overflow-hidden min-w-52 bg-primary/5 col-span-6 sm:col-span-3 lg:col-span-2"
                  )}
                  role="button"
                >
                  <div>
                    <p className="whitespace-nowrap">
                      {labelOrDefault(cat.name)}
                    </p>
                    <span className="text-sm text-gray-500">
                      {cat.items?.length} Items
                    </span>
                  </div>
                  <Image
                    src={`https://source.unsplash.com/70x70?sig=${labelOrDefault(
                      cat.name
                    )}`}
                    alt={labelOrDefault(cat.name)}
                    width={70}
                    height={70}
                    className="rounded-full absolute -right-2 top-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
