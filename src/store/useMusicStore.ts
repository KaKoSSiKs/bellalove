import { create } from 'zustand'

export interface MusicState {
  currentTrackIndex: number
  isPlaying: boolean
  volume: number
  setTrack: (index: number) => void
  setPlaying: (playing: boolean) => void
  setVolume: (v: number) => void
}

export const useMusicStore = create<MusicState>((set) => ({
  currentTrackIndex: 0,
  isPlaying: true,
  volume: 1,
  setTrack: (index) => set({ currentTrackIndex: index }),
  setPlaying: (playing) => set({ isPlaying: playing }),
  setVolume: (v) => set({ volume: Math.max(0, Math.min(1, v)) }),
}))
