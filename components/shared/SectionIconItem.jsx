export function SectionIconItem({ title, description, icon, ...props }) {
  return (
    <div
      className="bg-gray-100 p-6 rounded-lg text-center w-full sm:max-w-[250px] lg:max-w-[300px] xl:max-w-[400px] opacity-0 animate-fade-in hover:scale-[101%] transition-transform"
      {...props}
    >
      <div className="text-white bg-teal rounded-full h-10 w-10 mx-auto mb-4 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-base lg:text-xl xl:text-2xl font-medium mb-2">
        {title}
      </p>
      <p className="text-sm lg:text-base">{description}</p>
    </div>
  );
}
