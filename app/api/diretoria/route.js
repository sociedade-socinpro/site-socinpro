import { fetchPdfAndReturnResponse } from "@/utils/pdfHandler";
import { socinproDirectorsUrl } from "@/constants/socinproInfo";

export async function GET() {
  return await fetchPdfAndReturnResponse(
    socinproDirectorsUrl,
    "diretoria-socinpro.pdf"
  );
}
