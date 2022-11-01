import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "./userModel";
import userServices from "./userServices";

const userInfo = localStorage.getItem("userInfo")
  ? localStorage.getItem("userInfo")
  : null;

export interface usersError {
  isError: boolean;
  message: string;
}

export interface userListState {
  userInfo: string | null;
  usersLoading: boolean;
  usersError: usersError;
  users: User[];
}

const initialState: userListState = {
  userInfo,
  usersLoading: false,
  usersError: {
    isError: false,
    message: "",
  },
  users: [],
};

export const fetchUsers = createAsyncThunk("/users", async () => {
  try {
    return await userServices.fetchUsers();
  } catch (error) {
    console.log("Error: ", error);
  }
});

export const login = createAsyncThunk("/login", async (user: User) => {
  try {
    return await userServices.login(user);
  } catch (error) {
    console.log("Error: ", error);
  }
});

export const logout = createAsyncThunk("/logout", async () => {
  try {
    return userServices.logout();
  } catch (error) {
    console.log("Error: ", error);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.usersLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersLoading = false;
        state.users = action.payload?.data || [];
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.usersLoading = false;
        state.usersError = {
          isError: true,
          message: "error",
        };
        state.users = [];
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.usersError = {
          isError: true,
          message: "error",
        };
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.userInfo = null;
      });
  },
});

export default userSlice.reducer;
