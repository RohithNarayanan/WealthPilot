import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold">
            Welcome Back, Rohith 👋
          </h1>

          <p className="text-zinc-400 mt-2">
            Track your wealth, investments and financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <StatCard
            title="Net Worth"
            value="₹12,50,000"
          />

          <StatCard
            title="Income"
            value="₹85,000"
          />

          <StatCard
            title="Expenses"
            value="₹32,000"
          />

          <StatCard
            title="Wealth Score"
            value="82"
          />

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 h-[400px]">
            Net Worth Chart
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 h-[400px]">
            Asset Allocation
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}