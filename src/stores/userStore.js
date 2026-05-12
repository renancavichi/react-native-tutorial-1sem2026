import { create } from 'zustand'

export const useUserStore = create((set) => ({
    users: [],
    userToEdit: {name: "", email: "", avatar: "", pass: ""},
    setUsers: (users) => set({ users }),
    addUser: (user) => set((state) => ({ users: [...state.users, user] })),
    updateUser: (updatedUser, id) => set((state) => ({
        users: state.users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user))
    })),
    setUserToEdit: (user) => set({ userToEdit: user })
}))