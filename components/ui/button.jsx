import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/utils/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm uppercase font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/80 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default:
          "bg-teal text-neutral-50 shadow hover:bg-teal/80 dark:bg-neutral-50 dark:text-teal dark:hover:bg-neutral-50/90",
        destructive:
          "bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
        outline:
          "border border-teal bg-transparent text-white shadow-sm hover:bg-teal/30 hover:text-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        secondary:
          "bg-neutral-100 text-teal shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        ghost:
          "bg-coal-300 text-white hover:bg-teal/90 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-teal underline-offset-4 hover:underline dark:text-neutral-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
