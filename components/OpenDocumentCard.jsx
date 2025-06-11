import { FileDown } from "lucide-react";

import { cn } from "@/utils/utils";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function OpenDocumentCard({
  title,
  description,
  buttonText = "Visualizar PDF",
  className,
  href,
  ...props
}) {
  return (
    <Card
      className={cn(
        "border-b-[14px] border-b-teal sm:max-w-sm flex flex-col h-full",
        className
      )}
      {...props}
    >
      <CardHeader className="flex-1 flex items-center gap-3">
        <div className="h-10 w-10 bg-teal rounded-full flex items-center justify-center text-white">
          <FileDown />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <CardTitle className="xl:text-2xl normal-case">{title}</CardTitle>
          {description && (
            <CardDescription className="normal-case">
              {description}
            </CardDescription>
          )}
        </div>
      </CardHeader>
      <CardFooter className="flex justify-center">
        <Button size="lg" asChild>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {buttonText}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
