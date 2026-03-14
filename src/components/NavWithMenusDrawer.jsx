'use client'

import Link from 'next/link'
import { useState } from 'react'
import MenusDrawer from './MenusDrawer'

const linkClass =
  'relative inline-flex shrink-0 text-2xl font-medium leading-6 text-white focus:outline-none after:absolute after:right-0 after:left-0 after:-bottom-1 after:h-0.5 after:bg-transparent after:transition-colors after:duration-200 hover:after:bg-white focus-visible:after:bg-white'

export default function NavWithMenusDrawer() {
  const [menusOpen, setMenusOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-20 flex shrink-0 items-start justify-between gap-0 bg-hero-header px-4 pt-4 pb-4"
        aria-label="Main"
      >
        <button
          type="button"
          onClick={() => setMenusOpen(true)}
          className={linkClass}
        >
          MENUS
        </button>
        <Link
          href="https://resy.com/cities/dallas-fort-worth-tx/venues/urbano-cafe?seats=2&date=2026-03-14"
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
