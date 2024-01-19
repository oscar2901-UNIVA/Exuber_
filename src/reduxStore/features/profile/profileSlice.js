import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../../components/services/supabase/supabaseConfig";

export const checkNightClubAssociation = createAsyncThunk(
  "profile/checkNightClubAssociation",
  async () => {
    try {
      const { data } = await supabase.auth.getSession();
      const user_id = data.session.user.id;
      console.log(
        "🚀 ~ file: profileSlice.js:9 ~ supabase.auth.getSession ~ user:",
        user_id
      );
      const { data: nightClub, error } = await supabase
        .from("night_club")
        .select("*")
        .eq("id", user_id);

      console.log("🚀 ~ file: profileSlice.js:16 ~ nightClub:", nightClub);
      if (error) {
        throw error;
      }
      return nightClub.length > 0;
    } catch (error) {
      throw error;
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    hasNightClub: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkNightClubAssociation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkNightClubAssociation.fulfilled, (state, action) => {
        state.loading = false;
        state.hasNightClub = action.payload;
      })
      .addCase(checkNightClubAssociation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;

// Exporta el selector para acceder al estado de la asociación del Night Club desde otros slices o componentes
export const selectHasNightClub = (state) => state.profile.hasNightClub;
export const selectNightClubLoading = (state) => state.profile.loading;
export const selectNightClubError = (state) => state.profile.error;
