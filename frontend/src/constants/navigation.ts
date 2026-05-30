import {
  LayoutDashboard,
  Wallet,
  Receipt,
  Landmark,
  Target,
  TrendingUp,
  Bot,
  Settings,
} from "lucide-react";

export const NAV_ITEMS = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Income & Tax",
    href: "/income-tax",
    icon: Wallet,
  },
  {
    title: "Expense Planner",
    href: "/expense-planner",
    icon: Receipt,
  },
  {
    title: "EMI Planner",
    href: "/emi-planner",
    icon: Landmark,
  },
  {
    title: "Goal Planner",
    href: "/goal-planner",
    icon: Target,
  },
  {
    title: "Stock Analysis",
    href: "/stock-analysis",
    icon: TrendingUp,
  },
  {
    title: "AI Advisor",
    href: "/ai-advisor",
    icon: Bot,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];