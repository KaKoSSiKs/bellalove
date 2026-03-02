import { motion } from 'framer-motion'
import { Fragment } from 'react'

type GridItemType = 
  | { type: 'image'; img: string; span: string }
  | { type: 'text'; text: string; span: string; bgColor?: string }

const MOMENTS_PAGE_1: GridItemType[] = [
  { type: 'image', img: '/photos/meeting/1.jpg', span: 'col-span-8 row-span-2' },
  { type: 'image', img: '/photos/meeting/2.jpg', span: 'col-span-4 row-span-1' },
  { type: 'text', text: 'I', span: 'col-span-4 row-span-1', bgColor: 'bg-accent-burgundy' },
  { type: 'image', img: '/photos/meeting/3.jpg', span: 'col-span-6 row-span-1' },
  { type: 'image', img: '/photos/meeting/4.jpg', span: 'col-span-6 row-span-1' },
]

const MOMENTS_PAGE_2: GridItemType[] = [
  { type: 'image', img: '/photos/meeting/11.jpg', span: 'col-span-4 row-span-2' },
  { type: 'text', text: 'LOVE', span: 'col-span-8 row-span-1', bgColor: 'bg-black' },
  { type: 'image', img: '/photos/meeting/22.jpg', span: 'col-span-4 row-span-1' },
  { type: 'image', img: '/photos/meeting/33.jpg', span: 'col-span-4 row-span-1' },
  { type: 'image', img: '/photos/meeting/44.jpg', span: 'col-span-12 row-span-1' },
]

const MOMENTS_PAGE_3: GridItemType[] = [
  { type: 'image', img: '/photos/meeting/111.jpg', span: 'col-span-6 row-span-2' },
  { type: 'image', img: '/photos/meeting/112.jpg', span: 'col-span-6 row-span-1' },
  { type: 'text', text: 'YOU', span: 'col-span-6 row-span-1', bgColor: 'bg-accent-burgundy' },
  { type: 'image', img: '/photos/meeting/113.jpg', span: 'col-span-12 row-span-1' },
]

function TextTile({ text, bgColor = 'bg-black' }: { text: string; bgColor?: string }) {
  return (
    <div className={`w-full h-full ${bgColor} flex items-center justify-center`}>
      <span className="font-display font-bold text-white text-[clamp(2rem,5vw,4rem)] tracking-widest">
        {text}
      </span>
    </div>
  )
}

function GridPage({ images, index }: { images: GridItemType[]; index: number }) {
  return (
    <section className="section-base overflow-hidden" data-section={15 + index}>
      <div className="w-full h-full grid grid-cols-12 grid-rows-3 auto-rows-fr gap-0">
        {images.map((item, i) => (
          <motion.div
            key={i}
            className={`relative overflow-hidden ${item.span}`}
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            {item.type === 'image' ? (
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            ) : (
              <TextTile text={item.text} bgColor={item.bgColor} />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function Section08SpecialMoments() {
  return (
    <Fragment>
      <GridPage images={MOMENTS_PAGE_1} index={0} />
      <GridPage images={MOMENTS_PAGE_2} index={1} />
      <GridPage images={MOMENTS_PAGE_3} index={2} />
    </Fragment>
  )
}
