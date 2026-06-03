export default function WealthScore() {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">
        Wealth Score
      </h2>

      <div className="flex items-center justify-center">
        <div
          className="
            w-40
            h-40
            rounded-full
            border-8
            border-emerald-500
            flex
            items-center
            justify-center
          "
        >
          <span className="text-5xl font-bold">
            82
          </span>
        </div>
      </div>

      <p className="text-center text-zinc-400 mt-6">
        Excellent Financial Health
      </p>
    </div>
  );
}