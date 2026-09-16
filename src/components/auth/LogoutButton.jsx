"use client";

import { useState } from "react";
import { logout } from "@/app/actions/auth";
import { useAuthStore } from "@/store/authStore";

export default function LogoutButton() {
  const logoutUser = useAuthStore((state) => state.logout);
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    if (loading) return;

    setLoading(true);

    try {
      const result = await logout();

      if (result.success) {
        logoutUser();
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Logout failed:", error);
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition group-hover:bg-red-100 group-hover:text-red-600">
        {loading ? (
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M21 12a9 9 0 0 1-9 9v-2a7 7 0 0 0 7-7h2Z"
            />
          </svg>
        ) : (
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 5H5v14h5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15 8 4 4-4 4"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 12H9"
            />
          </svg>
        )}
      </span>

      <span>{loading ? "Logging out..." : "Logout"}</span>
    </button>
  );
}