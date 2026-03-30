import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    code: string;
    gymId: number;
    subscriptionId: number;
    createdAt: string;
    updatedAt: string;
}

interface UserState {
    user: User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
}

const useUserStore = create<UserState>()(
    persist((set) => ({
        user: null,
        setUser: (user: User) => set({ user }),
        clearUser: () => set({ user: null }),
    }), {
        name: "user",
        storage: createJSONStorage(() => AsyncStorage),
    }));

export default useUserStore;