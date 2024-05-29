import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

export const BASE_URL = "http://localhost:8000";

export const createUser = async (profileData: object) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/user`, profileData);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.error("Error wile uplaoding " + (err as Error));
  }
};

export const loginUser = async (loginData: object) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/user/login`, loginData);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.error("Error while connecting server ", err);
  }
};

export const getUser = async (username: string, token: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/user/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    if (res.status == 401) {
      localStorage.removeItem("token");
      console.log("I this part touching");
      return null;
    }
    return res.data;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.response) {
      if (axiosError.response.status === 403) {
        // User is unauthorized, return response data
        return await axiosError.response.data;
      } else if (axiosError.response.status === 401) {
        localStorage.removeItem("token");
      }
    } else {
      // Handle other types of errors
      console.error("Error while fetching user:", axiosError.message);
    }
    // If error is not caught, return null or handle it appropriately
    return null;
  }
};
