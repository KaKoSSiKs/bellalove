import { useState } from 'react'
import { motion } from 'framer-motion'

export function Section11Promises() {
  const [signed, setSigned] = useState(false)

  return (
    <section className="section-base overflow-hidden flex flex-col py-6 bg-paper" data-section="20">
      <div className="grid-12 w-full max-w-screen-sm mx-auto px-6 h-full flex flex-col">
        {/* Header */}
        <div className="col-span-12 text-center border-b-2 border-text-black pb-3 mb-3">
          <h2 className="font-display font-bold text-text-black text-xl uppercase tracking-wider">
            LOVE AGREEMENT
          </h2>
          <p className="font-serif text-[10px] text-text-darkgray mt-1">
            № 01/2026 • Москва • 08 Марта
          </p>
        </div>

        {/* Content */}
        <div className="col-span-12 flex-1 overflow-y-auto pr-2 space-y-4 font-serif text-xs text-text-black leading-relaxed">
          <div>
            <h3 className="font-bold uppercase text-[10px] mb-1">1. Предмет договора</h3>
            <p>
              Настоящий Договор заключен между <strong>Ярославом</strong> (Сторона А) и <strong>Беллой</strong> (Сторона Б).
              Предметом является взаимный обмен любовью, заботой, мемами и вкусной едой.
            </p>
          </div>

          <div>
            <h3 className="font-bold uppercase text-[10px] mb-1">2. Обязательства Стороны А</h3>
            <ul className="list-disc pl-4 space-y-1">
              <li>Сторона А обязуется всегда поддерживать безумные идеи Стороны Б.</li>
              <li>Сторона А предоставляет безлимитные обнимашки по первому требованию.</li>
              <li>Сторона А обязуется регулярно восхищаться красотой Стороны Б (в том числе в домашних трениках).</li>
              <li>Сторона А гарантирует своевременную поставку кофе и вкусняшек.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase text-[10px] mb-1">3. Ответственность сторон</h3>
            <p>
              В случае неисполнения обязательств (например, забыл сказать «Доброе утро»), Сторона А подвергается штрафу в виде внепланового похода в <strong>«Золотое Яблоко»</strong>, <strong>Cozy Home</strong> и иные торговые пространства по выбору Стороны Б.
            </p>
          </div>

          <div>
            <h3 className="font-bold uppercase text-[10px] mb-1">4. Форс-мажор</h3>
            <p>
              Внешние факторы (работа, расстояние, ретроградный Меркурий) не отменяют обязательства любить друг друга и кидать смешные рилсы.
            </p>
          </div>
        </div>

        {/* Signatures */}
        <div className="col-span-12 mt-3 pt-3 border-t-2 border-text-black">
          <div className="flex justify-between gap-8">
            <div className="flex-1">
              <p className="font-sans text-[8px] uppercase tracking-widest mb-3">Сторона А (Ярослав)</p>
              <div className="h-10 border-b border-text-black/50 relative">
                 <span className="absolute bottom-1 left-0 font-hand text-xl text-text-black">Yaroslav</span>
              </div>
            </div>
            <div className="flex-1 relative">
              <p className="font-sans text-[8px] uppercase tracking-widest mb-3">Сторона Б (Белла)</p>
              <button
                onClick={() => setSigned(true)}
                className="w-full h-10 border-b border-text-black/50 text-left relative hover:bg-gray-50 transition-colors"
              >
                {signed ? (
                  <motion.span
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    className="absolute bottom-1 left-0 font-hand text-2xl text-accent-burgundy"
                  >
                    Bella
                  </motion.span>
                ) : (
                  <span className="absolute bottom-2 text-[10px] text-gray-400">Нажми для подписи</span>
                )}
              </button>
              
              {/* Seal */}
              <div className="absolute -right-2 -bottom-4 pointer-events-none">
                 <div className="w-16 h-16 rounded-full border-2 border-accent-burgundy opacity-40 flex items-center justify-center rotate-[-15deg]">
                   <div className="text-[6px] text-accent-burgundy text-center uppercase leading-tight font-bold">
                     Official<br/>Love<br/>Seal
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
