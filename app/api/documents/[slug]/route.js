import { NextResponse } from "next/server";

import { fetchPdfAndReturnResponse } from "@/utils/pdfHandler";
import { documents } from "@/constants/socinprotInfo";

export async function GET(_request, { params }) {
  const { slug } = params;
  const doc = documents.find((d) => d.slug === slug);

  if (!doc) {
    return NextResponse.json(
      { error: `Documento não encontrado: ${slug}` },
      { status: 404 }
    );
  }

  return await fetchPdfAndReturnResponse(doc.url, doc.filename);
}
