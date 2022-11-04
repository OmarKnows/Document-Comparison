import axios from "axios";
import { User } from "./userModel";
import { useNavigate } from "react-router-dom";

const fetchUsers = async () => {
  const response = await axios.get<User[]>("/api/v1/user");
  return response;
};

const login = async (user: User) => {
  const response = await axios.post("/api/v1/user/login", {
    name: user.name,
    password: user.password,
  });
  localStorage.setItem("userInfo", JSON.stringify(user.name));
  return response;
};

const logout = () => {
  localStorage.removeItem("userInfo");
};

const userServices = {
  fetchUsers,
  login,
  logout,
};

export default userServices;
