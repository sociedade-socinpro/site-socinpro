// app/api/qr/route.ts
import QRCode from "qrcode";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const u = searchParams.get("u"); // URL alvo

  if (!u) {
    return new Response(
      JSON.stringify({ error: "Parâmetro ?u é obrigatório" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Gera PNG em buffer
  const png = await QRCode.toBuffer(u, {
    errorCorrectionLevel: "H",
    margin: 1,
    width: 512,
    color: {
      dark: "#000000", // pixels do QR
      light: "#FFFFFF", // fundo do QR (use "#00000000" para transparente em SVG; em PNG deixe branco)
    },
  });

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      // Cache agressivo (ajuste se quiser rotacionar URLs)
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
