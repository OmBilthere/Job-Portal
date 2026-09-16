
"use client";

import { Bell, Menu, User } from "lucide-react";
import LogoutButton from "@/components/auth/LogoutButton";

export default function AdminNavbar({ user, onMenuClick }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 h-16 border-b bg-white lg:left-64">
      <div className="flex h-full items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            <Menu size={22} />
          </button>

          <h1 className="text-lg font-semibold text-gray-900">
            Admin Panel
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100">
            <Bell size={20} />
          </button>

          <div className="group relative">
            <button className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-gray-100">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <User size={18} />
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold text-gray-900">
                  {user?.name || "Admin"}
                </p>
                <p className="text-xs text-gray-500">
                  {user?.role || "Administrator"}
                </p>
              </div>
            </button>

            <div className="invisible absolute right-0 top-12 w-48 rounded-xl border bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <button className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-50">
                Profile
              </button>

              <div className="my-1 border-t" />

              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
