import { create } from 'zustand'

export interface HeartsState {
  heartsCount: number
  unlockedLevels: number[]
  addHearts: (n?: number) => void
  unlockLevel: (level: number) => void
  reset: () => void
}

export const useHeartsStore = create<HeartsState>((set) => ({
  heartsCount: 0,
  unlockedLevels: [],
  addHearts: (n = 1) => set((s) => ({ heartsCount: s.heartsCount + n })),
  unlockLevel: (level) =>
    set((s) => ({
      unlockedLevels: s.unlockedLevels.includes(level)
        ? s.unlockedLevels
        : [...s.unlockedLevels, level],
    })),
  reset: () => set({ heartsCount: 0, unlockedLevels: [] }),
}))
