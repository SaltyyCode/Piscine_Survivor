import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
//import Dashboard from "./Dashboard";
//import Profile from "./Profile";
import Layout from "@/components/Layout";
import PublicHubPage from "@/pages/PublicHubPage";
import PublicLayout from "@/layouts/PublicLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      <Route path="/hub" element={<PublicHubPage />} />
      <Route path="*" element={<h1 className="p-10 text-center">404 Not Found</h1>} />
    </Routes>
  );
}
