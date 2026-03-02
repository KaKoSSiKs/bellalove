import { useEffect } from 'react'
import { Howl } from 'howler'
import { useMusicStore } from '../store/useMusicStore'
import { audioSrc } from '../data/audioSrc'

// Global singleton to prevent duplicate instances
let backgroundMusic: Howl | null = null

export function useMusic() {
  const { isPlaying, volume } = useMusicStore()

  useEffect(() => {
    // 1. Initialize if not exists
    if (!backgroundMusic) {
      const src = audioSrc[0]
      if (!src) return

      backgroundMusic = new Howl({
        src: [src],
        html5: true, // Required for large audio files to stream/buffer
        loop: true,
        volume: volume,
        autoplay: false,
        preload: true,
      })
    }

    // 2. Unlock handler for mobile (touchstart/click)
    const unlockAudio = () => {
      if (backgroundMusic && !backgroundMusic.playing() && useMusicStore.getState().isPlaying) {
        backgroundMusic.play()
      }
    }

    // 3. Attach listeners
    document.addEventListener('click', unlockAudio)
    document.addEventListener('touchstart', unlockAudio)
    document.addEventListener('keydown', unlockAudio)

    // 4. Initial play attempt
    if (isPlaying && backgroundMusic && !backgroundMusic.playing()) {
      backgroundMusic.play()
    }

    // Cleanup listeners only (keep music instance alive)
    return () => {
      document.removeEventListener('click', unlockAudio)
      document.removeEventListener('touchstart', unlockAudio)
      document.removeEventListener('keydown', unlockAudio)
    }
  }, [])

  // Sync volume changes
  useEffect(() => {
    if (backgroundMusic) {
      backgroundMusic.volume(volume)
    }
  }, [volume])

  // Sync play/pause state
  useEffect(() => {
    if (!backgroundMusic) return

    if (isPlaying) {
      if (!backgroundMusic.playing()) {
        backgroundMusic.play()
      }
    } else {
      backgroundMusic.pause()
    }
  }, [isPlaying])
}
