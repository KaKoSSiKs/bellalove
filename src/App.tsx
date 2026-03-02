import { useRef } from 'react'
import { Section01Cover } from './components/Section01Cover'
import { Section02Timer } from './components/Section02Timer'
import { Section04ReasonsCover } from './components/Section04ReasonsCover'
import { ReasonsBlock } from './components/ReasonsBlock'
import { ReasonsAccentSpread } from './components/ReasonsAccentSpread'
import { Section07Eyes } from './components/Section07Eyes'
import { Section08SpecialMoments } from './components/Section08SpecialMoments'
import { Section10LoveList } from './components/Section10LoveList'
import { Section11Promises } from './components/Section11Promises'
import { Section14Quiet } from './components/Section14Quiet'
import { Section13Final } from './components/Section13Final'
import { useMusic } from './hooks/useMusic'
import { REASONS } from './data/reasons'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Initialize music (single track, no switching)
  useMusic()

  const scrollToReasons = () => {
    const el = document.querySelector('[data-section="2"]')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen max-w-screen-sm mx-auto snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
      style={{ scrollBehavior: 'smooth' }}
    >
      <Section01Cover />
      <Section02Timer />
      <Section04ReasonsCover onScrollToReasons={scrollToReasons} />

      {/* Interleaved Reasons Blocks and Accent Spreads (Sequential 1-35) */}
      
      {/* Block 0 (1-5) */}
      <ReasonsBlock
        blockIndex={0}
        reasons={REASONS.slice(0, 5)}
        sectionIndex={3}
        startId={1}
      />
      {/* Accent 0 (6) */}
      <ReasonsAccentSpread
        reason={REASONS[5]}
        sectionIndex={4}
        displayId={6}
      />

      {/* Block 1 (7-11) */}
      <ReasonsBlock
        blockIndex={1}
        reasons={REASONS.slice(6, 11)}
        sectionIndex={5}
        startId={7}
      />
      {/* Accent 1 (12) */}
      <ReasonsAccentSpread
        reason={REASONS[11]}
        sectionIndex={6}
        displayId={12}
      />

      {/* Block 2 (13-17) */}
      <ReasonsBlock
        blockIndex={2}
        reasons={REASONS.slice(12, 17)}
        sectionIndex={7}
        startId={13}
      />
      {/* Accent 2 (18) */}
      <ReasonsAccentSpread
        reason={REASONS[17]}
        sectionIndex={8}
        displayId={18}
      />

      {/* Block 3 (19-23) */}
      <ReasonsBlock
        blockIndex={3}
        reasons={REASONS.slice(18, 23)}
        sectionIndex={9}
        startId={19}
      />
      {/* Accent 3 (24) */}
      <ReasonsAccentSpread
        reason={REASONS[23]}
        sectionIndex={10}
        displayId={24}
      />

      {/* Block 4 (25-29) */}
      <ReasonsBlock
        blockIndex={4}
        reasons={REASONS.slice(24, 29)}
        sectionIndex={11}
        startId={25}
      />
      {/* Accent 4 (30) */}
      <ReasonsAccentSpread
        reason={REASONS[29]}
        sectionIndex={12}
        displayId={30}
      />

      {/* Block 5 (31-35) */}
      <ReasonsBlock
        blockIndex={5}
        reasons={REASONS.slice(30, 35)}
        sectionIndex={13}
        startId={31}
      />

      <Section07Eyes />
      <Section08SpecialMoments />
      <Section10LoveList />
      <Section11Promises />
      <Section14Quiet />
      <Section13Final />
    </div>
  )
}

export default App
