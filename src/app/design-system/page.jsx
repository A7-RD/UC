const sample = 'The quick brown fox jumps over the lazy dog.'

export const metadata = {
  robots: { index: false, follow: false },
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen p-6 md:p-8 font-sans text-espresso bg-cream">
      <h1 className="text-4xl font-display font-extralight tracking-micro-tight mb-8">
        Design System
      </h1>
      <p className="text-base font-normal leading-tight text-espresso/80 mb-8 max-w-xl">
        Type classes currently in use on the site.
      </p>

      <section className="flex flex-col gap-8">
        <div>
          <h2 className="text-base font-semibold uppercase tracking-micro-wide mb-4 text-espresso/60">
            Font family
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">font-sans</code>
              <p className="font-sans text-base font-normal text-espresso">{sample}</p>
            </div>
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">font-mono</code>
              <p className="font-mono text-base font-normal text-espresso">{sample}</p>
            </div>
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">font-display</code>
              <p className="font-display text-base font-extralight text-espresso">{sample}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold uppercase tracking-micro-wide mb-4 text-espresso/60">
            Font size
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">text-base</code>
              <p className="font-sans text-base font-normal text-espresso">{sample}</p>
            </div>
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">text-4xl</code>
              <p className="font-sans text-4xl font-normal text-espresso">{sample}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold uppercase tracking-micro-wide mb-4 text-espresso/60">
            Font weight
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">font-extralight</code>
              <p className="font-sans text-base font-extralight text-espresso">{sample}</p>
            </div>
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">font-light</code>
              <p className="font-sans text-base font-light text-espresso">{sample}</p>
            </div>
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">font-normal</code>
              <p className="font-sans text-base font-normal text-espresso">{sample}</p>
            </div>
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">font-semibold</code>
              <p className="font-sans text-base font-semibold text-espresso">{sample}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold uppercase tracking-micro-wide mb-4 text-espresso/60">
            Line height
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">leading-tight</code>
              <p className="font-sans text-base font-normal leading-tight text-espresso max-w-md">
                {sample} {sample}
              </p>
            </div>
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">leading-none</code>
              <p className="font-sans text-base font-normal leading-none text-espresso max-w-md">
                {sample} {sample}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold uppercase tracking-micro-wide mb-4 text-espresso/60">
            Letter spacing
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">tracking-micro-wide</code>
              <p className="font-sans text-base font-normal tracking-micro-wide text-espresso">{sample}</p>
            </div>
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">tracking-micro-tight</code>
              <p className="font-sans text-base font-normal tracking-micro-tight text-espresso">{sample}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold uppercase tracking-micro-wide mb-4 text-espresso/60">
            Other
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">uppercase</code>
              <p className="font-sans text-base font-normal uppercase text-espresso">{sample}</p>
            </div>
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">whitespace-pre-wrap</code>
              <p className="font-sans text-base font-normal whitespace-pre-wrap text-espresso max-w-md">
                {'Line one\nLine two\nLine three'}
              </p>
            </div>
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">whitespace-pre</code>
              <p className="font-sans text-base font-normal whitespace-pre text-espresso overflow-x-auto">
                {'Line one\nLine two\nLine three'}
              </p>
            </div>
            <div>
              <code className="font-mono text-sm font-normal text-espresso/60 block mb-1">not-italic</code>
              <p className="font-sans text-base font-normal not-italic text-espresso">{sample}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
