export interface Reason {
  id: number
  title: string
  text: string
  image?: string
}

export const REASONS: Reason[] = [
  { id: 1, title: 'Твоя улыбка', text: 'За твою милую улыбку, от которой у меня сразу тает сердце', image: '/photos/reasons/1.jpg' },
  { id: 2, title: 'Твой смех', text: 'За то, как ты смеёшься над моими дурацкими шутками', image: '/photos/reasons/2.jpg' },
  { id: 3, title: 'Твоя забота', text: 'За то, как ты заботишься обо мне даже на расстоянии', image: '/photos/reasons/3.jpg' },
  { id: 4, title: 'Твои рилсы', text: 'За твои милые рилсы, которые ты присылаешь', image: '/photos/reasons/4.jpg' },
  { id: 5, title: 'Твои карие глаза', text: 'За твои теплые, милые карие глаза в которые можно смотреть вечно', image: '/photos/reasons/5.jpg' },
  { id: 6, title: 'Твоя поддержка', text: 'За то, как ты всегда поддерживаешь меня', image: '/photos/reasons/6.jpg' },
  { id: 7, title: 'Твои гримасы', text: 'За твои смешные гримасы в кружочках', image: '/photos/reasons/7.jpg' },
  { id: 8, title: 'Ты делаешь меня лучше', text: 'За то, как ты заставляешь меня становиться лучше', image: '/photos/reasons/8.jpg' },
  { id: 9, title: 'Твои длинные волосы', text: 'За твои длинные волосы, в которых хочется утонуть', image: '/photos/reasons/9.jpg' },
  { id: 10, title: 'Как ты готовишь', text: 'За то, как ты готовишь, пальчики оближешь (если не съешь)', image: '/photos/reasons/10.jpg' },
  { id: 11, title: 'Твоё смущение', text: 'За то, как ты мило смущаешься от комплиментов', image: '/photos/reasons/11.jpg' },
  { id: 12, title: 'Искренность и открытость', text: 'За твою искренность и открытость', image: '/photos/reasons/12.jpg' },
  { id: 13, title: 'Твои объятия', text: 'За твои объятия, которые лечат всё на свете', image: '/photos/reasons/13.jpg' },
  { id: 14, title: 'Как ты смотришь на меня', text: 'За то, как ты смотришь на меня', image: '/photos/reasons/14.jpg' },
  { id: 15, title: 'Молчание с тобой', text: 'За то, что с тобой даже молчание — это счастье', image: '/photos/reasons/15.jpg' },
  { id: 16, title: 'Твоя доброта', text: 'За твою доброту', image: '/photos/reasons/16.jpg' },
  { id: 17, title: 'Ты вдохновляешь', text: 'За то, как ты вдохновляешь на поступки и действия', image: '/photos/reasons/17.jpg' },
  { id: 18, title: 'Что ты просто есть', text: 'За то, что ты просто есть — и этого уже достаточно', image: '/photos/reasons/18.jpg' },
  { id: 19, title: 'Чувство юмора', text: 'За твое чувство юмора и легкость', image: '/photos/reasons/19.jpg' },
  { id: 20, title: 'Твой запах', text: 'За твой чарующий, уютный запах', image: '/photos/reasons/20.jpg' },
  { id: 21, title: 'Твой взгляд', text: 'За твою женственный, чуткий взгляд, внимательный к мелочам', image: '/photos/reasons/21.jpg' },
  { id: 22, title: 'Целеустремлённость', text: 'За твою целеустремленность и ответственность', image: '/photos/reasons/22.jpg' },
  { id: 23, title: 'Осторожность к словам', text: 'За твою осторожность к словам и настроению', image: '/photos/reasons/23.jpg' },
  { id: 24, title: 'Детские шалости', text: 'За твои детские шалости и баловство', image: '/photos/reasons/24.jpg' },
  { id: 25, title: 'Твои лапки', text: 'За твои нежные, мягкие, теплые лапки', image: '/photos/reasons/25.jpg' },
  { id: 26, title: 'Милой и чуть вредной', text: 'За то, как ты умеешь быть одновременно милой и чуть вредной', image: '/photos/reasons/26.jpg' },
  { id: 27, title: 'Кошачьи взгляды', text: 'За твои хитрые кошачьи взгляды', image: '/photos/reasons/27.jpg' },
  { id: 28, title: 'Одна улыбка', text: 'За то, как ты дразнишь меня одной улыбкой', image: '/photos/reasons/28.jpg' },
  { id: 29, title: 'Моя загадка', text: 'За то, что ты — моя самая красивая и желанная загадка', image: '/photos/reasons/29.jpg' },
  { id: 30, title: 'Добри утри и динь дилинь', text: 'За твои Добри утри и динь дилинь по утрам', image: '/photos/reasons/30.jpg' },
  { id: 31, title: 'Твои фотографии', text: 'За твои сногшибательные фотографии, которыми ты меня балуешь', image: '/photos/reasons/31.jpg' },
  { id: 32, title: 'Твой характер', text: 'За твой в меру властный и в тоже время котенковый характер', image: '/photos/reasons/32.jpg' },
  { id: 33, title: 'Песочные часики', text: 'За твои идеальные «песочные часики»', image: '/photos/reasons/33.jpg' },
  { id: 34, title: 'Твоя энергия', text: 'За твою сексуальную и игривую энергию', image: '/photos/reasons/34.jpg' },
  { id: 35, title: 'Твой голос', text: 'За твой очаровывающий, нежный голос', image: '/photos/reasons/35.jpg' },
]

export const REASON_HINTS = [
  'твою улыбку',
  'твой смех',
  'твою нежность',
  'твою заботу',
  'тебя',
  'твои глаза',
  'твои лапки',
  'твои рилсы',
]
