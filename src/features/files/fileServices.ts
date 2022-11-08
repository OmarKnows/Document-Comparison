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
    fileName: file.fileName,
    companyName: file.companyName,
    fileDate: file.fileDate,
  });
};

const fetchFiles = async () => {
  const response = await axios.get<File[]>("/api/v1/file");
  return response;
};

const deleteFile = async (id: number) => {
  const response = await axios.delete<File[]>(`/api/v1/file/${id}`);
  return response;
};

const updateFile = async (file: File) => {
  console.log(file);
  const response = await axios.patch(`/api/v1/file/${file.id}`, {
    fileName: file.fileName,
    companyName: file.companyName,
    fileDate: file.fileDate,
  });
  console.log(response);
  return response;
};

const companyServices = {
  uploadFile,
  addNewFileToDb,
  fetchFiles,
  deleteFile,
  updateFile,
};

export default companyServices;
