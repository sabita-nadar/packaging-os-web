"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Temporary login
    // Later this will connect to your authentication API.
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Login Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-lg font-bold text-white">
                P
              </span>
            </div>

            <div>
              <h1 className="text-lg font-bold text-gray-900">
                Packaging<span className="text-blue-600">OS</span>
              </h1>

              <p className="text-xs text-gray-400">
                Content Platform
              </p>
            </div>

          </div>

        </div>
      </header>

      {/* Login Area */}
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6 py-12">

        <div className="w-full max-w-lg">

          {/* Logo */}
          <div className="mb-8 text-center">

            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
                <span className="text-2xl font-bold text-white">
                  P
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Packaging<span className="text-blue-600">OS</span>
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              PACKAGING INTELLIGENCE PLATFORM
            </p>

          </div>

          {/* Login Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Welcome back
              </h3>

              <p className="mt-2 text-gray-500">
                Sign in to continue to Packaging OS
              </p>
            </div>

            <form onSubmit={handleLogin}>

              {/* Email */}
              <div className="mb-6">

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Work email
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="h-14 w-full rounded-xl border border-gray-300 px-4 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* Password */}
              <div className="mb-4">

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="relative">

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="h-14 w-full rounded-xl border border-gray-300 px-4 pr-20 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>

              {/* Remember */}
              <div className="mb-6 flex items-center gap-2">

                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600"
                >
                  Remember me
                </label>

              </div>

              {/* Sign In */}
              <button
                type="submit"
                className="h-14 w-full rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
              >
                Sign in
              </button>

            </form>

            {/* OR */}
            <div className="my-7 flex items-center gap-4">

              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-sm text-gray-400">
                OR
              </span>

              <div className="h-px flex-1 bg-gray-200" />

            </div>

            {/* Microsoft */}
            <button
              type="button"
              className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              <span className="text-lg">⊞</span>
              Continue with Microsoft
            </button>

            <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <button className="font-semibold text-blue-600 hover:text-blue-700">
                Request access
              </button>
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}