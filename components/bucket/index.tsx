"use client";
import { useAppSelector } from "@/lib/store/hooks";
import { ArrowLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import emptyCart from "@/assets/images/emptyCart.jpg";
import { Drawer } from "vaul";
import { ItemDetails } from "../home/ItemDetails";
import { MenuItem } from "@/types";
import { BucketItem } from "./BucketItem";
import { Checkout } from "./Checkout";

export const Bucket = ({ onClickAddItem }: { onClickAddItem(): void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const items = useAppSelector((state) => state.cart.items);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const total = items.reduce(
    (prev, curr) => prev + (curr.quantity ?? 1) * curr.price,
    0
  );

  const onEditItem = (item: MenuItem) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

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
          <BucketItem item={item} key={item.id} onEditItem={onEditItem} />
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
        <button
          className="bg-primary px-6 py-4 rounded-full text-white"
          onClick={() => setIsCheckoutOpen(true)}
        >
          Checkout
        </button>
      </div>
      <Drawer.NestedRoot open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col h-[99%] mt-24 fixed bottom-0 left-0 right-0 z-[52]">
            <div className="flex flex-col h-full bg-gray-40 overflow-auto">
              <div className="relative flex items-center justify-center p-4 sm:pb-6">
                <Drawer.Close asChild className="absolute left-6">
                  <button className="hover:bg-gray-200 rounded-full transition-colors">
                    <ArrowLeftIcon className="w-6 h-6" />
                  </button>
                </Drawer.Close>
                <h2 className="text-xl font-semibold">Checkout</h2>
              </div>
              <Checkout />
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.NestedRoot>
    </div>
  );
};
