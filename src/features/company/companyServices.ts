import axios from "axios";
import { Company } from "./companyModel";

const fetchCompanies = async () => {
  const response = await axios.get<Company[]>("/api/v1/company");
  return response;
};

const insertCompany = async (company: Company) => {
  console.log(company.name);
  await axios.post("/api/v1/company", {
    name: company.name,
  });
};

const companyServices = {
  fetchCompanies,
  insertCompany,
};

export default companyServices;
