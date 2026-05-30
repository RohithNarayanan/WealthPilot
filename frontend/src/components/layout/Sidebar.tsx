'use client';

import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-72 min-h-screen bg-slate-950 text-white p-4">
      <div className="text-xl font-semibold mb-6">WealthPilot</div>
      <nav className="space-y-3">
        <a href="/dashboard" className="block rounded-lg px-3 py-2 hover:bg-slate-800">
          Dashboard
        </a>
        <a href="/income-tax" className="block rounded-lg px-3 py-2 hover:bg-slate-800">
          Income Tax
        </a>
        <a href="/expense-planner" className="block rounded-lg px-3 py-2 hover:bg-slate-800">
          Expense Planner
        </a>
        <a href="/emi-planner" className="block rounded-lg px-3 py-2 hover:bg-slate-800">
          EMI Planner
        </a>
        <a href="/goal-planner" className="block rounded-lg px-3 py-2 hover:bg-slate-800">
          Goal Planner
        </a>
        <a href="/stock-analysis" className="block rounded-lg px-3 py-2 hover:bg-slate-800">
          Stock Analysis
        </a>
        <a href="/ai-advisor" className="block rounded-lg px-3 py-2 hover:bg-slate-800">
          AI Advisor
        </a>
        <a href="/profile" className="block rounded-lg px-3 py-2 hover:bg-slate-800">
          Profile
        </a>
        <a href="/settings" className="block rounded-lg px-3 py-2 hover:bg-slate-800">
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
