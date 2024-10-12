import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../types/Product';

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    return data;
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}, // Może być pusty, jeśli nie potrzebujesz innych synchronizacji dla produktów
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

import { RootState } from '../store';

export const selectProducts = (state: RootState) => state.products.items;

export default productSlice.reducer;
