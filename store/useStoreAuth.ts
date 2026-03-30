import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
    token: string | null;
    setToken: (newToken: string) => void;
    clearToken: () => void;
}

const useStoreAuth = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            setToken: (newToken: string) => {
                // localStorage.setItem("token", newToken);
                set({ token: newToken });
            },
            clearToken: () => {
                // localStorage.removeItem("token");
                set({ token: null });
            }
        }),
        {
            name: "auth",
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
)

export default useStoreAuth;