import React from "react";
import paypal from "@/assets/images/paypal.svg";
import masterCard from "@/assets/images/masterCard.svg";
import payoneer from "@/assets/images/payoneer.svg";
import Image from "next/image";
import { useAppSelector } from "@/lib/store/hooks";
import { labelOrDefault } from "@/lib/labelOrDefault";
import { useRouter } from "next/navigation";

export const Checkout = () => {
  const router = useRouter();

  const accounts = [
    {
      name: "Master Card",
      image: masterCard,
    },
    {
      name: "Paypal",
      image: paypal,
    },
    {
      name: "Payoneer",
      image: payoneer,
    },
  ];

  const items = useAppSelector((state) => state.cart.items);

  const total = items.reduce(
    (prev, curr) => prev + (curr.quantity ?? 1) * curr.price,
    0
  );

  return (
    <div className="flex flex-col max-w-7xl w-full flex-1 mx-auto p-6">
      <div className="flex flex-col flex-1">
        <h2 className="text-xl sm:text-3xl mb-4 font-semibold">Payment</h2>
        <div className="flex-1 flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <fieldset className="mt-2">
              <legend className="sr-only">Payment method</legend>
              <div className="divide-y divide-gray-200 p-6 rounded-2xl bg-white">
                {accounts.map((account, accountIdx) => (
                  <div
                    key={accountIdx}
                    className="relative flex items-center pb-4 pt-3.5"
                  >
                    <div className="min-w-0 flex-1 text-sm leading-6">
                      <label
                        htmlFor={`account-${account.name}`}
                        className="flex items-center gap-4 sm:gap-6 cursor-pointer"
                      >
                        <Image
                          src={account.image}
                          alt={account.name}
                          width={0}
                          height={0}
                          sizes="100vh"
                        />
                        <p>{account.name}</p>
                      </label>
                    </div>
                    <div className="ml-3 flex h-6 items-center">
                      <input
                        id={`account-${account.name}`}
                        aria-describedby={`account-${account.name}-description`}
                        name="account"
                        type="radio"
                        defaultChecked={account.name === "Paypal"}
                        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary accent-primary cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="flex-1 flex flex-col gap-4 sm:gap-6">
            <div>
              <h2 className="text-xl sm:text-3xl mb-2 font-semibold">
                Delivery Details
              </h2>
              <address className="flex flex-col text-gray-500">
                <span>789 Maple Street, Los Angeles,</span>
                <span>CA 90001</span> <span>(888) 987-6543</span>
              </address>
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl mb-2 font-semibold">
                Order Details
              </h2>
              <div className="flex items-center flex-wrap gap-2">
                {items.map((item) => (
                  <p key={item.id} className="whitespace-nowrap text-gray-500">
                    {item.quantity}x {labelOrDefault(item.name)}{" "}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          <div className="flex flex-col">
            <span className="text-gray-700 text-xl">Total</span>
            <span className="text-3xl font-medium flex items-center gap-1">
              <span>{total}</span>
              <span className="text-primary">$</span>
            </span>
          </div>
          <button
            onClick={() => {
              router.push("/order-placed");
            }}
            className="bg-primary px-6 py-4 rounded-full text-white"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};
