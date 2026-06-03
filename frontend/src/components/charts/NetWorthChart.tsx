"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 500000 },
  { month: "Feb", value: 550000 },
  { month: "Mar", value: 620000 },
  { month: "Apr", value: 700000 },
  { month: "May", value: 850000 },
  { month: "Jun", value: 1250000 },
];

export default function NetWorthChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#10b981"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}