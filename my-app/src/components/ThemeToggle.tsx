import { useThemeContext } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Basculer le thème"
      className="
        fixed bottom-4 right-4 p-3 rounded-full shadow-card
        bg-lilac-400 text-white hover:bg-lilac-300
        active:scale-95 transition
        dark:bg-rose-300 dark:text-black dark:hover:bg-rose-200
      "
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
