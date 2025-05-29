"use client";

export function CopyrightFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-teal text-white text-center p-2 text-xs uppercase font-bold">
      <p>
        © SOCINPRO - Sociedade Brasileira de Administração e Proteção de
        Direitos Intelectuais -{" "}
        <span className="font-normal">{currentYear}</span>
      </p>
    </div>
  );
}
