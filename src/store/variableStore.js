import { create } from "zustand";

export const useVariableStore = create((set) => ({
    variable: {
        appName: "AcademiaConnect",
        cdnURL: "",
    },

    setVariable: (key, value) => set((state) => ({
            variable: {
                ...state.variable,
                [key]: value,
            },
        })),
}));