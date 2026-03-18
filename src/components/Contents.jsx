import ContentsCarousel from './ContentsCarousel'

const TABLE_ASPECT_RATIO = 654 / 570
const TABLE_SIZE = 475

export default function Contents() {
  return (
    <section
      className="w-full min-h-svh h-fit bg-tangerine p-0 flex flex-col gap-4"
      aria-label="Contents"
    >
      <div className="pt-24 px-4 pb-0">
        <p className="text-base leading-5 text-black max-w-prose">
          Neighborhood Italian. Convivial dining rooms, covered patio. Wines
          priced for enjoyment. Stirred cocktails. Distinctive amari.
        </p>
      </div>
      <ContentsCarousel />
      <div className="flex h-[75svh] w-fill items-end justify-center p-12">
        <img
          src="/assets/Table.svg"
          alt=""
          className="h-auto w-auto"
          style={{ width: TABLE_SIZE }}
          width={TABLE_SIZE}
          height={Math.round(TABLE_SIZE / TABLE_ASPECT_RATIO)}
        />
      </div>
    </section>
  )
}
