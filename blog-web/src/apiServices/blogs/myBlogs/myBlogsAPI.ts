import { API } from "../..";

const myblogs = async (page: Number) => {
  const res = await API.get(`/blog/read-my-blogs?SKIP=${page}`);

  if (res.data.status === 200) {
    return res.data.data;
  }
  if (res.data.status === 204) {
    return res.data.message;
  }
};

const deleteMyBlog = async (id: string) => {
  try {
    const res = await API.post(`/blog/delete-blog`, {
      blogId: id,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const updateBlog = async (text: string, blogId: string) => {
  const res = await API.post(`/blog/edit-blog`, {
    newText: text,
    blogId,
  });
  return res.data;
};

export default {
  myblogs,
  deleteMyBlog,
  updateBlog,
};
