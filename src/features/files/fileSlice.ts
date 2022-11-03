import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { File } from "./fileModel";
import fileServices from "./fileServices";

export interface fileState {
  isError: boolean;
  errorMessage: string | unknown;
  file?: File;
}

const initialState: fileState = {
  isError: false,
  errorMessage: "",
  file: {
    companyName: "",
    fileName: "",
    date: "",
  },
};

export const fileUpload = createAsyncThunk(
  "/upload",
  async (selectedFile: string | Blob) => {
    try {
      return await fileServices.uploadFile(selectedFile);
    } catch (error) {
      return error;
    }
  }
);

export const addNewFileToDb = createAsyncThunk(
  "/addFile",
  async (file: File) => {
    try {
      return await fileServices.addNewFileToDb(file);
    } catch (error) {
      return error;
    }
  }
);

export const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fileUpload.rejected, (state, action) => {
        (state.isError = true), (state.errorMessage = action.payload);
      })
      .addCase(addNewFileToDb.rejected, (state, action) => {
        (state.isError = true), (state.errorMessage = action.payload);
      });
  },
});

export default fileSlice.reducer;
