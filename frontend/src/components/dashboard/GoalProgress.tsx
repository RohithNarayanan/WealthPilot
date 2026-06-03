export default function GoalProgress() {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">
        Financial Goals
      </h2>

      <div className="space-y-6">

        <div>
          <div className="flex justify-between mb-2">
            <span>Emergency Fund</span>
            <span>80%</span>
          </div>

          <div className="w-full bg-zinc-800 h-3 rounded-full">
            <div className="bg-emerald-500 h-3 rounded-full w-[80%]" />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>House Down Payment</span>
            <span>45%</span>
          </div>

          <div className="w-full bg-zinc-800 h-3 rounded-full">
            <div className="bg-blue-500 h-3 rounded-full w-[45%]" />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>Retirement Fund</span>
            <span>30%</span>
          </div>

          <div className="w-full bg-zinc-800 h-3 rounded-full">
            <div className="bg-amber-500 h-3 rounded-full w-[30%]" />
          </div>
        </div>

      </div>
    </div>
  );
}