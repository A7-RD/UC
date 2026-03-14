import ContentsCarousel from './ContentsCarousel'

export default function Contents() {
  return (
    <section
      className="w-full min-h-screen bg-tangerine p-0 flex flex-col gap-4"
      aria-label="Contents"
    >
      <div className="pt-24 px-4 pb-0">
        <p className="text-base leading-5 text-black max-w-prose">
          Join us for bright, uncomplicated, veg-forward cooking in one of our
          warm and laid-back dining rooms, or on our newly redone back patio.
          We now have cocktails!
        </p>
      </div>
      <ContentsCarousel />
    </section>
  )
}
