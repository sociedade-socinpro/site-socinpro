import Image from "next/image";

import { cn } from "@/utils/utils";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SoundIcon from "@/public/icons/sound.svg";

export function InfoCard({ title, description, className, children }) {
  return (
    <Card className={cn("border-b-[14px] border-b-teal max-w-xl", className)}>
      <CardHeader className="items-center">
        <Image
          src={SoundIcon}
          className="mb-6"
          width={48}
          alt=""
          aria-hidden="true"
        />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="justify-center">{children}</CardFooter>
    </Card>
  );
}
