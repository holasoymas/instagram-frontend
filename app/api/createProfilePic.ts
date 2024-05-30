import axios from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const createProfilePic = async (file: File) => {
  try {
    const fd = new FormData();
    fd.append("image", file);
    console.log(fd);
    // fd.append("text", "hello");
    // const formData = { img: file, text: "hello" };
    const res = await axios.post(`${BASE_URL}/upload-profile`, fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (err) {
    throw new Error("Error wile uplaoding " + (err as Error).message);
  }
};
