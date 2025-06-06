import { fetchPdfAndReturnResponse } from "@/utils/pdfHandler";
import { socinproArticlesOfAssociationUrl } from "@/constants/socinprotInfo";

export async function GET() {
  return await fetchPdfAndReturnResponse(
    socinproArticlesOfAssociationUrl,
    "estatuto-socinpro.pdf"
  );
}
