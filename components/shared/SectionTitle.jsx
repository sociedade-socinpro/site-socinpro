export function SectionTitle({ id, children }) {
  return (
    <h2
      id={id}
      className="text-xs md:text-base text-teal opacity-0 animate-fade-in font-bold uppercase"
    >
      {children}
    </h2>
  );
}
