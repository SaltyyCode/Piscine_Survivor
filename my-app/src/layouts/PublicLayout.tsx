import Header from "@/components/public/Layout/Header";
import Footer from "@/components/public/Layout/Footer";
import { Outlet } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

export default function PublicLayout() {
  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      {/* Global theme toggle */}
      <ThemeToggle />
    </div>
  );
}