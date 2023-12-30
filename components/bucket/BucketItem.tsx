import { labelOrDefault } from "@/lib/labelOrDefault";
import { removeItem } from "@/lib/store/features/cart";
import { useAppDispatch } from "@/lib/store/hooks";
import { MenuItem } from "@/types";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

interface Props {
  item: MenuItem;
  onEditItem(item: MenuItem): void;
}

export const BucketItem = ({ item, onEditItem }: Props) => {
  const dispatch = useAppDispatch();

  return (
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
              onClick={() => onEditItem(item)}
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
  );
};
