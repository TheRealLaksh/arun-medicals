import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return true; // Force dark mode as default
    }
    return true; 
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-1.5 rounded-full glass text-xs font-bold cursor-pointer hover:scale-105 transition-transform border border-gray-200 dark:border-slate-700 shadow-sm flex items-center gap-1 z-50"
      aria-label="Toggle Theme"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}