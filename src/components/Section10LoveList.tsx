import { motion } from 'framer-motion'

const QUOTES = [
  'Любовь — это когда она ест, а сладко тебе.',
  'Счастье — это засыпать и просыпаться с мыслью о тебе.',
  'Ты — причина моей улыбки каждый день.',
  'В твоих глазах я вижу весь мир.',
  'Любить тебя — это самое легкое и приятное дело на свете.',
]

export function Section10LoveList() {
  return (
    <section className="section-base overflow-hidden flex flex-col justify-between py-12 relative" data-section="19">
      {/* Background Numbers - Fixed position to avoid layout shift */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex flex-col justify-between py-10 opacity-[0.04] z-0">
        {['01', '02', '03', '04', '05'].map((n) => (
          <span
            key={n}
            className="font-display font-bold text-text-black text-[12vh] leading-none text-right pr-4"
          >
            {n}
          </span>
        ))}
      </div>

      <div className="grid-12 w-full max-w-screen-sm mx-auto px-6 relative z-10 h-full flex flex-col">
        <motion.h2
          className="col-span-12 font-display font-bold text-accent-burgundy text-3xl sm:text-4xl leading-tight mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Что я понял про любовь
        </motion.h2>

        <div className="col-span-12 flex-1 flex flex-col justify-between min-h-0 py-4">
          {QUOTES.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l-2 border-text-black pl-6 py-2"
            >
              <p className="font-serif italic text-text-black leading-relaxed text-[clamp(1.1rem,3.5vw,1.8rem)]">
                «{q}»
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="col-span-12 border-t border-text-black pt-8 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-display font-bold text-text-black text-[clamp(1.5rem,5vw,2.2rem)] leading-tight text-center">
            И главное — с тобой я хочу быть лучшей версией себя.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
