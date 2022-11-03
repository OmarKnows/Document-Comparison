import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Company } from "./companyModel";
import companyServices from "./companyServices";

export interface companyState {
  comapnies?: Company[];
}

const initialState: companyState = {
  comapnies: [],
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
  async (company: Company) => {
    try {
      companyServices.insertCompany(company);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);

export const companySlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.comapnies = action.payload?.data || [];
    });
  },
});

export default companySlice.reducer;
