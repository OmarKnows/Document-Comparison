import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "./userModel";
import userServices from "./userServices";

const userInfo = localStorage.getItem("userInfo")
  ? localStorage.getItem("userInfo")
  : null;

export interface userState {
  userInfo: string | null;
  isUserError: boolean;
  userErrorMessage: string;
  users: User[];
}

const initialState: userState = {
  userInfo,
  isUserError: false,
  userErrorMessage: "",
  users: [],
};

export const fetchUsers = createAsyncThunk("/users", async () => {
  try {
    return await userServices.fetchUsers();
  } catch (error) {
    console.log("Error: ", error);
  }
});

export const login = createAsyncThunk(
  "/login",
  async (user: User, { rejectWithValue }) => {
    try {
      return await userServices.login(user);
    } catch (error) {
      if (axios.isAxiosError(error))
        return rejectWithValue(error.response?.data.message);
    }
  }
);

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
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload?.data || [];
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userInfo = action.payload?.data;
        state.isUserError = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isUserError = true;
        state.userErrorMessage = <string>action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userInfo = null;
        state.isUserError = false;
      });
  },
});

export default userSlice.reducer;
