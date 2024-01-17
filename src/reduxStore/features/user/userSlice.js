import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../../components/services/supabase/supabaseConfig";

const initialState = {
  user: {},
  loading: false,
};

export const createUsers = createAsyncThunk(
  "user/insertUser",
  async (data, thunkAPI) => {
    let insert_user = await supabase.from("night_club").insert(data);
    if (insert_user.error) {
      console.log("error", insert_user.error);
      return insert_user.error;
      /* name_club: data.name_club,
          location: data.location,
          description: data.description,
          instagram_username: data.instagram_username, */
    }
    return insert_user;
  }
);

export const signUp = createAsyncThunk(
  "user/signUpUser",
  async (data, thunkAPI) => {
    try {
      let signup_user = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.full_name,
            username: data.username,
            phone: data.phone,
          },
        },
      });

      if (signup_user.error) {
        console.log("Error al registrar usuario:", signup_user.error.message);
        return thunkAPI.rejectWithValue(signup_user.error.message);
      }

      return signup_user;
    } catch (error) {
      console.error("Error inesperado al registrar usuario:", error);
      return thunkAPI.rejectWithValue("Error inesperado al registrar usuario");
    }
  }
);

export const deleteUsers = createAsyncThunk(
  "user/deleteUser",
  async (data, thunkAPI) => {
    let delete_user = await supabase.from("users").delete().eq("id", data);
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
export const updateUsers = createAsyncThunk(
  "user/updateUser",
  async (data, thunkAPI) => {
    let update_user = await supabase
      .from("users")
      .update(data)
      .eq("id", data.id);
    if (update_user.error) {
      console.log("error", update_user.error);
      return update_user.error;
    }
    return update_user;
  }
);
export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  const login_user = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
  if (login_user.error) {
    console.log("🚀 ~ file: userSlice.js:98 ~ login ~ error:", login_user.error)
    console.log("error", login_user.error);
    return login_user.error;
  }
  return login_user;
});

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

    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const selectUsers = (state) => state.users.user;

export default usersSlice.reducer;
