import axios from "axios";
import { API } from "..";
const baseURL = "http://localhost:8000";

const readBlogs = async (page: any) => {
  try {
    const res = await axios.get(`${baseURL}/blog/read-blogs?SKIP=${page}`, {
      withCredentials: true,
    });
    return res.data.status === 200 ? res.data.data : [];
  } catch (error) {
    console.log(error);
  }
};

const createBlog = async (blogTitle: any, blogInput: any, userId: any) => {
  if (!blogInput) {
    alert("please enter text");
    return;
  }

  try {
    const res = await API.post(`/blog/create-blog`, {
      title: blogTitle,
      textbody: blogInput,
      userId: userId,
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  readBlogs,
  createBlog,
};
