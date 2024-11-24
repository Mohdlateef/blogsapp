const baseURL = "http://localhost:8000";
import axios from "axios";

import{User} from "./types/authInterfaces"
export const signUp = async ({ name, userName, email, password }:User) => {
  try {
    console.log("test");
    const res = await axios.post(`${baseURL}/auth/register`, {
      name: name,
      username: userName,
      email: email,
      password: password,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};




export const signIn = async ({loginId,password}:User) => {
  try {
    const res = await axios.post(`${baseURL}/auth/logIn`, {
      loginId,
      password,
    });
    // console.log(data)
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
