"use client";

import { useState } from "react";
import { registerUser } from "@/services/authService";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const data =
        await registerUser(form);

      alert(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-950 p-8 rounded-xl w-[400px]"
      >
        <h1 className="text-3xl font-bold mb-6">
          Sign Up
        </h1>

        <input
          placeholder="Name"
          className="w-full p-3 mb-4 bg-zinc-800 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          className="w-full p-3 mb-4 bg-zinc-800 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 bg-zinc-800 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button
          className="
            w-full
            bg-emerald-500
            p-3
            rounded
          "
        >
          Register
        </button>
      </form>
    </div>
  );
}