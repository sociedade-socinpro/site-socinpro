import { Info } from "lucide-react";

import { cn } from "@/utils/utils";

export function InfoText({ children, className, ...props }) {
  return (
    <p
      className={cn(
        "flex flex-col sm:flex-row items-center justify-center text-center gap-2 sm:gap-4 uppercase text-xs md:text-base font-bold text-teal opacity-0 animate-fade-in border border-teal rounded-lg p-4",
        className
      )}
      {...props}
    >
      <Info className="shrink-0" />
      {children}
    </p>
  );
}
