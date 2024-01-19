import { configureStore } from "@reduxjs/toolkit";
import nightClubSlice from "./features/nightClub/nightClubSlice";
import userSlice from "./features/user/userSlice";
import profileSlice from "./features/profile/profileSlice";
import productSlice from "./features/products/productSlice";

export const store = configureStore({
  reducer: {
    nightClub: nightClubSlice,
    users: userSlice,
    profile: profileSlice,
    products:productSlice
  },
});
