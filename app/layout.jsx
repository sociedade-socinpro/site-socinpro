import "@/styles/globals.css";
import { roboto } from "@/styles/fonts";

import Providers from "./providers";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  icons: {
    icon: "/favicon.svg", // caminho dentro da pasta public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Providers>
        <body className={`${roboto.className} antialiased`}>{children}</body>
      </Providers>
    </html>
  );
}
