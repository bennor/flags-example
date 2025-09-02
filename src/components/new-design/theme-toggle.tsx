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
      <div className="flex border-4 border-black dark:border-white bg-white dark:bg-black p-1">
        {themes.map((themeOption) => (
          <button
            type="button"
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value)}
            className={`p-2 border-2 font-black uppercase text-xs ${
              theme === themeOption.value
                ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black"
                : "border-transparent text-black dark:text-white hover:border-black dark:hover:border-white"
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
