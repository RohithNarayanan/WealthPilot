const transactions = [
  {
    title: "Salary",
    amount: "+₹85,000",
  },
  {
    title: "Rent",
    amount: "-₹15,000",
  },
  {
    title: "Stocks",
    amount: "-₹10,000",
  },
  {
    title: "Freelance",
    amount: "+₹20,000",
  },
];

export default function RecentTransactions() {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">
        Recent Transactions
      </h2>

      <div className="space-y-4">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="
              flex
              justify-between
              border-b
              border-zinc-800
              pb-3
            "
          >
            <span>{tx.title}</span>

            <span
              className={
                tx.amount.startsWith("+")
                  ? "text-emerald-400"
                  : "text-red-400"
              }
            >
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}