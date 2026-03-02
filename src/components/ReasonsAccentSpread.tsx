import { motion } from 'framer-motion'
import type { Reason } from '../data/reasons'

interface ReasonsAccentSpreadProps {
  reason: Reason
  sectionIndex: number
  displayId?: number
}

const ACCENT_IMAGE = 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1200&fit=crop&seed=bella'

export function ReasonsAccentSpread({ reason, sectionIndex, displayId }: ReasonsAccentSpreadProps) {
  const idToDisplay = displayId !== undefined ? displayId : reason.id

  return (
    <section
      className="section-base overflow-hidden relative"
      data-section={sectionIndex}
    >
      {/* Fullscreen Background Photo - Slow Zoom Out */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1.0 }}
        viewport={{ once: true }}
        transition={{ duration: 12, ease: "linear" }}
      >
        <img
          src={reason.image || ACCENT_IMAGE}
          alt=""
          className="w-full h-full object-cover grayscale"
        />
      </motion.div>

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        aria-hidden
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 pb-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-sans text-white/60 text-xs uppercase tracking-widest mb-4 block">
            Reason No. {String(idToDisplay).padStart(2, '0')}
          </span>
          <h2 className="font-display font-bold text-white text-[clamp(2.5rem,8vw,4rem)] leading-[1.1] mb-6 drop-shadow-lg">
            {reason.title}
          </h2>
          <p className="font-sans text-white/90 text-base sm:text-lg max-w-md leading-relaxed drop-shadow-md">
            {reason.text}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
