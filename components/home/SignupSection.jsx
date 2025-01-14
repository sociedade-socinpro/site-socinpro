import { SignupForm } from "@/components/home/SignupForm";

export const SignupSection = () => {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl uppercase">
        Filie-se à Socinpro
      </h3>
      <p className="text-sm lg:text-base mb-4">
        Proteja seus direitos autorais e aproveite benefícios exclusivos.
        <br />
        <span className="font-bold">
          Estamos ao seu lado para cuidar do que é seu.
        </span>
      </p>
      <SignupForm />
    </div>
  );
};
