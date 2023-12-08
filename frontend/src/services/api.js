import axios from "axios";

import { LOGIN_URL } from "./apiConstant.js";

export const LoginRequest = async (data) => {
  return  axios.post(LOGIN_URL, data);
};
