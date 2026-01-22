import { useState } from "react";
import { useCreateBlog } from "../hooks/useBlog";
import type { CreateBlogPayload } from "../../types";

const initialState: CreateBlogPayload = {
  title: "",
  description: "",
  content: "",
  coverImage: "",
  category: [],
};

export default function CreateBlogForm() {
  const [form, setForm] = useState<CreateBlogPayload>(initialState);
  const [categoryInput, setCategoryInput] = useState("");

  const { mutate, isPending, isSuccess } = useCreateBlog();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCategory = () => {
    if (!categoryInput.trim()) return;

    setForm((prev) => ({
      ...prev,
      category: [...prev.category, categoryInput.trim()],
    }));

    setCategoryInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => {
        setForm(initialState);
        setCategoryInput("");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg border bg-white p-6"
    >
      <h2 className="text-lg font-semibold">Create New Blog</h2>

      {/* Title */}
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Blog title"
        className="w-full rounded border px-3 py-2 text-sm"
        required
      />

      {/* Description */}
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Short description"
        className="w-full rounded border px-3 py-2 text-sm"
        rows={2}
        required
      />

      {/* Cover Image */}
      <input
        name="coverImage"
        value={form.coverImage}
        onChange={handleChange}
        placeholder="Cover image URL"
        className="w-full rounded border px-3 py-2 text-sm"
        required
      />

      {/* Categories */}
      <div className="flex gap-2">
        <input
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
          placeholder="Add category"
          className="flex-1 rounded border px-3 py-2 text-sm"
        />
        <button
          type="button"
          onClick={handleAddCategory}
          className="rounded border px-3 py-2 text-sm hover:bg-gray-50"
        >
          Add
        </button>
      </div>

      {form.category.length > 0 && (
        <div className="flex flex-wrap gap-2 text-xs text-gray-600">
          {form.category.map((cat) => (
            <span
              key={cat}
              className="rounded bg-gray-100 px-2 py-1"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {/* Content */}
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Blog content"
        className="w-full rounded border px-3 py-2 text-sm"
        rows={6}
        required
      />

      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-black px-4 py-2 text-sm text-white disabled:opacity-50"
      >
        {isPending ? "Publishing..." : "Publish Blog"}
      </button>

      {isSuccess && (
        <p className="text-sm text-green-600">
          Blog published successfully 🎉
        </p>
      )}
    </form>
  );
}
