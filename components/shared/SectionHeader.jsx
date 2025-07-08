import { cn } from "@/utils/utils";

import { SectionTitle } from "./SectionTitle";

export function SectionHeader({
  id,
  title,
  subtitle,
  className,
  subtitleClassName = "uppercase",
}) {
  return (
    <div className={cn("space-y-4 text-center", className)}>
      <SectionTitle id={id}>{title}</SectionTitle>
      <h3
        className={cn(
          "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6 opacity-0 animate-fade-in font-bold",
          subtitleClassName
        )}
        style={{ animationDelay: "400ms" }}
      >
        {subtitle}
      </h3>
    </div>
  );
}
