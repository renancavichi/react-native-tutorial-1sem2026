import { create } from 'zustand'

export const useAuthStore = create((set) => ({
    user: null,
    token: null,
    isLogged: false,
    login: (user, token) => set({ user, token, isLogged: true }),
    logout: () => set({ user: null, token: null, isLogged: false })
}))