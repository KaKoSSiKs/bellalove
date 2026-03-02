import { motion } from 'framer-motion'

const FINAL_PHOTO = '/photos/cover/2.jpg'

export function Section13Final() {
  return (
    <section className="section-base overflow-hidden flex flex-col justify-between py-8 bg-paper" data-section="22">
      <div className="grid-12 w-full max-w-screen-sm mx-auto px-6 h-full flex flex-col">
        
        {/* Photo */}
        <motion.div 
          className="col-span-12 h-[55vh] relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={FINAL_PHOTO}
            alt=""
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        {/* Letter */}
        <div className="col-span-12 flex-1 flex flex-col justify-center mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <p className="font-sans text-text-darkgray text-sm leading-relaxed">
              Дорогая Bella,
            </p>
            <p className="font-sans text-text-darkgray text-sm leading-relaxed">
              Этот выпуск — о том, как случайно пересекшиеся пути могут стать началом чего-то по-настоящему важного. Ты привнесла в мой мир удивительную легкость и тепло.
            </p>
            <p className="font-sans text-text-darkgray text-sm leading-relaxed">
              Спасибо тебе за каждую улыбку, за твою искренность и за то, что ты делаешь этот мир прекраснее просто тем, что ты есть.
            </p>
          </motion.div>
        </div>

        {/* Signature */}
        <div className="col-span-12 mt-auto pt-4 border-t border-gray-divider">
          <p className="font-sans text-[10px] text-text-darkgray uppercase tracking-widest text-right">
            Твой айтишник • Mart 2026
          </p>
        </div>
      </div>
    </section>
  )
}
