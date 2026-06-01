"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.2,
      }}
      className="bg-zinc-950 border border-zinc-800 rounded-xl p-6"
    >
      <p className="text-zinc-400 text-sm">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2">
        {value}
      </h3>
    </motion.div>
  );
}