"use client";
import { useAppSelector } from "@/lib/store/hooks";
import React from "react";

const Cart = () => {
  const items = useAppSelector((state) => state.cart.items);
  console.log("🚀 ~ file: page.tsx:6 ~ Cart ~ items:", items);

  return <div>Cart</div>;
};

export default Cart;
