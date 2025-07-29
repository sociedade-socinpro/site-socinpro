import { cn } from "@/utils/utils";

export function SectionTitle({ id, className, children, style }) {
  return (
    <h2
      id={id}
      className={cn(
        "text-xs md:text-base text-teal opacity-0 animate-fade-in font-bold uppercase",
        className
      )}
      style={style}
    >
      {children}
    </h2>
  );
}
