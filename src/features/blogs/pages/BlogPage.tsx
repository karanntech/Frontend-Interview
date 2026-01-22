import { useState } from "react";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";
import CreateBlogForm from "../components/CreateBlogForm";

export default function BlogPage() {
  const [selectedId, setSelectedId] = useState<string | undefined>();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Panel */}
      <aside className="w-96 border-r bg-white p-4 overflow-y-auto space-y-6">
        {/* Create Blog */}
        <CreateBlogForm />

        {/* Blog List */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">
            Latest Articles
          </h2>
          
          <BlogList
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>
      </aside>

      {/* Right Panel */}
      <main className="flex-1 overflow-y-auto p-8">
        <BlogDetail blogId={selectedId} />
      </main>
    </div>
  );
}
