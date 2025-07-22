import * as React from "react";
import Link from "next/link";

import { cn } from "@/utils/utils";

const FaqCard = React.forwardRef(
  ({ href = "/faq/categorias", className, ...props }, ref) => (
    <Link
      ref={ref}
      href={href}
      className={cn(
        "block w-full rounded-lg bg-coal-400 text-neutral-200 border border-coal-200 text-left p-6 space-y-4 cursor-pointer hover:bg-coal-500 transition-all duration-200 hover:scale-[101%] focus:outline-none focus:ring-2 focus:ring-coal-500 focus:ring-offset-2 focus:ring-offset-coal-100",
        className
      )}
      {...props}
    />
  )
);
FaqCard.displayName = "FaqCard";

const FaqCardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-4", className)}
    {...props}
  />
));
FaqCardHeader.displayName = "FaqCardHeader";

const FaqCardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "font-bold uppercase text-dust text-base sm:text-lg md:text-xl leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
FaqCardTitle.displayName = "FaqCardTitle";

const FaqCardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-base md:text-lg font-normal", className)}
    {...props}
  />
));
FaqCardDescription.displayName = "FaqCardDescription";

export { FaqCard, FaqCardHeader, FaqCardTitle, FaqCardDescription };
