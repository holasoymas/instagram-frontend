import axios, { AxiosError } from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

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

export const getPosts = async () => {
  try {
    const posts = await axios.get(`${BASE_URL}/api/user/posts`);
    return posts.data;
  } catch (err) {
    console.error("Error while fetching posts " + err);
  }
};
