'use client';

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between w-full border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
      <div>
        <h1 className="text-lg font-semibold">WealthPilot</h1>
        <p className="text-sm text-slate-500">Personal finance, investing, and AI insights.</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
          Notifications
        </button>
        <div className="flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2">
          <span className="h-9 w-9 rounded-full bg-slate-300" />
          <span className="text-sm font-medium">Rohith</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
