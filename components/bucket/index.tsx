"use client";
import { labelOrDefault } from "@/lib/labelOrDefault";
import { useAppSelector } from "@/lib/store/hooks";
import React from "react";

export const Bucket = () => {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {labelOrDefault(item.name)}
          {item.quantity}
        </div>
      ))}
    </div>
  );
};
