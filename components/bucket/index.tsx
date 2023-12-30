"use client";
import { labelOrDefault } from "@/lib/labelOrDefault";
import { removeItem } from "@/lib/store/features/cart";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  ArrowLeftIcon,
  HeartIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import emptyCart from "@/assets/images/emptyCart.jpg";
import { Drawer } from "vaul";
import { ItemDetails } from "../home/ItemDetails";
import { MenuItem } from "@/types";

export const Bucket = ({ onClickAddItem }: { onClickAddItem(): void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const items = useAppSelector((state) => state.cart.items);

  const dispatch = useAppDispatch();

  const total = items.reduce(
    (prev, curr) => prev + (curr.quantity ?? 1) * curr.price,
    0
  );

  if (!items?.length) {
    return (
      <div className="flex items-center flex-1 justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src={emptyCart}
            className="rounded-full"
            alt="Empty Cart"
            width={0}
            height={0}
          />
          <span>You Bucket is empty. Click below button to add items.</span>
          <button
            className="px-6 py-4 bg-primary text-white rounded-full"
            onClick={onClickAddItem}
          >
            Add items
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col max-w-7xl w-full flex-1 mx-auto">
      <Drawer.NestedRoot open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col h-[99%] mt-24 fixed bottom-0 left-0 right-0 z-[52]">
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
            {selectedItem && (
              <ItemDetails
                mode="edit"
                item={selectedItem}
                onClose={() => setIsOpen(false)}
              />
            )}
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.NestedRoot>

      <div className="space-y-4 sm:gap-6 flex-1">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 bg-white p-3 rounded-[20px] shadow"
          >
            <Image
              src={`https://source.unsplash.com/70x70?sig=${labelOrDefault(
                item.name
              )}`}
              alt={labelOrDefault(item.name)}
              width={70}
              height={70}
              className="rounded-[16px]"
            />
            <div className="flex flex-col items-start justify-between flex-1 p-1">
              <div className="flex items-center justify-between w-full">
                <p>{labelOrDefault(item.name)}</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      setIsOpen(true);
                    }}
                    className="rounded-full w-8 h-8 border-2 border-gray-500 text-gray-500 flex items-center justify-center"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button
                    className="rounded-full w-8 h-8 border-2 border-red-500 flex items-center justify-center"
                    onClick={() => dispatch(removeItem(item))}
                  >
                    <TrashIcon className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="text-gray-500 text-sm">
                  Quantity&nbsp;{item.quantity}
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <span className="text-primary">$</span>
                  <span>{(item.quantity ?? 1) * item.price}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-gray-700 text-xl">Total</span>
          <span className="text-3xl font-medium flex items-center gap-1">
            <span>{total}</span>
            <span className="text-primary">$</span>
          </span>
        </div>
        <button className="bg-primary px-6 py-4 rounded-full text-white">
          Checkout
        </button>
      </div>
    </div>
  );
};
