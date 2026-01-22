import api from "../../../lib/axios";
import type { Blog, CreateBlogPayload } from "../../types";

export const getBlogs = async (): Promise<Blog[]> => {
  const { data } = await api.get<Blog[]>("/blogs");
  return data;
};

export const getBlogById = async (id: string): Promise<Blog> => {
  const { data } = await api.get<Blog>(`/blogs/${id}`);
  return data;
};

export const createBlog = async (
  payload: CreateBlogPayload
): Promise<Blog> => {
  const { data } = await api.post<Blog>("/blogs", {
    ...payload,
    date: new Date().toISOString(),
  });
  return data;
};
