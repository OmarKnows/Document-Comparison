import axios from "axios";
import { File } from "./fileModel";

const uploadFile = async (selectedFile: string | Blob) => {
  var formData = new FormData();
  formData.append("selectedFile", selectedFile);
  try {
    await axios({
      method: "post",
      url: "/api/v1/file/upload",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    return error;
  }
};

const addNewFileToDb = async (file: File) => {
  try {
    await axios.post("/api/v1/file", {
      companyName: file.companyName,
      fileName: file.fileName,
      date: file.date,
    });
  } catch (error) {
    return error;
  }
};

const companyServices = {
  uploadFile,
  addNewFileToDb,
};

export default companyServices;
