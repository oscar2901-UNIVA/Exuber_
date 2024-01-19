import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../../components/services/supabase/supabaseConfig";

const initialState = {
  products: {},
  loading: false,
};

export const getProducts = createAsyncThunk(
  "product/getAllProducts",
  async (_, thunkAPI) => {
    let get_products = await supabase.from("productos").select();

    if (get_products.error) {
      console.log("error", get_products.error);
      return get_products.error;
    }
    return get_products;
  }
);

export const createProducts = createAsyncThunk(
  "products/insertProducts",
  async (datos, thunkAPI) => {
    console.log("🚀 ~ file: productSlice.js:25 ~ data:", datos);
    const { data } = await supabase.auth.getSession();
    const user_id = data.session.user.id;
    console.log("🚀 ~ file: productSlice.js:28 ~ user_id:", user_id);

    const data_products = {
      item_name: datos.item_name,
      price: datos.price,
      description: datos.description,
      night_club_id: user_id,
    };
    console.log("data_products", data_products);
    let insert_products = await supabase
      .from("productos")
      .insert(data_products);
    if (insert_products.error) {
      console.log("error", insert_products.error);
      return insert_products.error;
    }
    return insert_products;
  }
);

export const updateProducts = createAsyncThunk(
  "products/updateProducts",
  async (data, thunkAPI) => {
    let update_products = await supabase
      .from("productos")
      .update(data)
      .eq("id", data.id);
    if (update_products.error) {
      console.log("error", update_products.error);
      return update_products.error;
    }
    return update_products;
  }
);

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (data, thunkAPI) => {
    let delete_products = await supabase
      .from("productos")
      .delete()
      .eq("id", data);
    if (delete_user.error) {
      console.log("error", delete_products.error);
      return delete_products.error;
    }
    return delete_products;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.data;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(createProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createProducts.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createProducts.rejected, (state, action) => {
      state.loading = false;
    });
    // update Products
    builder.addCase(updateProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateProducts.fulfilled, (state, action) => {
      state.loading = false;
      /* state.products = action.payload.data; */
    });
    builder.addCase(updateProducts.rejected, (state, action) => {
      state.loading = false;
    });
    // delete Products
    builder.addCase(deleteProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteProducts.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteProducts.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;
