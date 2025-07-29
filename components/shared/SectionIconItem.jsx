export function SectionIconItem({ title, description, image, icon, ...props }) {
  return (
    <div
      className="bg-gray-100 p-6 rounded-lg text-center w-full md:max-w-[270px] lg:max-w-[350px] xl:max-w-[440px] opacity-0 animate-fade-in"
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
      <p className="text-base lg:text-xl xl:text-2xl font-medium mb-2">
        {title}
      </p>
      <p className="text-sm lg:text-base">{description}</p>
    </div>
  );
}
