"use client";
import { clearCart } from "@/lib/store/features/cart";
import { useAppDispatch } from "@/lib/store/hooks";
import React, { useEffect } from "react";

const OrderPlaced = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return <div>OrderPlaced</div>;
};

export default OrderPlaced;
