import { configureStore } from "@reduxjs/toolkit";
import nightClubSlice from "./features/nightClub/nightClubSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    nightClub: nightClubSlice,
    users: userSlice,
  },
});
