import UnionSvg from './UnionSvg'
import OpenStatus from './OpenStatus'

export default function Footer() {
  return (
    <footer className="flex flex-col w-full max-w-screen-2xl mx-auto">
      <div className="p-4 w-full bg-footer">
        <UnionSvg fullLogoOnly />
      </div>
      <div className="flex flex-row gap-6 justify-between items-end p-4 w-full bg-footer">
        <div className="flex flex-wrap flex-1 gap-6 items-start min-w-0 md:gap-6">
          <div className="flex flex-col items-start shrink-0">
            <p className="text-base font-bold leading-5 text-black whitespace-pre-line">
              {`5pm to Midnight
Seven Days a Week`}
            </p>
            <OpenStatus className="text-base leading-5 text-black" />
          </div>
          <p className="text-base leading-5 text-black whitespace-pre-line shrink-0">
            {`(214) 823-8550
1410 N Fitzhugh Ave, Dallas TX
@UrbanoCafé`}
          </p>
          <div className="flex flex-col gap-0 items-start shrink-0 h-fit">
            <a
              href="https://instagram.com/urbanocafe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base leading-5 text-black underline underline-offset-4 decoration-2 decoration-transparent hover:decoration-black focus:decoration-black focus:outline-none transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@urbanocafe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base leading-5 text-black underline underline-offset-4 decoration-2 decoration-transparent hover:decoration-black focus:decoration-black focus:outline-none transition-colors duration-200"
            >
              Tik-tok
            </a>
          </div>
        </div>
        <p className="text-base leading-5 text-right text-black shrink-0">
          ©2022-2026 Urbano Cafe
        </p>
      </div>
    </footer>
  )
}
