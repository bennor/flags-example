"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    {
      value: "system" as const,
      icon: <Monitor size={16} />,
      label: "System",
    },
    {
      value: "light" as const,
      icon: <Sun size={16} />,
      label: "Light",
    },
    {
      value: "dark" as const,
      icon: <Moon size={16} />,
      label: "Dark",
    },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-1">
        {themes.map((themeOption) => (
          <button
            type="button"
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value)}
            className={`p-2 rounded-md transition-colors ${
              theme === themeOption.value
                ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-750"
            }`}
            title={themeOption.label}
          >
            {themeOption.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
