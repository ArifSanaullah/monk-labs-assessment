"use client";

import { MenuItem } from "@/types";
import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: MenuItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartState = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<MenuItem>) => {
      const items = current(state.items);
      let item = items.find((i) => i.id === action.payload.id);
      if (item) {
        const idx = items.findIndex((i) => i.id === action.payload.id);

        state.items = state.items.toSpliced(idx, 1, {
          ...item,
          quantity: item.quantity! + action.payload.quantity!,
        });
      } else {
        state.items = state.items.concat(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<MenuItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartState.actions;

export default cartState.reducer;
