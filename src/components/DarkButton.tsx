"use client";

import { useDarkMode } from "@/hooks/useDarkModeContext";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

export default function DarkButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="rounded-lg border-2 border-solid border-transparent bg-background dark:bg-foreground text-foreground dark:text-background hover:border-background dark:hover:border-foreground hover:bg-foreground dark:hover:bg-background hover:text-background dark:hover:text-foreground block items-center justify-center text-3xl font-bold p-3.5 transition-colors duration-300 ease-in-out"
      aria-pressed={isDarkMode}
    >
      {/* Light Mode Icon */}
      <FaMoon className={`w-6 h-6 ${isDarkMode ? "hidden" : "block"}`} />
      {/* Dark Mode Icon */}
      <IoSunny className={`w-6 h-6 ${isDarkMode ? "block" : "hidden"}`} />
    </button>
  );
}
