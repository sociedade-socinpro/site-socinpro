"use client";

import { useEffect } from "react";

const LINKS = {
  ios: "https://apps.apple.com/us/app/socinpro/id1448126798?l=pt-BR", // <-- App Store ID
  android:
    "https://play.google.com/store/apps/details?id=br.socinpro.socinproapp&hl=pt_BR", // <-- seu pacote
  web: "https://www.socinpro.org.br", // fallback (desktop ou indefinido)
};

// opcional: passar rota interna do app via ?d=/minha/rota
const APP_LINKS = {
  ios: (d) => `socinproapp://${d ?? ""}`,
  androidIntent: (d) =>
    `intent://${(d ?? "").replace(
      /^\//,
      ""
    )}#Intent;scheme=socinproapp;package=br.socinpro.socinproapp;end`,
  androidScheme: (d) => `socinproapp://${d ?? ""}`,
};

export default function SmartPage() {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const params = new URLSearchParams(window.location.search);
    const d = params.get("d") || undefined;

    const isiOS = /iphone|ipad|ipod/.test(ua);
    const isAndroid = /android/.test(ua);

    let opened = false;
    const openApp = () => {
      try {
        if (isiOS) {
          window.location.href = APP_LINKS.ios(d);
        } else if (isAndroid) {
          // Tente Intent (App Links). Se não funcionar, tenta scheme simples:
          window.location.href = APP_LINKS.androidIntent(d);
          setTimeout(() => {
            if (!opened) window.location.href = APP_LINKS.androidScheme(d);
          }, 200);
        }
        opened = true;
      } catch {}
    };

    openApp();

    // Fallback para loja após ~1 segundo
    const t = setTimeout(() => {
      if (isiOS) window.location.href = LINKS.ios;
      else if (isAndroid) window.location.href = LINKS.android;
      else window.location.href = LINKS.web;
    }, 1000);

    return () => clearTimeout(t);
  }, []);

  // Uma telinha simples caso JS esteja desabilitado
  return (
    <main className="flex min-h-screen items-center justify-center p-6 text-center text-white">
      <div>
        <h1 className="text-2xl font-bold">Abrindo o aplicativo…</h1>
        <p className="opacity-80 mt-2">
          Se nada acontecer, você será redirecionado à loja.
        </p>
      </div>
    </main>
  );
}
