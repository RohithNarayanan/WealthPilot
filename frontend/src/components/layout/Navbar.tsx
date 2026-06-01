"use client";

import { Menu } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";

export default function Navbar() {
  const { toggleSidebar } = useAppStore();

  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-6">

      <button
        onClick={toggleSidebar}
        className="p-2 rounded-lg hover:bg-zinc-800"
      >
        <Menu />
      </button>

      <div className="h-10 w-10 rounded-full bg-emerald-500" />
    </header>
  );
}