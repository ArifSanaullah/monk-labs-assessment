"use client";

import { Bucket } from "@/components/bucket";
import { useRouter } from "next/navigation";
import React from "react";

const Cart = () => {
  const router = useRouter();

  return (
    <div className="w-full max-w-7xl mx-auto h-full flex flex-col p-6 min-h-[calc(100vh_-_65px)]">
      <div
        className="flex items-center justify-end mb-6"
        onClick={() => router.push("/")}
      >
        <button className="px-6 sm:pb-6px-6 py-4 bg-primary font-semibold text-lg text-white rounded-full">
          Add Items
        </button>
      </div>
      <Bucket onClickAddItem={() => router.push("/")} />
    </div>
  );
};

export default Cart;
