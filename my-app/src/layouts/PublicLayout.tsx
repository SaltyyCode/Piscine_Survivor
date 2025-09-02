import Header from "@/components/public/Layout/Header";
import Footer from "@/components/public/Layout/Footer";
import { Outlet } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

export default function PublicLayout() {
  return (
    <div className="min-h-dvh flex flex-col transition-colors bg-gradient-to-br from-lilac-50 via-rose-50 to-rose-100 text-slate-900 dark:from-black dark:via-[#0d0d13] dark:to-[#141422] dark:text-white">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <ThemeToggle />
    </div>
  );
}