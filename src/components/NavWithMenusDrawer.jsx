'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import MenusDrawer from './MenusDrawer'

const linkClassBase =
  'relative inline-flex shrink-0 text-2xl font-medium leading-6 focus:outline-none transition-colors duration-200 after:absolute after:right-0 after:left-0 after:-bottom-1 after:h-0.5 after:bg-transparent after:transition-colors after:duration-200'

export default function NavWithMenusDrawer() {
  const [menusOpen, setMenusOpen] = useState(false)
  const [scrolledPastHero, setScrolledPastHero] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY >= window.innerHeight)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menusOpen) {
      menuButtonRef.current?.focus()
    }
  }, [menusOpen])

  const linkClass = `${linkClassBase} ${
    scrolledPastHero
      ? 'text-black hover:after:bg-black focus-visible:after:bg-black'
      : 'text-white hover:after:bg-white focus-visible:after:bg-white'
  }`

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-50 flex shrink-0 items-start justify-between gap-0 bg-hero-header px-4 pt-4 pb-4"
        aria-label="Main"
      >
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenusOpen((prev) => !prev)}
          className={linkClass}
          aria-expanded={menusOpen}
        >
          {menusOpen ? 'CLOSE' : 'MENUS'}
        </button>
        <Link
          href="https://resy.com/cities/dallas-fort-worth-tx/venues/urbano-cafe?seats=2"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          RESERVATIONS
        </Link>
      </nav>
      <MenusDrawer isOpen={menusOpen} onClose={() => setMenusOpen(false)} />
    </>
  )
}
