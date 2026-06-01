"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/navigation";
import { useAppStore } from "@/store/useAppStore";

export default function Sidebar() {
  const pathname = usePathname();

  const { sidebarOpen } = useAppStore();

  return (
    <aside
      className={`
        ${
          sidebarOpen ? "w-64" : "w-20"
        }
        h-screen
        bg-zinc-950
        border-r
        border-zinc-800
        transition-all
        duration-300
      `}
    >
      <div className="p-6">
        {sidebarOpen ? (
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            WealthPilot
          </h1>
        ) : (
          <h1 className="text-2xl font-bold text-emerald-400">
            W
          </h1>
        )}
      </div>

      <nav className="px-4">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex
                items-center
                gap-3
                p-3
                rounded-lg
                mb-2
                transition-all
                ${
                  pathname === item.href
                    ? "bg-amber-500 text-black"
                    : "text-zinc-300 hover:bg-zinc-800"
                }
              `}
            >
              <Icon size={20} />

              {sidebarOpen && (
                <span>
                  {item.title}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}