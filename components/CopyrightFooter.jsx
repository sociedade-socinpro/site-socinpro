"use client";

export function CopyrightFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-teal text-white text-center p-4 text-xs sm:text-sm uppercase font-bold">
      <p>
        © SOCINPRO - Sociedade Brasileira de Administração e Proteção de
        Direitos Intelectuais -{" "}
        <span className="font-normal">{currentYear}</span>
      </p>
    </div>
  );
}
