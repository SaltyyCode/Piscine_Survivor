import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Layout from "@/components/Layout"; // Auth layout (gradient bg)
import PublicHubPage from "@/pages/PublicHubPage";
import PublicLayout from "@/layouts/PublicLayout";

export default function App() {
  return (
    <Routes>
      {/* Public marketing site */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<PublicHubPage />} />
        {/* Autres pages publiques éventuelles: startups, events, etc. */}
      </Route>

      {/* Auth pages */}
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<h1 className="p-10 text-center">404 Not Found</h1>} />
    </Routes>
  );
}
