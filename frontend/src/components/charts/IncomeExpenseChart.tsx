"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    income: 85000,
    expense: 35000,
  },
  {
    month: "Feb",
    income: 90000,
    expense: 42000,
  },
  {
    month: "Mar",
    income: 87000,
    expense: 39000,
  },
  {
    month: "Apr",
    income: 92000,
    expense: 45000,
  },
];

export default function IncomeExpenseChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="income" fill="#10b981" />
        <Bar dataKey="expense" fill="#ef4444" />
      </BarChart>
    </ResponsiveContainer>
  );
}