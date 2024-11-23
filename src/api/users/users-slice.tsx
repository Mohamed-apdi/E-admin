import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Users } from "../../types/user";
import { UsersService } from "./users-service";

// Define the state interface
interface UsersState {
  users: Users[];
  user: Users | null;
  success: boolean;
  loading: boolean;
  error: boolean;
  message: string;
}

// Initial state
const initialState: UsersState = {
  users: [],
  user: null,
  success: false,
  loading: false,
  error: false,
  message: "",
};

// Thunk to fetch users
export const fetchUsers = createAsyncThunk<Users[], void, { rejectValue: string }>(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const users = await UsersService.getUsers(); // Directly return users from service
      return users;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const message = error.response?.data?.message || error.message;
        return thunkAPI.rejectWithValue(message);
    }
  }
);

// Thunk to get a single user
export const getUser = createAsyncThunk<Users, string, { rejectValue : string}>(
  "users/user",
  async (id, thunkAPI ) => {
      try {
        const user = await UsersService.getUser(id);
        return user;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        const message = error.response?.data?.message || error.message;
        return thunkAPI.rejectWithValue(message);
      }
  }
)

// Thunk to delete user

export const deleteUser = createAsyncThunk<string, string, { rejectValue: string }>(
  "users/deleteUser",
  async (id, thunkAPI) => {
    try {
      await UsersService.deleteUser(id); // Directly call service to delete user
      return "User deleted successfully";
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const message = error.response?.data?.message || error.message;
        return thunkAPI.rejectWithValue(message);
    }
  }
)

export const updateUser = createAsyncThunk<Users, { id: string; data: Users }, { rejectValue: string }>(
  "users/updateUser",
  async ({ id, data }, thunkAPI) => {
    try {
      console.log("Updating user with ID:", id, "and data:", data); // Log input data
      const updatedUser = await UsersService.updateUser({ id, data });
      return updatedUser;
    } catch (error: any) {
      console.error("Error updating user:", error); // Log errors
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Users slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.message = "";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.success = true;
        state.message = "";
        state.error = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.success = false;
        state.message = action.payload || "Fetching users failed";
        state.error = true;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.message = "";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload;
        state.error = false;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.message = action.payload || "Deleting user failed";
        state.error = true;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.message = "";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = true;
        state.message = "";
        state.error = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.success = false;
        state.message = action.payload || "Fetching user failed";
        state.error = true;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.message = "";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = true;
        state.message = "";
        state.error = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.success = false;
        state.message = action.payload || "Updating user failed";
        state.error = true;
      })
  },
});

export default usersSlice.reducer;
