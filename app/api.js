import axios from "axios";

// Replace 'your-ip-address' with the actual IP address of your development machine
const API_URL = "https://restaurant-booking-server.vercel.app/api/flora";
// const API_URL = "https://13.0.5.0:3000/api/flora";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const createPost = async (data) => {
  const formData = new FormData();
  formData.append("prompt", data.prompt);
  formData.append("tags", data.tags);
  formData.append("image", {
    uri: data.image.uri,
    type: "image/jpeg",
    name: "photo.jpg",
  });
  formData.append("mark", data.mark);

  console.log(formData);

  try {
    const response = await axiosInstance.post("/postFlora", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error; // Re-throw the error after logging it
  }
};

export const getPosts = async () => {
  try {
    const response = await axiosInstance.get("/getFlora");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error; // Re-throw the error after logging it
  }
};
