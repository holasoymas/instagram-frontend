import axios, { AxiosError } from "axios";

export const BASE_URL = "http://localhost:8000";

export const createPost = async (postData: FormData, token: string) => {
  console.log(postData);
  try {
    const post = await axios.post(`${BASE_URL}/api/post`, postData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(post.data);
    return post.data;
  } catch (err) {
    const axiosError = err as AxiosError;
    console.error(axiosError);
    if (axiosError.response) {
    }
  }
};
