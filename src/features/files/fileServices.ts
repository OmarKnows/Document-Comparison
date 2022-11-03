import axios from "axios";
import { File } from "./fileModel";

const uploadFile = async (selectedFile: string | Blob) => {
  var formData = new FormData();
  formData.append("selectedFile", selectedFile);
  return await axios({
    method: "post",
    url: "/api/v1/file/upload",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const addNewFileToDb = async (file: File) => {
  return await axios.post("/api/v1/file", {
    companyName: file.companyName,
    fileName: file.fileName,
    date: file.date,
  });
};

const companyServices = {
  uploadFile,
  addNewFileToDb,
};

export default companyServices;
