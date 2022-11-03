import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { File } from "./fileModel";
import fileServices from "./fileServices";

export interface fileState {
  isFileError: boolean;
  fileErrorMessage: string;
}

const initialState: fileState = {
  isFileError: false,
  fileErrorMessage: "",
};

export const fileUpload = createAsyncThunk(
  "/upload",
  async (selectedFile: string | Blob, { rejectWithValue }) => {
    try {
      return await fileServices.uploadFile(selectedFile);
    } catch (error) {
      if (axios.isAxiosError(error))
        return rejectWithValue(error.response?.data.message);
    }
  }
);

export const addNewFileToDb = createAsyncThunk(
  "/addFile",
  async (file: File, { rejectWithValue }) => {
    try {
      return await fileServices.addNewFileToDb(file);
    } catch (error) {
      if (axios.isAxiosError(error))
        return rejectWithValue(error.response?.data.message);
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
        (state.isFileError = true),
          (state.fileErrorMessage = <string>action.payload);
      })
      .addCase(addNewFileToDb.rejected, (state, action) => {
        (state.isFileError = true),
          (state.fileErrorMessage = <string>action.payload);
      });
  },
});

export default fileSlice.reducer;
