# Love Times

Цифровая газета о любви — специальный выпуск для Bella, март 2026.  
Мобильный portrait, свайп сверху вниз, 16 секций, 16 треков с кроссфейдом.

## Стек

- **Vite 7** + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Zustand**
- **Howler.js** — кроссфейд музыки (fade out 2000ms, fade in 1000ms), пауза при blur вкладки

## Запуск

```bash
npm install
npm run dev
```

Открой в браузере (лучше в мобильном режиме DevTools, portrait).

## Структура проекта

```
src/
  components/
    Section01Cover.tsx         # Обложка: фото, "ЛЮБИТЬ ТЕБЯ", подзаголовок
    Section02Timer.tsx         # Счётчик времени с первой встречи
    Section03Meeting.tsx       # Место знакомства (карта)
    Section04ReasonsCover.tsx  # 35 причин: поиск + подсказки → скролл к списку
    Section05ReasonsSpread.tsx # Развороты причин (5 страниц по 7 причин)
    Section06ReasonsFullBanner.tsx  # Полноэкранный бордовый блок (между стр. 1–2)
    Section07Eyes.tsx          # Ты, моими глазами (карточки)
    Section08Moments.tsx       # Моменты (masonry-коллаж)
    Section09Habits.tsx        # Привычки (6–8 карточек)
    Section10LoveList.tsx      # Что я понял про любовь (нумерованный список)
    Section11Promises.tsx      # Мои обещания + подпись + QR
    Section12Games.tsx         # 5 мини-игр (заглушки)
    Section13Final.tsx         # Финальная страница + письмо + QR
  store/
    useMusicStore.ts           # currentTrackIndex, isPlaying, volume
    useHeartsStore.ts          # heartsCount, unlockedLevels (для игр)
  hooks/
    useMusic.ts                # Howler.js: crossfade, loop, pause on blur
  data/
    audioSrc.ts                # 16 placeholder URL треков
    reasons.ts                 # 35 причин + подсказки поиска
  App.tsx
  main.tsx
  index.css
tailwind.config.ts             # Цвета: paper, text-black, accent-burgundy и др.
index.html                     # Шрифты: Playfair Display, Inter, Caveat
```

## Цвета (tailwind.config.ts)

- `bg-paper`: #faf8f5
- `text-black`: #111111
- `text-darkgray`: #2b2b2b
- `accent-burgundy`: #9c2a3f
- `gray-divider`: #e5e5e5

## Музыка

- 16 треков в `src/data/audioSrc.ts` — замени на свои URL или импорты
- Intersection Observer: при входе в секцию → fade out текущего 2000ms, fade in нового 1000ms
- Пауза при сворачивании вкладки (blur)

## 35 причин

Массив в `src/data/reasons.ts` — placeholder. Замени на свои формулировки.
