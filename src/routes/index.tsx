import { Routes, Route, Navigate } from "react-router-dom";
import BlogPage from "../features/blogs/pages/BlogPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/blogs" replace />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/blogs/:id" element={<BlogPage />} />
    </Routes>
  );
}
