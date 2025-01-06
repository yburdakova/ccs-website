"use client";

import { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode, MdDevices } from "react-icons/md";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string>("system");
  const [systemTheme, setSystemTheme] = useState<string>("");

  useEffect(() => {
    if (theme === "system"){
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setSystemTheme(prefersDark ? "dark" : "light");
    }
    logTheme();
    applyTheme();
  }, [theme,systemTheme]);

  const logTheme = () => {
    if (theme === "system") {
      if (systemTheme){
        console.log(`Clicked system theme`);
        console.log(`Applying theme: ${systemTheme}`);
      }
    } else if (theme === "light") {
      console.log(`Clicked light theme`);
      console.log(`Applying theme: ${theme}`);
    } else if (theme === "dark") {
      console.log(`Clicked dark theme`);
      console.log(`Applying theme: ${theme}`);
    }
  };

  const applyTheme = () => {
    const root = document.documentElement;

    if (theme === "system") {
      if (systemTheme) {
        root.classList.remove("light", "dark");
        root.classList.add(systemTheme); // Добавляем только если systemTheme не пустое
        localStorage.setItem("theme", "system");
      }
    } else if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    } else if (theme === "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };


  return (
    <div className="relative flex items-center justify-around w-36 py-1 mx-2 rounded-full border border-gray-400 bg-background z-50">
      <div
        className={`absolute top-0 h-full w-[48px] border border-gray-400 rounded-full transition-transform duration-300 ease-in-out`}
        style={{
          transform:
          theme === "light"
          ? "translateX(-48px)"
          : theme === "system"
          ? "translateX(0)"
          : "translateX(48px)"
        }}
      ></div>
      <button
        className={`w-8 h-8 flex text-gray-400 items-center justify-center z-10 transition-transform duration-300 transform ${
          theme === "light" ? "" : "hover:scale-110"
        }`}
        onClick={() => setTheme("light")}
        aria-label="Light Theme"
      >
        <MdOutlineLightMode size={20} />
      </button>
      <button
        className={`w-8 h-8 flex text-gray-400 items-center justify-center z-10 transition-transform duration-300 transform ${
          theme === "system" ? "" : "hover:scale-110"
        }`}
        onClick={() => setTheme("system")}
        aria-label="System Theme"
      >
        <MdDevices size={20} />
      </button>
      <button
        className={`w-8 h-8 flex text-gray-400 items-center justify-center z-10 transition-transform duration-300 transform ${
          theme === "dark" ? "" : "hover:scale-110"
        }`}
        onClick={() => setTheme("dark")}
        aria-label="Dark Theme"
      >
        <MdOutlineDarkMode size={20} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
