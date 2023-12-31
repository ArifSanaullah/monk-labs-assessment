"use client";
import { Item } from "@/components/home/Item";
import { items } from "@/data";
import { useAppSelector } from "@/lib/store/hooks";
import { MenuItem } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import emptyCart from "@/assets/images/emptyCart.jpg";
import Link from "next/link";
import { Drawer } from "vaul";
import { ArrowLeftIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Bucket } from "@/components/bucket";

const Favourites = () => {
  const [isOpen, setIsOpen] = useState(false);

  const favourites = useAppSelector((state) => state.cart.favourites);

  const favourittedItems = items.filter((i) => favourites.includes(i.id));

  if (!favourittedItems.length) {
    return (
      <div className="py-4 h-full px-4 sm:px-6 lg:px-8 bg-gray-40 flex-1 max-w-7xl w-full mx-auto flex flex-col min-h-[calc(100vh_-_65px)]">
        <div className="flex items-center flex-1 justify-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={emptyCart}
              className="rounded-full"
              alt="Empty Cart"
              width={0}
              height={0}
            />
            <span>You have not marked any item as favourite.</span>
            <span>Click button below to add some.</span>
            <Link
              className="px-6 py-4 bg-primary text-white rounded-full"
              href={"/"}
            >
              Add Favourites
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-4 h-full px-4 sm:px-6 lg:px-8 bg-gray-40 flex-1 max-w-7xl w-full mx-auto flex flex-col gap-4">
      <div className="flex items-center justify-end">
        <Link
          className="px-6 py-4 bg-primary text-white rounded-full"
          href={"/"}
        >
          Add Favourites
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-4 sm:gap-6">
        {favourittedItems.map((item) => (
          <Item key={item.id} item={item as MenuItem} />
        ))}
      </div>
      <Drawer.Root snapPoints={[1]} open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Trigger onClick={() => setIsOpen(true)}>
          <div className="p-4 rounded-full bg-primary/80 hover:bg-primary text-white fixed bottom-6 right-6">
            <ShoppingBagIcon className="w-6 h-6" />
          </div>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col h-[99%] mt-24 fixed bottom-0 left-0 right-0 z-[51]">
            <div className="p-4 sm:p-6 relative bg-gray-40 h-full flex flex-col overflow-auto">
              <div className="flex items-center justify-center p-4 sm:pb-6">
                <Drawer.Close asChild className="absolute left-6">
                  <button className="hover:bg-gray-200 rounded-full transition-colors">
                    <ArrowLeftIcon className="w-6 h-6" />
                  </button>
                </Drawer.Close>
                <h2 className="text-xl font-semibold">My Bucket</h2>
              </div>
              <Bucket onClickAddItem={() => setIsOpen(false)} />
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default Favourites;
