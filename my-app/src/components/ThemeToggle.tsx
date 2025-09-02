import { useTheme } from "@/lib/useTheme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Basculer le thème"
      className="
        fixed bottom-4 right-4 p-3 rounded-full shadow-card
        bg-lilacDream-400 text-white
        hover:bg-lilacDream-300
        active:scale-95 transition
        dark:bg-pinkDream-300 dark:text-black dark:hover:bg-pinkDream-200
      "
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
