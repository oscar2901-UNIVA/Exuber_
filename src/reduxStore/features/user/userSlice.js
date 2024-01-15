import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../../components/services/supabase/supabaseConfig";

const initialState = {
  user: {},
  loading: false,
};

export const createUsers = createAsyncThunk(
  "user/insertUser",
  async (data, thunkAPI) => {
    let insert_user = await supabase.from("users").insert(data);
    if (insert_user.error) {
      console.log("error", insert_user.error);
      return insert_user.error;
    }
    return insert_user;
  }
);

export const updateUsers = createAsyncThunk(
  "user/updateUser",
  async (data, thunkAPI) => {
    let update_user = await supabase.from("users")
    .update(data)
    .eq('id', data.id)
    if (update_user.error) {
      console.log("error", update_user.error);
      return update_user.error;
    }
    return update_user;
  }
);

export const deleteUsers = createAsyncThunk(
  "user/deleteUser",
  async (data, thunkAPI) => {
    let delete_user = await supabase.from('users')
    .delete()
    .eq('id', data)
    if (delete_user.error) {
      console.log("error", delete_user.error);
      return delete_user.error;
    }
    return delete_user;
  }
);

export const getUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, thunkAPI) => {
    let get_users = await supabase.from("users").select();

    if (get_users.error) {
      console.log("error", get_users.error);
      return get_users.error;
    }
    return get_users;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.teams = action.payload.data;
    });
    builder.addCase(createUsers.rejected, (state, action) => {
      state.loading = false;
    });
    // getUsers
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
    });
    // updateUsers
    builder.addCase(updateUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
    });
    builder.addCase(updateUsers.rejected, (state, action) => {
      state.loading = false;
    });
    // deleteUsers
    builder.addCase(deleteUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
    });
    builder.addCase(deleteUsers.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const selectUsers = (state) => state.users.user;

export default usersSlice.reducer;
