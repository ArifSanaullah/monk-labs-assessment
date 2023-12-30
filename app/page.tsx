"use client";
import { Item } from "@/components/home/Item";
import { categories, items } from "@/data";
import { MenuItem } from "@/types";
import hand from "@/assets/images/waving-hand-svgrepo-com.svg";
import Image from "next/image";
import { labelOrDefault } from "@/lib/labelOrDefault";
import { useState } from "react";
import classNames from "classnames";
import { ArrowLeftIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Drawer } from "vaul";
import { Bucket } from "@/components/bucket";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="py-4 h-full px-4 sm:px-6 lg:px-8 bg-gray-40 flex-1">
      <div className="flex flex-col mx-auto max-w-7xl">
        <div className="pb-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <h1 className="text-xl font-bold">Hey, Danyal</h1>
            <Image src={hand} alt="Waving emoji" width={32} height={32} />
          </div>
          <p className="text-gray-500 text-sm">It&lsquo;s dinner time</p>
        </div>
        <div className="mb-4 sm:mb-6 flex flex-nowrap overflow-x-auto gap-4">
          <div
            className={classNames(
              "p-4 rounded-lg relative flex items-center gap-4 pr-20 overflow-hidden min-w-52",
              activeTab === "all" ? "bg-primary text-white" : "bg-primary/5"
            )}
            role="button"
            onClick={() => setActiveTab("all")}
          >
            <p className="whitespace-nowrap">All Items</p>
            <Image
              src={`https://source.unsplash.com/70x70?sig=all items`}
              alt="all"
              width={70}
              height={70}
              className="rounded-full absolute -right-2 top-2"
            />
          </div>
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={classNames(
                "p-4 rounded-lg relative flex items-center gap-4 pr-20 overflow-hidden min-w-52",
                activeTab === cat.id ? "bg-primary text-white" : "bg-primary/5"
              )}
              role="button"
              onClick={() => setActiveTab(cat.id)}
            >
              <p className="whitespace-nowrap">{labelOrDefault(cat.name)}</p>
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
        <div className="grid grid-cols-6 gap-4 sm:gap-6">
          {items.map((item) => (
            <Item key={item.id} item={item as MenuItem} />
          ))}
        </div>
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
}
