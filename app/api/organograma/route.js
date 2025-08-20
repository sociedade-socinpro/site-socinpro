import { fetchPdfAndReturnResponse } from "@/utils/pdfHandler";
import { socinproOrganizationalChartUrl } from "@/constants/socinproInfo";

export async function GET() {
  return await fetchPdfAndReturnResponse(
    socinproOrganizationalChartUrl,
    "organograma-socinpro.pdf"
  );
}
