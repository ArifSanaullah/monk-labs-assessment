"use client";

import { Bucket } from "@/components/bucket";
import { useRouter } from "next/navigation";
import React from "react";

const Cart = () => {
  const router = useRouter();

  return (
    <div className="h-full flex p-6 border min-h-[calc(100vh_-_65px)]">
      <Bucket onClickAddItem={() => router.push("/")} />
    </div>
  );
};

export default Cart;
