import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { File } from "./fileModel";
import fileServices from "./fileServices";

export interface fileState {
  isFileError: boolean;
  fileMessage: string;
  files: File[];
}

const initialState: fileState = {
  isFileError: false,
  fileMessage: "",
  files: [],
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

export const fetchFiles = createAsyncThunk(
  "/getFiles",
  async (nullparam, { rejectWithValue }) => {
    try {
      return await fileServices.fetchFiles();
    } catch (error) {
      if (axios.isAxiosError(error))
        return rejectWithValue(error.response?.data.message);
    }
  }
);

export const deleteFile = createAsyncThunk(
  "/deleteFile",
  async (id: number, { rejectWithValue }) => {
    try {
      return await fileServices.deleteFile(id);
    } catch (error) {
      if (axios.isAxiosError(error))
        return rejectWithValue(error.response?.data.message);
    }
  }
);

export const updateFile = createAsyncThunk(
  "/updateFile",
  async (file: File, { rejectWithValue }) => {
    try {
      return await fileServices.updateFile(file);
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
      .addCase(fileUpload.fulfilled, (state) => {
        state.isFileError = false;
        state.fileMessage = "File successfully added";
      })
      .addCase(fileUpload.rejected, (state, action) => {
        (state.isFileError = true),
          (state.fileMessage = <string>action.payload);
      })
      .addCase(addNewFileToDb.fulfilled, (state) => {
        state.isFileError = false;
        state.fileMessage = "File successfully added";
      })
      .addCase(addNewFileToDb.rejected, (state, action) => {
        (state.isFileError = true),
          (state.fileMessage = <string>action.payload);
      })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.files = action.payload?.data || [];
      });
  },
});

export default fileSlice.reducer;
