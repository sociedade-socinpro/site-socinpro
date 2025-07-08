import Image from "next/image";

import TitleBg from "@/public/images/title_bg.png";

export function PageHeader({ title, description }) {
  return (
    <div className="relative py-8 lg:py-0 max-h-80 lg:min-h-80 w-full uppercase font-bold flex items-center">
      <Image
        src={TitleBg}
        alt=""
        fill
        priority
        className="absolute inset-0 object-cover"
      />
      <div className="px-[6%] md:px-[14%] z-10">
        <h1 className="text-xs md:text-base text-dust opacity-0 animate-fade-in">
          {title}
        </h1>
        <p
          className="text-lg text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6 mt-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
