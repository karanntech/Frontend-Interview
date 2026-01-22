import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createBlog, getBlogById, getBlogs } from "../api/blogApi";
import type { Blog, CreateBlogPayload } from "../../types";

export const BLOGS_QUERY_KEY = ["blogs"];

export const useBlogs = () =>
  useQuery<Blog[]>({
    queryKey: BLOGS_QUERY_KEY,
    queryFn: getBlogs,
  });

export const useBlog = (id?: string) =>
  useQuery<Blog>({
    queryKey: [...BLOGS_QUERY_KEY, "detail", id],
    queryFn: () => getBlogById(id!),
    enabled: !!id,
  });

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation<Blog, Error, CreateBlogPayload>({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: BLOGS_QUERY_KEY });
    },
  });
};
