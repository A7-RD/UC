import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 font-sans text-espresso bg-cream antialiased">
      <h1 className="font-display text-4xl font-extralight tracking-tight text-espresso mb-2">
        404
      </h1>
      <p className="text-base text-espresso/80 mb-6">This page doesn’t exist.</p>
      <Link
        href="/"
        className="text-base font-semibold text-espresso underline underline-offset-4 hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 rounded"
      >
        Back to Urbano Cafe
      </Link>
    </main>
  )
}
