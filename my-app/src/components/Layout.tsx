import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br from-lilacDream-50 via-pinkDream-50 to-pinkDream-100
        dark:from-[#0b0b12] dark:via-[#101020] dark:to-[#151528]
        transition-colors
      "
    >
      <Outlet />
    </div>
  );
}
