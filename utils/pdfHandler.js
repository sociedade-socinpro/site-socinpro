import { NextResponse } from "next/server";

export async function fetchPdfAndReturnResponse(sourceUrl, filename) {
  const res = await fetch(sourceUrl);
  if (!res.ok) {
    return NextResponse.json(
      { error: `Não foi possível obter o PDF: ${filename}` },
      { status: res.status }
    );
  }
  const buffer = await res.arrayBuffer();
  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
