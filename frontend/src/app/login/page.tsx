"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/authService";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const data =
        await loginUser(form);

      localStorage.setItem(
        "token",
        data.token
      );

      router.push("/dashboard");
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
          Login
        </h1>

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
          Login
        </button>
      </form>
    </div>
  );
}