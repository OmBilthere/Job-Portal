"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function NavDrawer({ open, onClose }) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        aria-label="Close menu"
      />

      {/* Drawer */}
      <aside className="relative flex h-full w-[290px] max-w-[85vw] flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-5">
          <Link
            href="/account"
            onClick={onClose}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
              J
            </div>

            <span className="font-semibold text-slate-900">
              JobTracker
            </span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          </button>
        </div>

        {/* Profile */}
        <div className="border-b border-slate-200 px-5 py-4">
          <Link
            href="/profile"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-200 font-semibold text-slate-700">
              O
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">Om</p>
              <p className="text-xs text-slate-500">View profile</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Menu
          </p>

          <DrawerLink
            href="/dashboard"
            label="Dashboard"
            icon={<HomeIcon />}
            onClick={onClose}
          />

          <DrawerLink
            href="/jobs"
            label="Find Jobs"
            icon={<BriefcaseIcon />}
            onClick={onClose}
          />

          {/* Jobs submenu */}
          <div className="mb-1 ml-9 border-l border-slate-200 pl-3">
            <SubLink
              href="/jobs/saved"
              label="Saved Jobs"
              onClick={onClose}
            />

            <SubLink
              href="/applications"
              label="My Applications"
              onClick={onClose}
            />
          </div>

          <DrawerLink
            href="/companies"
            label="Companies"
            icon={<BuildingIcon />}
            onClick={onClose}
          />

          <DrawerLink
            href="/notifications"
            label="Notifications"
            icon={<BellIcon />}
            badge="3"
            onClick={onClose}
          />

          <p className="px-3 pb-2 pt-7 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Account
          </p>

          <DrawerLink
            href="/profile"
            label="Profile"
            icon={<UserIcon />}
            onClick={onClose}
          />

          <DrawerLink
            href="/settings"
            label="Settings"
            icon={<SettingsIcon />}
            onClick={onClose}
          />
        </nav>

        {/* Bottom */}
        <div className="border-t border-slate-200 p-3">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600"
          >
            <LogoutIcon />
            Logout
          </button>
        </div>
      </aside>
    </div>
  );
}

function DrawerLink({ href, label, icon, badge, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
    >
      <span className="text-slate-500">{icon}</span>

      <span className="flex-1">{label}</span>

      {badge && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-900 px-1.5 text-[10px] font-semibold text-white">
          {badge}
        </span>
      )}
    </Link>
  );
}

function SubLink({ href, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-md px-3 py-2 text-sm text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
    >
      {label}
    </Link>
  );
}

function HomeIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5M5 9v11h14V9M9 20v-6h6v6" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M4 7h16v13H4V7Zm0 4h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 11v2h4v-2" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V5l8-2v18M12 21h8V9l-8-2M8 7v.01M8 11v.01M8 15v.01M16 12v.01M16 16v.01M16 20v.01" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="3.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.4 15 .1.1a1.8 1.8 0 0 1-2.5 2.5l-.1-.1a1.8 1.8 0 0 0-3.1 1.3v.2a1.8 1.8 0 0 1-3.6 0v-.2a1.8 1.8 0 0 0-3.1-1.3l-.1.1a1.8 1.8 0 1 1-2.5-2.5l.1-.1A1.8 1.8 0 0 0 5.3 12a1.8 1.8 0 0 0-1.3-3.1h-.2a1.8 1.8 0 0 1 0-3.6H4A1.8 1.8 0 0 0 5.3 2.2l-.1-.1a1.8 1.8 0 1 1 2.5-2.5l.1.1A1.8 1.8 0 0 0 10.9-1.6V-2a1.8 1.8 0 0 1 3.6 0v.4a1.8 1.8 0 0 0 3.1 1.3l.1-.1a1.8 1.8 0 0 1 2.5 2.5l-.1.1A1.8 1.8 0 0 0 21.4 5h.2a1.8 1.8 0 0 1 0 3.6h-.2a1.8 1.8 0 0 0-1.3 3.1 1.8 1.8 0 0 0-.7 3.3Z" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 5H5v14h5M15 8l4 4-4 4M19 12H9" />
    </svg>
  );
}