import Hero from '../components/Hero'
import Contents from '../components/Contents'
import Footer from '../components/Footer'

export default function HomePage({ searchParams }) {
  const showGrid = searchParams?.grid === '1'
  return (
    <main className="min-h-screen font-sans text-espresso antialiased">
      <Hero />
      <Contents showGridOverlay={showGrid} />
      <Footer />
    </main>
  )
}
