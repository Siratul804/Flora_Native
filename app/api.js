import axios from "axios";

const API_URL = "http://localhost:3000/api/flora";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const createPost = async (data) => {
  const formData = new FormData();
  formData.append("prompt", data.prompt);
  formData.append("tags", data.tags);
  formData.append("mark", data.mark);
  formData.append("image", {
    uri: data.image.uri,
    type: "image/jpeg",
    name: "photo.jpg",
  });

  const response = await axiosInstance.post("/postFlora", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getPosts = async () => {
  const response = await axiosInstance.get("/getFlora");
  return response.data;
};
