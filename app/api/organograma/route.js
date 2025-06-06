import { NextResponse } from "next/server";

import { socinproOrganizationalChartUrl } from "@/constants/socinprotInfo";

export async function GET() {
  const res = await fetch(socinproOrganizationalChartUrl);

  if (!res.ok) {
    return NextResponse.json(
      { error: "Não foi possível obter o PDF" },
      { status: res.status }
    );
  }

  const buffer = await res.arrayBuffer();

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="organograma-socinpro.pdf"',
    },
  });
}
