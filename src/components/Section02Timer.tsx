import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const START_DATE = new Date('2025-03-02T00:00:00')

function useElapsed() {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const tick = () => setSeconds(Math.floor((Date.now() - START_DATE.getTime()) / 1000))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  }
}

function AnimatedNumber({ value }: { value: number }) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={value}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="tabular-nums inline-block"
      >
        {value}
      </motion.span>
    </AnimatePresence>
  )
}

function TimeBlock({
  value,
  label,
  className = '',
}: {
  value: number
  label: string
  className?: string
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="font-display font-bold text-text-black tabular-nums">
        <AnimatedNumber value={value} />
      </span>
      <span className="font-sans text-[10px] uppercase tracking-widest text-text-darkgray mt-1">
        {label}
      </span>
    </div>
  )
}

export function Section02Timer() {
  const { days, hours, minutes, seconds } = useElapsed()

  return (
    <section className="section-base flex flex-col justify-between py-6" data-section="1">
      <div className="grid-12 w-full max-w-screen-sm mx-auto px-4 h-full">
        <motion.div
          className="col-span-12 flex justify-center items-start pt-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-xs uppercase tracking-widest text-text-darkgray border-b border-text-black pb-2">
            С момента нашей первой встречи прошло
          </p>
        </motion.div>

        <div className="col-span-12 flex justify-center items-center flex-1">
          <div className="flex flex-col items-start border-l-2 border-text-black pl-8 py-4 h-full justify-around max-h-[70vh]">
            <TimeBlock value={days} label="Дней" className="text-[clamp(4rem,18vw,8rem)] leading-none" />
            <div className="w-12 h-px bg-gray-divider" />
            <TimeBlock value={hours} label="Часов" className="text-[clamp(3rem,14vw,6rem)] leading-none" />
            <div className="w-12 h-px bg-gray-divider" />
            <TimeBlock value={minutes} label="Минут" className="text-[clamp(3rem,14vw,6rem)] leading-none" />
            <div className="w-12 h-px bg-gray-divider" />
            <TimeBlock value={seconds} label="Секунд" className="text-[clamp(3rem,14vw,6rem)] leading-none" />
          </div>
        </div>

        <motion.div
          className="col-span-12 flex justify-center items-end pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-lg text-text-black text-center">
            И каждый день я выбираю тебя снова
          </p>
        </motion.div>
      </div>
    </section>
  )
}
