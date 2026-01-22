import { formatDate } from "@/lib/date";
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
    <article className="space-y-6 max-w-6xl">
      <img
        src={data.coverImage}
        alt={data.title}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h1 className="text-2xl font-bold">{data.title}</h1>

      {/* Categories + Date */}
      <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-500">
        {data.category.map((cat) => (
          <span key={cat}>{cat}</span>
        ))}
        <span className="text-gray-400">•</span>
        <span>{formatDate(data.date)}</span>
      </div>
        <h4 className="mt-1 font-extrabold text-gray-800 line-clamp-2 text-sm">
        {data.description}
      </h4>
      <p className="text-gray-700 whitespace-pre-line">
        {data.content}
      </p>
    </article>
  );
}
