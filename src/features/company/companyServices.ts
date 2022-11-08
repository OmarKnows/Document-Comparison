import axios from "axios";
import { Company } from "./companyModel";

const fetchCompanies = async () => {
  const response = await axios.get<Company[]>("/api/v1/company");
  return response;
};

const insertCompany = async (company: Company) => {
  return await axios.post("/api/v1/company", {
    companyName: company.companyName,
  });
};

const companyServices = {
  fetchCompanies,
  insertCompany,
};

export default companyServices;
