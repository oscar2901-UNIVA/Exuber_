import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../../components/services/supabase/supabaseConfig";

const initialState = {
  nightclubs: {},
  loading: false,
};

export const createNightclub = createAsyncThunk(
  "nightclubs/insertNightclub",
  async (data, thunkAPI) => {
    try {
      const insertNightclub = await supabase.from("nightclubs").insert(data);

      if (insertNightclub.error) {
        console.error("Error:", insertNightclub.error);
        return thunkAPI.rejectWithValue(insertNightclub.error.message);
      }

      return insertNightclub;
    } catch (error) {
      console.error("Error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const nightclubsSlice = createSlice({
  name: "nightclubs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createNightclub.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createNightclub.fulfilled, (state, action) => {
      state.loading = false;
      state.nightclubs = action.payload.dataM;
    });
    builder.addCase(createNightclub.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const selectNightclubs = (state) => state.nightclubs.nightclubs;

export default nightclubsSlice.reducer;
