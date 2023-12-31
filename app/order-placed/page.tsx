"use client";
import { clearCart } from "@/lib/store/features/cart";
import { useAppDispatch } from "@/lib/store/hooks";
import React, { useEffect } from "react";
import rider from "@/assets/images/rider.png";
import Image from "next/image";
import Link from "next/link";
import { useReward } from "react-rewards";

const OrderPlaced = () => {
  const dispatch = useAppDispatch();

  const { reward } = useReward("congrats", "confetti", {
    elementCount: 500,
    lifetime: 10000,
    spread: 180,
  });

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch, reward]);

  useEffect(() => {
    reward();
  }, [reward]);

  return (
    <div className="py-4 h-full px-4 sm:px-6 lg:px-8 bg-gray-40 flex-1 max-w-7xl w-full mx-auto min-h-[calc(100vh_-_65px)] flex flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h2 className="text-xl sm:text-3xl mb-4 font-semibold" id="congrats">
          Congratulations!
        </h2>
        <h2 className="text-xl sm:text-3xl mb-4 font-semibold">
          You Order Has Been Placed.
        </h2>
      </div>

      <span className="rewardId"></span>
      <Image src={rider} alt="rider" width={0} height={0} sizes="100vh" />
      <p className="text-gray-500 max-w-sm text-center">
        Thank you for choosing our services! Your order has been successfully
        placed and is now being processed. We appreciate your trust in us and
        look forward to serving you.
      </p>
      <Link href={"/"} className="px-6 py-4 bg-primary text-white rounded-full">
        Go To Home
      </Link>
    </div>
  );
};

export default OrderPlaced;
