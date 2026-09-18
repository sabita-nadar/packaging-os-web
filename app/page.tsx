"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            
            {/* Packaging OS Icon */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
              <div className="absolute h-7 w-7 rotate-45 rounded-md border-[3px] border-white" />
              <div className="absolute h-3.5 w-3.5 rotate-45 rounded-sm bg-white" />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                Packaging<span className="text-blue-600">OS</span>
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Packaging Intelligence Platform
              </p>
            </div>

          </div>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">

          {/* Heading */}
          <div className="mb-7">
            <h2 className="text-2xl font-semibold text-slate-900">
              Welcome back
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Sign in to continue to Packaging OS
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => {
            e.preventDefault();
            router.push("/dashboard");
          }}>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Work email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
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
                  placeholder="Enter your password"
                  className="h-12 w-full rounded-xl border border-slate-300 px-4 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
              />

              <label
                htmlFor="remember"
                className="text-sm text-slate-600"
              >
                Remember me
              </label>
            </div>

            {/* Sign In */}
            <button
              type="submit"
              className="h-12 w-full rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:scale-[0.99]"
            >
              Sign in
            </button>

          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />

            <span className="text-xs font-medium text-slate-400">
              OR
            </span>

            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Microsoft Login */}
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <span className="grid grid-cols-2 gap-[2px]">
              <span className="h-[7px] w-[7px] bg-red-500" />
              <span className="h-[7px] w-[7px] bg-green-500" />
              <span className="h-[7px] w-[7px] bg-blue-500" />
              <span className="h-[7px] w-[7px] bg-yellow-500" />
            </span>

            Continue with Microsoft
          </button>

        </div>

        {/* Footer */}
        <div className="mt-7 text-center">

          <p className="text-sm text-slate-500">
            Don't have an account?{" "}
            <button
              type="button"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Request access
            </button>
          </p>

          <p className="mt-5 text-xs text-slate-400">
            © {new Date().getFullYear()} Packaging OS
          </p>

        </div>

      </div>
    </main>
  );
}

