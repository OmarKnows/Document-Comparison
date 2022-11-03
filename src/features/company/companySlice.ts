import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Company } from "./companyModel";
import companyServices from "./companyServices";

export interface companyState {
  isCompanyError: boolean;
  companyErrorMessage: string;
  companies?: Company[];
}

const initialState: companyState = {
  isCompanyError: false,
  companyErrorMessage: "",
  companies: [],
};

export const fetchCompanies = createAsyncThunk("/companies", async () => {
  try {
    return await companyServices.fetchCompanies();
  } catch (error) {
    console.log("Error: ", error);
  }
});

export const insertCompany = createAsyncThunk(
  "/insertCompany",
  async (company: Company, { rejectWithValue }) => {
    try {
      return await companyServices.insertCompany(company);
    } catch (error) {
      if (axios.isAxiosError(error))
        return rejectWithValue(error.response?.data.message);
    }
  }
);

export const companySlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.companies = action.payload?.data || [];
      })
      .addCase(insertCompany.rejected, (state, action) => {
        state.isCompanyError = true;
        state.companyErrorMessage = <string>action.payload;
        console.log(action.payload);
      });
  },
});

export default companySlice.reducer;
