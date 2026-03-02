import { motion } from 'framer-motion'

const COVER_IMAGE = '/photos/cover/1.jpg'

export function Section01Cover() {
  return (
    <section className="section-base overflow-hidden flex flex-col justify-between" data-section="0">
      <div className="grid-12 w-full max-w-screen-sm mx-auto px-4 h-full flex flex-col pt-2 pb-6">
        
        {/* Top Header - Minimal */}
        <div className="col-span-12 flex justify-between items-center mb-2 px-1">
          <p className="font-sans text-[10px] uppercase tracking-widest text-text-darkgray">
            Love Times
          </p>
          <p className="font-sans text-[10px] uppercase tracking-widest text-text-darkgray">
            No. 01
          </p>
        </div>

        {/* Main Photo - Dominant */}
        <motion.div
          className="col-span-12 h-[55vh] relative overflow-hidden mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={COVER_IMAGE}
            alt="Bella"
            className="w-full h-full object-cover grayscale absolute inset-0"
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.03 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 7, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </motion.div>

        {/* Bottom Title & Footer */}
        <div className="col-span-12">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          >
            <h1 className="text-center font-display font-bold text-accent-burgundy text-[clamp(4rem,18vw,7rem)] leading-[0.85] tracking-tight">
              ЛЮБИТЬ<br/>ТЕБЯ
            </h1>
          </motion.div>
          
          <div className="h-px bg-text-black mt-4 mb-2" />
          
          <motion.div
            className="flex justify-between items-center px-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-sans text-[10px] text-text-darkgray uppercase tracking-widest">
              March 2026
            </p>
            <p className="font-sans text-[10px] text-text-darkgray uppercase tracking-widest">
              Special Edition
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
