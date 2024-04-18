import axios, { AxiosError } from "axios";

const BASE_URL = "http://localhost:8000";

export const createUser = async (profileData: object) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/user`, profileData);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.error("Error wile uplaoding " + (err as Error));
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
    return res.data;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.response && axiosError.response.status == 403) {
      console.log("is this part entered");
      console.log(axiosError.response.data);
      return axiosError.response.data;
    }
    // console.error((err as Error).message);
  }
};
