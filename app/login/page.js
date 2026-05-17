"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // LOGIN SEDERHANA
    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {
      document.cookie = "token=admin123; path=/";

      alert("Login berhasil!");

      router.push("/dashboard");
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded-2xl w-full max-w-md border border-gray-700"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login Admin
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-gray-800 border border-gray-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-800 border border-gray-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

        <div className="mt-4 text-sm text-gray-400">
          <p>Email: admin@gmail.com</p>
          <p>Password: 123456</p>
        </div>
      </form>
    </div>
  );
}