"use client";

import { useState } from "react";
import { login } from "@/app/actions/auth";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function AuthDialog({ open, onClose }) {
    const [mode, setMode] = useState("login");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const loginUser = useAuthStore((state) => state.login);
    const router = useRouter();

    if (!open) return null;

    async function handleLogin(e) {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const formData = new FormData(e.currentTarget);
        const result = await login(formData);

        setLoading(false);

        if (!result.success) {
            setMessage(result.message);
            return;
        }

        loginUser(result.user);
        onClose();

        if (result.user.role === "SuperAdmin") router.push("/admin");
        else if (result.user.role === "ChildAdmin") router.push("/child-admin");
        else if (result.user.role === "User") router.push("/account");
    }

    function handleDummySubmit(e) {
        e.preventDefault();
        setMessage(
            mode === "register"
                ? "Registration will be available soon."
                : "Password reset will be available soon."
        );
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
            <div className="relative w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                >
                    <X size={20} />
                </button>

                <div className="mb-7 text-center">
                    <h2 className="text-2xl font-bold text-gray-900">
                        {mode === "login"
                            ? "Welcome Back"
                            : mode === "register"
                                ? "Create Account"
                                : "Forgot Password"}
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        {mode === "login"
                            ? "Sign in to continue to your account"
                            : mode === "register"
                                ? "Create your account to get started"
                                : "Enter your email to reset your password"}
                    </p>
                </div>

                {mode === "login" && (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="you@example.com"
                                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                required
                                placeholder="••••••••"
                                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700 disabled:opacity-60"
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>
                )}

                {mode === "register" && (
                    <form onSubmit={handleDummySubmit} className="space-y-4">
                        <input
                            placeholder="Full Name"
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
                        />

                        <input
                            placeholder="Phone Number"
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
                        />

                        <button className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700">
                            Create Account
                        </button>
                    </form>
                )}

                {mode === "forgot" && (
                    <form onSubmit={handleDummySubmit} className="space-y-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
                        />

                        <button className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700">
                            Send Reset Link
                        </button>
                    </form>
                )}

                {message && (
                    <p className="mt-4 rounded-lg bg-gray-50 p-3 text-center text-sm text-gray-600">
                        {message}
                    </p>
                )}

                <div className="mt-6 flex justify-center gap-4 text-sm">
                    {mode !== "login" && (
                        <button
                            onClick={() => {
                                setMode("login");
                                setMessage("");
                            }}
                            className="font-medium text-indigo-600 hover:underline"
                        >
                            Login
                        </button>
                    )}

                    {mode === "login" && (
                        <>
                            <button
                                onClick={() => {
                                    setMode("register");
                                    setMessage("");
                                }}
                                className="font-medium text-indigo-600 hover:underline"
                            >
                                Register
                            </button>

                            <button
                                onClick={() => {
                                    setMode("forgot");
                                    setMessage("");
                                }}
                                className="font-medium text-indigo-600 hover:underline"
                            >
                                Forgot Password?
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}