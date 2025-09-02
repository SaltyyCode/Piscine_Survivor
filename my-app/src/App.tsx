import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import PublicHubPage from "@/pages/PublicHubPage";
import PublicLayout from "@/layouts/PublicLayout";

export default function App() {
  return (
     <Routes>
      {/* Site public : le hub est la page d'index "/" */}
      <Route element={<PublicLayout />}>
        <Route index element={<PublicHubPage />} />
      </Route>

      {/* Auth accessibles via le Header */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 404 → retour au hub */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
