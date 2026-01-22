import { timeAgo } from "@/lib/date";
import type { Blog } from "@/features/types";

interface BlogCardProps {
  blog: Blog;
  onSelect: (id: string) => void;
  isActive: boolean;
}

export default function BlogCard({ blog, onSelect, isActive }: BlogCardProps) {
  return (
    <button
      onClick={() => onSelect(blog.id)}
      className={`w-full text-left rounded-lg border p-4 transition cursor-pointer ${
        isActive ? "bg-gray-100 border-gray-400" : "hover:bg-gray-50"
      }`}
    >
      {/* Category + Date row */}
      <div className="mb-1 flex items-center justify-between text-xs text-gray-500 font-semibold">
        <div className="flex flex-wrap gap-2">
          {blog.category.map((cat) => (
            <span key={cat}>{cat}</span>
          ))}
        </div>

        <span className="whitespace-nowrap">{timeAgo(blog.date)}</span>
      </div>

      <h3 className="font-semibold text-sm">{blog.title}</h3>
      <p className="mt-1 text-xs text-gray-500 line-clamp-2">
        {blog.description}
      </p>
    </button>
  );
}
