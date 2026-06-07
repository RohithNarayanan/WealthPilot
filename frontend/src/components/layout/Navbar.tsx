"use client";

import { Menu, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

import { useAppStore } from "@/store/useAppStore";

export default function Navbar() {
  const { toggleSidebar } = useAppStore();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");

    router.push("/login");
  };

  return (
    <header
      className="
        h-16
        border-b
        border-zinc-800
        bg-zinc-950
        flex
        items-center
        justify-between
        px-6
      "
    >
      {/* Left Side */}
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-lg hover:bg-zinc-800"
      >
        <Menu />
      </button>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        <div className="text-right">
          <p className="text-sm font-medium">
            Rohith
          </p>

          <p className="text-xs text-zinc-400">
            Premium Member
          </p>
        </div>

        <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold">
          R
        </div>

        <button
          onClick={logout}
          className="
            p-2
            rounded-lg
            bg-red-500
            hover:bg-red-600
            transition
          "
        >
          <LogOut size={18} />
        </button>

      </div>
    </header>
  );
}