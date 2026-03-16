'use client'

import { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

const CAROUSEL_IMAGES = [
  { src: '/assets/photos/DSC01488.jpg', label: 'Wide landscape (DSC01488)', aspectRatio: '3/2', width: 420 },
  { src: '/assets/photos/f498e9cc5bfd0b8b457499455fcafd55.jpeg', label: 'duck', aspectRatio: '4/3', width: 500 },
  { src: '/assets/photos/DSC01335.jpg', label: 'Landscape (DSC01335)', aspectRatio: '3/2', width: 345 },
  { src: '/assets/photos/DSC01594.jpg', label: 'Tall portrait (DSC01594)', aspectRatio: '1365/2048' },
  { src: '/assets/photos/DSC01895.jpg', label: 'Square (DSC01895)', aspectRatio: '1' },
  { src: '/assets/photos/cc52b5027014ff90a9d3bb369264190f.jpeg', label: 'artichoke', aspectRatio: '3/2', width: 300 },
  { src: '/assets/photos/sylvestro-glass.png', label: 'Sylvestro glass on dark surface', aspectRatio: '1', width: 440, objectPosition: '35% 50%', zoom: 1.5 },
  { src: '/assets/photos/Moody UC dining room crop.jpg', label: 'Moody UC dining room crop', aspectRatio: '3/2', width: 240 },
  { src: '/assets/photos/Svizzarina UC web res.jpg', label: 'Svizzarina UC', aspectRatio: '3/4' },
]

export default function ContentsCarousel() {
  const containerRef = useRef(null)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: false,
      containScroll: 'trimSnaps',
    },
    [AutoScroll({ speed: 0.5, startDelay: 0, stopOnInteraction: false })]
  )

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.plugins().autoScroll?.play()
  }, [emblaApi])

  useEffect(() => {
    const el = containerRef.current
    const api = emblaApi
    if (!el || !api) return
    const autoScroll = api.plugins().autoScroll
    if (!autoScroll || typeof autoScroll.stop !== 'function') return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) autoScroll.play()
        else autoScroll.stop()
      },
      { threshold: 0.1, rootMargin: '50px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [emblaApi])

  useEffect(() => {
    const api = emblaApi
    if (!api) return
    const autoScroll = api.plugins().autoScroll
    if (!autoScroll || typeof autoScroll.stop !== 'function') return

    const handleVisibility = () => {
      if (document.hidden) autoScroll.stop()
      else autoScroll.play()
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [emblaApi])

  return (
    <div ref={containerRef} className="contents-embla embla w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y">
          {CAROUSEL_IMAGES.map((item, i) => (
            <div
              className="embla__slide flex flex-col"
              key={i}
              style={{
                aspectRatio: item.aspectRatio,
                ...(item.width != null && {
                  width: `${item.width}px`,
                  flexBasis: `${item.width}px`,
                  minWidth: `${item.width}px`,
                  maxWidth: `${item.width}px`,
                }),
              }}
            >
              <div className="relative min-h-0 flex-1 w-full overflow-hidden rounded-none bg-white">
                <img
                  src={item.src}
                  alt={item.label ?? ''}
                  className="h-full w-full object-cover"
                  style={{
                    ...(item.objectPosition && { objectPosition: item.objectPosition }),
                    ...(item.zoom != null && {
                      transform: `scale(${item.zoom})`,
                      transformOrigin: item.objectPosition || '50% 50%',
                    }),
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
