import Link from 'next/link'
import UnionSvg from './UnionSvg'
import OpenStatus from './OpenStatus'

export default function Hero() {
  return (
    <section
      className="relative flex flex-col mx-auto w-full max-w-screen-2xl h-screen bg-[url('/assets/hero-bg.png')] bg-cover bg-center bg-no-repeat"
    >
      <div
        className="absolute inset-0 bg-black/33"
        aria-hidden="true"
      />
      <header className="relative z-10 flex flex-1 flex-col gap-4 justify-between p-4 bg-hero-header min-h-0">
        <nav className="sticky top-0 z-10 flex gap-0 items-start shrink-0 justify-between bg-hero-header -mx-4 -mt-4 px-4 pt-4" aria-label="Main">
          <Link
            href="#menus"
            className="text-2xl font-medium leading-6 text-white underline underline-offset-4 decoration-2 decoration-transparent hover:decoration-white focus:decoration-white focus:outline-none transition-colors duration-200"
          >
            MENUS
          </Link>
          <Link
            href="#reservations"
            className="text-2xl font-medium leading-6 text-white underline underline-offset-4 decoration-2 decoration-transparent hover:decoration-white focus:decoration-white focus:outline-none transition-colors duration-200"
          >
            RESERVATIONS
          </Link>
        </nav>
        <div className="flex flex-nowrap gap-5 items-start shrink-0">
          <div className="flex flex-col items-start w-fit shrink-0">
            <p className="text-base font-bold leading-5 text-white whitespace-pre-line">
              {`5pm to Midnight
Seven Days a Week`}
            </p>
            <OpenStatus className="text-base leading-5 text-white" />
          </div>
          <p className="w-fit text-base leading-5 text-white whitespace-pre-line shrink-0">
            {`(214) 823-8550
1410 N Fitzhugh Ave, Dallas TX
@UrbanoCafé`}
          </p>
        </div>
      </header>
      <div className="relative z-10 p-4 w-full bg-tangerine shrink-0">
        <UnionSvg />
      </div>
    </section>
  )
}
