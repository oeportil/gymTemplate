import { create } from "zustand";

const useSignalStore = create<{ signal: boolean; setSignal: (signal: boolean) => void }>((set) => ({
    signal: false,
    setSignal: (signal: boolean) => set({ signal }),
}))

export default useSignalStore