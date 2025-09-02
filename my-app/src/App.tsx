import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import PublicHubPage from "@/pages/PublicHubPage";

export default function App() {
  return (
    <Routes>
      {/* Par défaut → /login */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/hub" element={<PublicHubPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1 className="p-10 text-center">404 Not Found</h1>} />
    </Routes>
  );
}
