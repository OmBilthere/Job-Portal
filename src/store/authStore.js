import { create } from "zustand";

export const useAuthStore = create((set) => ({
  loggedin: false,
  user: null,
  role: null,

  login: (user) =>
    set({
      loggedin: true,
      user,
      role: user?.role || null,
    }),

  logout: () =>
    set({
      loggedin: false,
      user: null,
      role: null,
    }),

  setUser: (user) =>
    set({
      loggedin: !!user,
      user: user || null,
      role: user?.role || null,
    }),
}));