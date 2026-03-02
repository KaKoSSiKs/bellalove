import { useEffect, useRef } from 'react'
import { Howl } from 'howler'
import { useMusicStore } from '../store/useMusicStore'
import { audioSrc } from '../data/audioSrc'

export function useMusic() {
  const { isPlaying, volume } = useMusicStore()
  const howlRef = useRef<Howl | null>(null)

  useEffect(() => {
    // Prevent duplicate initialization
    if (howlRef.current) return

    const src = audioSrc[0]
    if (!src) return

    const howl = new Howl({
      src: [src],
      html5: true,
      loop: true,
      volume: volume,
      autoplay: true,
      onplayerror: function() {
        howl.once('unlock', function() {
          howl.play()
        })
      }
    })

    howlRef.current = howl

    // Robust unlock handler
    const unlock = () => {
      if (howlRef.current && !howlRef.current.playing()) {
        howlRef.current.play()
      }
    }

    document.addEventListener('click', unlock)
    document.addEventListener('touchstart', unlock)
    document.addEventListener('keydown', unlock)

    return () => {
      document.removeEventListener('click', unlock)
      document.removeEventListener('touchstart', unlock)
      document.removeEventListener('keydown', unlock)
      howl.unload()
    }
  }, [])

  // Sync volume
  useEffect(() => {
    if (howlRef.current) {
      howlRef.current.volume(volume)
    }
  }, [volume])

  // Sync play/pause
  useEffect(() => {
    if (!howlRef.current) return
    if (isPlaying) {
      if (!howlRef.current.playing()) howlRef.current.play()
    } else {
      howlRef.current.pause()
    }
  }, [isPlaying])
}
