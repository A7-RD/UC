import UnionSvg from './UnionSvg'
import OpenStatus from './OpenStatus'

export default function Footer() {
  return (
    <footer className="flex flex-col w-full pb-[env(safe-area-inset-bottom)]">
      <div className="p-4 w-full bg-footer">
        <UnionSvg fullLogoOnly />
      </div>
      <div className="flex flex-row gap-6 justify-between items-end p-4 w-full bg-footer">
        <div className="flex flex-wrap flex-1 gap-6 items-start min-w-0 md:gap-6">
          <div className="flex flex-col items-start shrink-0">
            <p className="text-base font-bold leading-5 text-black whitespace-pre-line">
              {`Open Nightly
5pm to Midnight`}
            </p>
            <OpenStatus className="text-base leading-5 text-black" />
          </div>
          <p className="text-base leading-5 text-black whitespace-pre-line shrink-0">
            {`(214) 823-8550
1410 N Fitzhugh Ave, Dallas
@UrbanoCafe`}
          </p>
          <div className="flex flex-col gap-0 items-start shrink-0 h-fit">
            <a
              href="https://www.instagram.com/urbanocafe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base leading-5 text-black underline underline-offset-4 decoration-1.5 decoration-transparent hover:decoration-black focus:decoration-black focus:outline-none transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/UrbanoCafe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base leading-5 text-black underline underline-offset-4 decoration-1.5 decoration-transparent hover:decoration-black focus:decoration-black focus:outline-none transition-colors duration-200"
            >
              Facebook
            </a>
          </div>
        </div>
        <p className="text-base leading-5 text-right text-black shrink-0">
          ©2009-2026 Urbano Cafe
        </p>
      </div>
    </footer>
  )
}
