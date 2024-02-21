import axios from "axios";

const API_URL = "/api/user";
const registerUser = async (formdata) => {
  const response = await axios.post(API_URL + "/register", formdata);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const loginUser = async(formdata) => {
  const response=await axios.post(API_URL+"/login",formdata)
  localStorage.setItem('user',JSON.stringify(response.data))
  return response.data;
};

const authService = {
  registerUser,
  loginUser,
};

export default authService;
