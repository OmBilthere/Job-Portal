"use client";

import Link from "next/link";
import { useState } from "react";
import NavDrawer from "./../navdrawer/CustomerDrawer";
import LogoutButton from "./../auth/LogoutButton";

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Left */}
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => setDrawerOpen(true)}
                            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 lg:hidden"
                            aria-label="Open menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                        <Link href="/account" className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
                                A
                            </div>

                            <span className="text-lg font-semibold tracking-tight text-slate-900">
                                Acedemia
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-1 lg:flex">
                        <NavLink href="/account">Dashboard</NavLink>
                        <NavLink href="/account/jobs">Jobs</NavLink>
                        <NavLink href="/account/companies">Companies</NavLink>
                        <NavLink href="/account/applications">Applications</NavLink>
                    </nav>

                    {/* Right */}
                    <div className="flex items-center gap-2">
                        <Link
                            href="/account/notifications"
                            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100"
                            aria-label="Notifications"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"
                                />
                            </svg>

                            <span className="absolute right-2.5 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
                        </Link>

                        {/* Profile */}
                        <div className="relative hidden sm:block">
                            <button
                                type="button"
                                onClick={() => setProfileOpen((prev) => !prev)}
                                className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-slate-100"
                            >
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
                                    O
                                </div>

                                <div className="hidden text-left xl:block">
                                    <p className="text-sm font-medium text-slate-800">
                                        Om
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        My Profile
                                    </p>
                                </div>

                                <svg
                                    className={`hidden h-4 w-4 text-slate-400 transition-transform xl:block ${
                                        profileOpen ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m6 9 6 6 6-6"
                                    />
                                </svg>
                            </button>

                            {profileOpen && (
                                <div className="absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                                    <Link
                                        href="/account/profile"
                                        onClick={() => setProfileOpen(false)}
                                        className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                                    >
                                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                                            <UserIcon />
                                        </span>

                                        <span>View Profile</span>
                                    </Link>

                                    <div className="border-t border-slate-100">
                                        <LogoutButton />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <NavDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
        </>
    );
}

function NavLink({ href, children }) {
    return (
        <Link
            href={href}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
        >
            {children}
        </Link>
    );
}

function UserIcon() {
    return (
        <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
        >
            <circle cx="12" cy="8" r="3.5" />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 20a7 7 0 0 1 14 0"
            />
        </svg>
    );
}