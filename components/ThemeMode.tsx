"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeMode() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative border rounded-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 text-primary-base transition-all duration-300 ease-in-out dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all duration-300 ease-in-out dark:scale-100 dark:rotate-0 text-gray-700 dark:text-white" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
