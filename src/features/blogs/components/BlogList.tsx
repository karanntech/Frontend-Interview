import { useBlogs } from "../hooks/useBlog";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";

interface BlogListProps {
  selectedId?: string;
  onSelect: (id: string) => void;
}

export default function BlogList({
  selectedId,
  onSelect,
}: BlogListProps) {
  const { data, isLoading, isError } = useBlogs();

  if (isLoading) return <BlogCardSkeleton />;

  if (isError)
    return (
      <div className="text-sm text-red-500">
        Failed to load blogs
      </div>
    );

  return (
    <div className="space-y-3">
      {data?.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onSelect={onSelect}
          isActive={blog.id === selectedId}
        />
      ))}
    </div>
  );
}
