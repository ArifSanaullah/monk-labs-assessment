"use client";
import { Item } from "@/components/home/Item";
import { categories, items } from "@/data";
import { MenuItem } from "@/types";
import hand from "@/assets/images/waving-hand-svgrepo-com.svg";
import Image from "next/image";
import { labelOrDefault } from "@/lib/labelOrDefault";
import { useState } from "react";
import classNames from "classnames";

export default function Home() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <div className="p-4 sm:p-6 bg-gray-40">
      <div className="flex flex-col mx-auto max-w-7xl">
        <div className="px-6 pb-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <h1 className="text-xl font-bold">Hey, Danyal</h1>
            <Image src={hand} alt="Waving emoji" width={32} height={32} />
          </div>
          <p className="text-gray-500 text-sm">It&lsquo;s dinner time</p>
        </div>
        <div className="mb-4 sm:mb-6 flex flex-nowrap overflow-x-auto gap-4">
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
    </div>
  );
}
