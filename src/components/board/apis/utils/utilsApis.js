import axios from "axios";

export const fetchPost = async (postId) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    console.log(response.data); //게시물 데이터가 들어있다.
  } catch (error) {
    console.log(error);
  }
};

export const jsonInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const instance = axios.create({
  baseURL: "http://localhost:8080",
});
