export function SectionTitle({ id, children, style }) {
  return (
    <h2
      id={id}
      className="text-xs md:text-base text-teal opacity-0 animate-fade-in font-bold uppercase"
      style={style}
    >
      {children}
    </h2>
  );
}
