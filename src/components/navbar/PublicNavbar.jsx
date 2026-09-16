"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import AuthDialog from "@/components/auth/AuthDialog";

export default function PublicNavbar({ onMenuClick }) {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
              A
            </div>

            <span className="text-xl font-semibold tracking-tight text-slate-900">
              Academia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setAuthOpen(true)}
              className="hidden rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 sm:block"
            >
              Login
            </button>

            <button
              type="button"
              onClick={onMenuClick}
              className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 md:hidden"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      <AuthDialog
        open={authOpen}
        onClose={() => setAuthOpen(false)}
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