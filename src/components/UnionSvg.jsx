export default function UnionSvg({ fullLogoOnly = false }) {
  if (fullLogoOnly) {
    return (
      <img
        src="/assets/union.svg"
        alt="Urbano Cafe"
        className="block w-full h-auto"
        width={1680}
        height={291}
      />
    )
  }
  return (
    <picture>
      <source
        media="(max-width: 767px)"
        srcSet="/assets/union-mobile.svg"
      />
      <img
        src="/assets/union.svg"
        alt="Urbano Cafe"
        className="block w-full h-auto"
        width={1680}
        height={291}
      />
    </picture>
  )
}
