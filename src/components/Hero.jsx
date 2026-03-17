'use client'

import { useEffect, useState } from 'react'
import UnionSvg from './UnionSvg'
import OpenStatus from './OpenStatus'

const PARALLAX_FACTOR = 0.25

export default function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative flex flex-col w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/hero-bg.png')",
          transform: `translateY(${offset * PARALLAX_FACTOR}px)`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-black/33"
        aria-hidden="true"
      />
      <header className="relative z-10 flex flex-1 flex-col gap-4 justify-end p-4 bg-hero-header min-h-0">
        <div className="flex flex-nowrap gap-5 items-start shrink-0">
          <div className="flex flex-col items-start w-fit shrink-0">
            <p className="text-base font-bold leading-5 text-white whitespace-pre-line">
              {`Open Nightly
5pm to Midnight`}
            </p>
            <OpenStatus className="text-base leading-5 text-white" />
          </div>
          <p className="w-fit text-base leading-5 text-white whitespace-pre-line shrink-0">
            {`(214) 823-8550
1410 N Fitzhugh Ave, Dallas
@UrbanoCafe`}
          </p>
        </div>
      </header>
      <div
        className="relative z-10 p-4 w-full bg-tangerine shrink-0 pb-[max(env(safe-area-inset-bottom),1rem)]"
      >
        <UnionSvg />
      </div>
    </section>
  )
}
