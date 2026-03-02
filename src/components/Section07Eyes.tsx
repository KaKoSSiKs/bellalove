import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = [
  {
    type: 'intro',
    title: 'ТЫ МОИМИ ГЛАЗАМИ',
    hint: 'Свайпни вбок'
  },
  {
    type: 'content',
    img: '/photos/eyes/1.jpg',
    title: 'Хеллоу Китти',
    description: 'Котенок, который ничего не боится.',
  },
  {
    type: 'content',
    img: '/photos/eyes/2.jpg',
    title: 'Белочка',
    description: 'Всегда красивая, всегда милая.',
  },
  {
    type: 'content',
    img: '/photos/eyes/3.jpg',
    title: 'Тяжёлый люкс',
    description: 'Алло, бизнес? Да, да, деньги.',
  },
  {
    type: 'content',
    img: '/photos/eyes/4.jpg',
    title: 'Гномик',
    description: 'Моя любимая полторашка.',
  },
]

const DRAG_THRESHOLD = 50

export function Section07Eyes() {
  const [index, setIndex] = useState(0)
  const dragX = useRef(0)

  const go = (dir: number) => {
    setIndex((i) => Math.max(0, Math.min(SLIDES.length - 1, i + dir)))
  }

  const slide = SLIDES[index]
  const isIntro = slide.type === 'intro'
  const isEven = index % 2 === 0

  return (
    <section className="section-base overflow-hidden relative bg-paper" data-section="14">
      <motion.div
        className="absolute inset-0 flex flex-row h-full"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragStart={() => {
          dragX.current = 0
        }}
        onDrag={(_, info) => {
          dragX.current = info.offset.x
        }}
        onDragEnd={(_, info) => {
          if (info.offset.x < -DRAG_THRESHOLD) go(1)
          else if (info.offset.x > DRAG_THRESHOLD) go(-1)
        }}
        style={{ touchAction: 'pan-y' }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            className="w-full h-full flex flex-col min-w-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {isIntro ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <motion.h2 
                  className="font-display font-bold text-accent-burgundy text-4xl mb-8"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {slide.title}
                </motion.h2>
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="font-sans text-xs text-text-darkgray uppercase tracking-widest">
                    {slide.hint}
                  </span>
                  <svg className="w-6 h-6 text-accent-burgundy rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </div>
            ) : (
              // Content Slide: Split 50/50
              <div className="w-full h-full flex flex-col">
                {isEven ? (
                  // Even: Top Text / Bottom Photo
                  <>
                    <div className="h-1/2 flex flex-col justify-center px-8 bg-paper">
                      <h3 className="font-display font-bold text-accent-burgundy text-3xl mb-4">{slide.title}</h3>
                      <p className="font-sans text-text-darkgray text-lg leading-relaxed">{slide.description}</p>
                    </div>
                    <div className="h-1/2 overflow-hidden">
                      <img src={slide.img} alt="" className="w-full h-full object-cover grayscale" />
                    </div>
                  </>
                ) : (
                  // Odd: Top Photo / Bottom Text
                  <>
                    <div className="h-1/2 overflow-hidden">
                      <img src={slide.img} alt="" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="h-1/2 flex flex-col justify-center px-8 bg-paper">
                      <h3 className="font-display font-bold text-accent-burgundy text-3xl mb-4">{slide.title}</h3>
                      <p className="font-sans text-text-darkgray text-lg leading-relaxed">{slide.description}</p>
                    </div>
                  </>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
