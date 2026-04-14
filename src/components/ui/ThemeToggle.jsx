import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Check local storage for theme preference, default to dark if not set
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default to dark mode
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
      className="px-3 py-1.5 rounded-full glass text-xs font-medium cursor-pointer hover:scale-105 transition-transform border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-1"
      aria-label="Toggle Theme"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}