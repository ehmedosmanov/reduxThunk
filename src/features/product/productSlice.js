import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addProductApi,
  getAllProductApi,
} from "../../services/productServices";

export const getAllProduct = createAsyncThunk(
  "products/getAll",
  getAllProductApi
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  addProductApi
);

const initialState = {
  basket: [],
  wishlist: [],
  initial: [],
  isLoading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findBasket = state.basket.find((x) => x.id === action.payload.id);
      if (findBasket) {
        findBasket.count++;
      } else {
        state.basket.push({ ...action.payload, count: 1 });
      }
    },
    addToWishlist: (state, action) => {
      const findWishlist = state.wishlist.find((x) => x.id === action.payload.id);
      console.log(findWishlist);
      if (!findWishlist) {
        state.wishlist.push(action.payload);
      } else {
        state.wishlist = state.wishlist.filter(x => x.id !== action.payload.id);
      }
    },
    removeFromWishlist: (state, action) => {
      const removeWishlist = state.wishlist.filter(
        (x) => x.id !== action.payload
      );
      state.wishlist = removeWishlist;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.initial = action.payload;
        state.error = null;
      })
      .addCase(getAllProduct.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.initial = action.payload;
        state.error = null;
      })
      .addCase(addProduct.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      });
  },
});

export const { addToBasket, addToWishlist, removeFromWishlist } = productSlice.actions;

export default productSlice.reducer;
