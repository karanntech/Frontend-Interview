import { useBlog } from "../hooks/useBlog";
import BlogDetailSkeleton from "./BlogDetailSkeleton";

interface BlogDetailProps {
  blogId?: string;
}

export default function BlogDetail({ blogId }: BlogDetailProps) {
  const { data, isLoading } = useBlog(blogId);

  if (!blogId)
    return (
      <div className="text-gray-400 text-center mt-20">
        Select a blog to read
      </div>
    );

  if (isLoading) return <BlogDetailSkeleton />;

  if (!data) return null;

  return (
    <article className="space-y-6 max-w-3xl">
      <img
        src={data.coverImage}
        alt={data.title}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h1 className="text-2xl font-bold">{data.title}</h1>

      <div className="flex gap-2 text-xs text-gray-500">
        {data.category.map((cat) => (
          <span key={cat}>{cat}</span>
        ))}
      </div>

      <p className="text-gray-700 whitespace-pre-line">
        {data.content}
      </p>
    </article>
  );
}
