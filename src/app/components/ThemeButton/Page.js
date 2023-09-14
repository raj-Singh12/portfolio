"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const ThemeButton = () => {
  const {resolvedTheme, setTheme} = useTheme()

  return (
    <button
      type="button"
      className="flex items-center justify-center rounded-lg p-2 transition-transform"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-5 w-5 " />
      ) : (
        <MoonIcon className="h-5 w-5 " />
      )}
    </button>
  );
};
export default ThemeButton;
