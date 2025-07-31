import { cn } from "@/utils/utils";

export function SectionIconItem({
  title,
  description,
  image,
  icon,
  className,
  level = 4,
  ...props
}) {
  const Tag = `h${level}`;

  return (
    <div
      className={cn(
        "flex flex-col justify-center bg-gray-100 p-6 rounded-lg text-center w-full md:max-w-[270px] lg:max-w-[350px] xl:max-w-[440px] sm:min-h-full opacity-0 animate-fade-in",
        className
      )}
      {...props}
    >
      {image && (
        <div className="flex items-center justify-center mb-4">{image}</div>
      )}
      {icon && (
        <div className="text-white bg-teal rounded-full h-10 w-10 mx-auto mb-4 flex items-center justify-center">
          {icon}
        </div>
      )}
      {title && (
        <Tag className="text-base lg:text-xl xl:text-2xl font-medium">
          {title}
        </Tag>
      )}
      {description && (
        <p className="text-sm lg:text-base mt-2">{description}</p>
      )}
    </div>
  );
}
