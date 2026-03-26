"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ password })
    });

    if (!res.ok) {
      setError("Неверный пароль");
      return;
    }

    router.push("/admin/requests");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm rounded-2xl border p-6 shadow-sm bg-white"
      >
        <h1 className="text-2xl font-semibold mb-4 text-black">
          Вход в админку
        </h1>

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border px-4 py-3 mb-3 text-black"
          required
        />

        {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-lg bg-black text-white py-3"
        >
          Войти
        </button>
      </form>
    </main>
  );
}
