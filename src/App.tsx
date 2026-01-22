import { Routes, Route, Navigate } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
