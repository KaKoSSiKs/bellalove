import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import type { Reason } from '../data/reasons'

interface ReasonsBlockProps {
  blockIndex: number
  reasons: Reason[]
  sectionIndex: number
  startId?: number
}

// --- Helper Components ---

function Photo({ 
  src, 
  className = '', 
  isActive = false, 
  animateScale = false 
}: { 
  src: string; 
  className?: string; 
  isActive?: boolean;
  animateScale?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt=""
        className={`w-full h-full object-cover transition-all duration-700 ${isActive ? 'grayscale-0' : 'grayscale'}`}
        initial={animateScale ? { scale: 1.1 } : { scale: 1 }}
        whileInView={animateScale ? { scale: 1 } : { scale: 1 }}
        viewport={{ once: true }}
        transition={animateScale ? { duration: 10, ease: "linear" } : {}}
      />
    </div>
  )
}

function TextBlock({
  reason,
  displayId,
  className = '',
  onClick,
  isOpen,
  hintText = "Tap to read"
}: {
  reason: Reason
  displayId: number
  className?: string
  onClick?: () => void
  isOpen?: boolean
  hintText?: string
}) {
  return (
    <div
      className={`flex flex-col justify-center px-6 py-4 cursor-pointer transition-colors ${className}`}
      onClick={onClick}
    >
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-sans text-xs text-text-darkgray/60 font-medium">
          {String(displayId).padStart(2, '0')}
        </span>
        <h3 className="font-display font-bold text-accent-burgundy text-xl leading-tight">
          {reason.title}
        </h3>
      </div>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.p
            key="text"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="font-sans text-sm text-text-darkgray leading-relaxed overflow-hidden"
          >
            {reason.text}
          </motion.p>
        ) : (
          <motion.p
            key="hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-sans text-[10px] text-accent-burgundy/60 uppercase tracking-widest mt-2"
          >
            {hintText}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

// --- Block Implementations ---

// Block_Tap: Standard alternating layout with Tap to reveal (Used for 0, 1, 3, 4, 5)
function Block_Tap({ reasons, sectionIndex, startId = 1, hintText = "Tap to read" }: { reasons: Reason[]; sectionIndex: number; startId?: number; hintText?: string }) {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="section-base overflow-hidden flex flex-col relative" data-section={sectionIndex}>
      {reasons.map((r, i) => {
        const isEven = i % 2 === 0
        const displayId = startId + i
        const isOpen = openId === r.id
        // Apply zoom effect to 2nd and 4th items (indices 1 and 3)
        const animateScale = i === 1 || i === 3

        return (
          <div key={r.id} className="flex-1 flex min-h-0 border-b border-gray-divider last:border-0">
            {isEven ? (
              <>
                <div className="w-[45%] h-full">
                  <Photo src={r.image || ''} className="h-full" isActive={isOpen} animateScale={animateScale} />
                </div>
                <div className="flex-1 h-full bg-paper">
                  <TextBlock
                    reason={r}
                    displayId={displayId}
                    className="h-full hover:bg-gray-50"
                    isOpen={isOpen}
                    onClick={() => setOpenId(isOpen ? null : r.id)}
                    hintText={hintText}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex-1 h-full bg-paper">
                  <TextBlock
                    reason={r}
                    displayId={displayId}
                    className="h-full hover:bg-gray-50 text-right items-end"
                    isOpen={isOpen}
                    onClick={() => setOpenId(isOpen ? null : r.id)}
                    hintText={hintText}
                  />
                </div>
                <div className="w-[45%] h-full">
                  <Photo src={r.image || ''} className="h-full" isActive={isOpen} animateScale={animateScale} />
                </div>
              </>
            )}
          </div>
        )
      })}
    </section>
  )
}

// Block 2: Press & Hold to reveal (Modified: Text above title, Color reveal)
function Block2({ reasons, sectionIndex, startId = 1 }: { reasons: Reason[]; sectionIndex: number; startId?: number }) {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section className="section-base overflow-hidden flex flex-col" data-section={sectionIndex}>
      {reasons.map((r, i) => {
        const displayId = startId + i
        const isActive = activeId === r.id
        const animateScale = i === 1 || i === 3

        return (
          <div 
            key={r.id} 
            className="flex-1 relative overflow-hidden flex select-none"
            onPointerDown={() => setActiveId(r.id)}
            onPointerUp={() => setActiveId(null)}
            onPointerLeave={() => setActiveId(null)}
          >
            <div className="w-1/2 h-full relative">
               <Photo src={r.image || ''} className="h-full" isActive={isActive} animateScale={animateScale} />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center p-6 bg-paper relative">
               <span className="absolute top-4 right-4 font-sans text-xs text-text-darkgray/40 font-medium">
                  {String(displayId).padStart(2, '0')}
               </span>
               
               {/* Text appears above title when active */}
               <AnimatePresence>
                 {isActive && (
                   <motion.p
                     initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                     animate={{ opacity: 1, height: 'auto', marginBottom: 8 }}
                     exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                     className="text-text-darkgray text-sm font-sans leading-relaxed overflow-hidden"
                   >
                     {r.text}
                   </motion.p>
                 )}
               </AnimatePresence>

               <h3 className="font-display font-bold text-text-black text-xl leading-tight">{r.title}</h3>
               
               {!isActive && (
                 <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">Hold image</span>
               )}
            </div>
          </div>
        )
      })}
    </section>
  )
}

// --- Main Export ---

export function ReasonsBlock({ blockIndex, reasons, sectionIndex, startId = 1 }: ReasonsBlockProps) {
  switch (blockIndex) {
    case 0: return <Block_Tap reasons={reasons} sectionIndex={sectionIndex} startId={startId} hintText="Tap to read" />
    case 1: return <Block_Tap reasons={reasons} sectionIndex={sectionIndex} startId={startId} hintText="Tap to read" />
    case 2: return <Block2 reasons={reasons} sectionIndex={sectionIndex} startId={startId} />
    case 3: return <Block_Tap reasons={reasons} sectionIndex={sectionIndex} startId={startId} hintText="Tap to read" /> // Switched to Tap as requested ("refine with tap")
    case 4: return <Block_Tap reasons={reasons} sectionIndex={sectionIndex} startId={startId} hintText="Tap to read" />
    case 5: return <Block_Tap reasons={reasons} sectionIndex={sectionIndex} startId={startId} hintText="Tap to expand" />
    default: return null
  }
}
