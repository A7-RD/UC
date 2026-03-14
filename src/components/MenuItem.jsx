export default function MenuItem({ title, description, price, className = '' }) {
  return (
    <div className={`flex flex-col gap-1 text-center text-espresso min-w-0 w-full max-w-[300px] ${className}`.trim()}>
      <p className="font-deck text-lg uppercase leading-5 font-semibold text-balance">
        {title}
      </p>
      <p className="font-mono text-sm leading-4 font-medium text-balance">
        {description}
      </p>
      <p className="font-sans text-base font-medium leading-5 text-balance">
        {price}
      </p>
    </div>
  );
}
