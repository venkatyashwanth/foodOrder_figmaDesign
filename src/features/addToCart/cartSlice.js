import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartTotalQuantity: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`product added again`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.info(`product added`, {
          position: "bottom-left",
        });
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (itemIndex === -1) {
        return;
      } else {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
          toast.error(`removed from cart`, {
            position: "bottom-left",
          });
        } else if (state.cartItems[itemIndex].cartQuantity === 1) {
          const nextCartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
          );
          state.cartItems = nextCartItems;
          toast.error(`!add atleast one product`,{
            position: 'bottom-left'
        });
        }
      }
    },

    getTotals(state, action) {
      let { quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { cartQuantity } = cartItem;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, getTotals } = cartSlice.actions;
