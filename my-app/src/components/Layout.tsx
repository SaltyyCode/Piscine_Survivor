import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br from-lilac-50 via-rose-50 to-rose-100
        dark:from-black dark:via-[#0d0d13] dark:to-[#141422]
        transition-colors
      "
    >
      <Outlet />
    </div>
  );
}
