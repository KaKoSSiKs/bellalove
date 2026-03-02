import { motion } from 'framer-motion'

export function Section14Quiet() {
  return (
    <section className="section-base overflow-hidden flex flex-col justify-center" data-section="21">
      <div className="grid-12 w-full max-w-screen-sm mx-auto px-8">
        <motion.p
          className="col-span-12 text-center font-display font-bold text-text-black leading-tight text-[clamp(1.75rem,6vw,3rem)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          И я всё ещё влюбляюсь в тебя
          <br />
          каждый день
        </motion.p>
      </div>
    </section>
  )
}
