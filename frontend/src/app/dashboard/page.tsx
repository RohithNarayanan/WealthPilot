import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import WealthScore from "@/components/dashboard/WealthScore";
import GoalProgress from "@/components/dashboard/GoalProgress";
import RecentTransactions from "@/components/dashboard/RecentTransactions";

import NetWorthChart from "@/components/charts/NetWorthChart";
import IncomeExpenseChart from "@/components/charts/IncomeExpenseChart";
import AssetAllocationChart from "@/components/charts/AssetAllocationChart";

export default function DashboardPage() {
return ( <DashboardLayout> <div className="space-y-8">
    {/* Welcome Section */}
    <div>
      <h1 className="text-4xl font-bold">
        Welcome Back, Rohith 👋
      </h1>

      <p className="text-zinc-400 mt-2">
        Track your wealth, investments and financial goals.
      </p>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatCard
        title="Net Worth"
        value="₹12,50,000"
      />

      <StatCard
        title="Monthly Income"
        value="₹85,000"
      />

      <StatCard
        title="Monthly Expenses"
        value="₹32,000"
      />

      <StatCard
        title="Wealth Score"
        value="82"
      />
    </div>

    {/* Net Worth + Wealth Score */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          Net Worth Trend
        </h2>

        <NetWorthChart />
      </div>

      <WealthScore />
    </div>

    {/* Income vs Expense */}
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        Income vs Expenses
      </h2>

      <IncomeExpenseChart />
    </div>

    {/* Bottom Section */}
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

      {/* Asset Allocation */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          Asset Allocation
        </h2>

        <AssetAllocationChart />
      </div>

      {/* Goals */}
      <GoalProgress />

      {/* Transactions */}
      <RecentTransactions />

    </div>

  </div>
</DashboardLayout>
);
}
