import { useState } from 'react'
import { motion } from 'framer-motion'
import { REASON_HINTS } from '../data/reasons'

interface Section04ReasonsCoverProps {
  onScrollToReasons: () => void
}

export function Section04ReasonsCover({ onScrollToReasons }: Section04ReasonsCoverProps) {
  const [query, setQuery] = useState('Я люблю тебя за')

  const handleSelect = (hint: string) => {
    setQuery(`Я люблю тебя за ${hint}`)
    setTimeout(onScrollToReasons, 300)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onScrollToReasons()
  }

  return (
    <section className="section-base flex flex-col justify-center bg-paper" data-section="2">
      <div className="grid-12 w-full max-w-screen-sm mx-auto px-4 relative z-20">
        <motion.div
          className="col-span-12 flex flex-col items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-accent-burgundy text-2xl sm:text-3xl text-center">
            35 ПРИЧИН ЗА ЧТО Я ТЕБЯ ЛЮБЛЮ
          </h2>
        </motion.div>

        <div className="col-span-12 relative">
          <motion.div
            className="relative bg-white rounded-t-3xl shadow-xl border border-gray-200 border-b-0"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex items-center px-2 py-2 sm:px-4 sm:py-3">
               {/* Search Icon */}
               <div className="pl-2 pr-3 text-gray-400">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                 </svg>
               </div>

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 font-sans text-base sm:text-lg text-text-black outline-none placeholder-gray-400 bg-transparent"
                autoComplete="off"
              />

              {/* Clear button */}
              {query && (
                 <button
                   type="button"
                   onClick={() => setQuery('')}
                   className="p-2 text-gray-400 hover:text-gray-600"
                 >
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                   </svg>
                 </button>
              )}

              {/* Search Button */}
              <button
                type="submit"
                className="bg-accent-burgundy text-white px-4 sm:px-6 py-2 rounded-xl font-sans font-medium text-sm hover:bg-opacity-90 transition-colors ml-1"
              >
                Найти
              </button>
            </form>

            {/* Dropdown — всегда открыт */}
            <div className="border border-t-0 border-gray-200 rounded-b-3xl shadow-xl overflow-hidden bg-white">
              <div className="h-px bg-gray-100 mx-4" />
              <ul className="py-2">
                {REASON_HINTS.map((hint, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onMouseDown={() => handleSelect(hint)}
                      className="w-full flex items-center px-4 py-2 hover:bg-gray-50 text-left group transition-colors"
                    >
                      <div className="pl-2 pr-3 text-gray-400 group-hover:text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <span className="font-sans text-sm sm:text-base truncate pr-4">
                        <span className="text-gray-400">я люблю тебя за </span>
                        <span className="text-text-black font-medium">{hint}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="h-2" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
