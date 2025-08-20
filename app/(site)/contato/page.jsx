import Link from "next/link";
import Image from "next/image";

import { cn } from "@/utils/utils";

import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { locations } from "@/constants/socinproInfo";
import TargetSvg from "@/public/icons/target.svg";
import LocationIcon from "@/public/icons/location.svg";
import WhatsappIcon from "@/public/icons/whatsapp.svg";
import EmailIcon from "@/public/icons/email.svg";
import PhoneIcon from "@/public/icons/phone.svg";

export const metadata = {
  title: "SOCINPRO – Fale Conosco",
  description:
    "Entre em contato conosco para dúvidas e informações através do nosso formulário ou encontre a unidade mais próxima.",
};

const locationsTab = [
  { key: "rj", label: "Rio de janeiro, RJ (sede)" },
  { key: "sp", label: "São paulo, SP" },
  { key: "pe", label: "Pernambuco" },
  { key: "go", label: "Goiás" },
  { key: "ms", label: "Mato Grosso do Sul" },
  { key: "mg", label: "Minas Gerais" },
  { key: "rs", label: "Rio Grande do Sul" },
  { key: "ce", label: "Ceará" },
  { key: "ba", label: "Bahia" },
];

export default async function Page({ searchParams }) {
  const { location: rawLocation } = await searchParams;

  const validKeys = locationsTab.map((c) => c.key);
  const activeTab = validKeys.includes(rawLocation) ? rawLocation : "rj";

  const selectedLocation = locations.find((loc) => loc.location === activeTab);

  return (
    <>
      <PageHeader
        title="Fale Conosco"
        description={
          <>
            Estamos disponíveis <br /> para qualquer dúvida!
          </>
        }
      />
      <div className="py-12 px-[6%] md:px-[14%] space-y-24">
        <section aria-labelledby="contato-formulario">
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <SectionTitle id="contato-formulario">
              Preencha o formulário ou encontre a unidade mais próxima.
            </SectionTitle>
            <ContactForm />
          </div>
        </section>
        <section aria-labelledby="contato-locais" className="space-y-12">
          <SectionHeader
            id="contato-locais"
            title="Nossos Endereços e Contatos"
            subtitle="Encontre o escritório da Socinpro mais perto de você"
          />
          <div className="space-y-6">
            <p className="text-xs md:text-base text-teal opacity-0 animate-fade-in text-center font-bold uppercase">
              Navegue pelas unidades
            </p>
            <div
              id="unidades"
              className="overflow-x-auto -mx-4 px-4 lg:overflow-x-visible lg:-mx-0 lg:px-0 opacity-0 animate-fade-in"
            >
              <div className="inline-flex whitespace-nowrap space-x-4 lg:flex lg:justify-center lg:space-x-6">
                {locationsTab.map((location) => (
                  <Link
                    key={location.key}
                    href={`/contato?location=${location.key}#unidades`}
                    aria-current={
                      activeTab === location.key ? "page" : undefined
                    }
                    className={cn(
                      "py-2 border-b-2 uppercase text-sm lg:text-base text-center transition-all",
                      activeTab === location.key
                        ? "border-teal text-teal font-semibold"
                        : "border-transparent text-gray-600 hover:text-teal hover:font-medium font-normal"
                    )}
                  >
                    {location.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 bg-gray-100 rounded-sm p-8 lg:px-20 opacity-0 animate-fade-in">
              <Image src={TargetSvg} alt="" />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                {selectedLocation.name}
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <LinkItem
                  href={selectedLocation.address.mapUrl}
                  icon={LocationIcon}
                >
                  {selectedLocation.address.name}
                </LinkItem>
                {selectedLocation.phones.map((phone) => (
                  <LinkItem
                    key={phone}
                    href={`tel:${phone.replace(/\D/g, "")}`}
                    icon={PhoneIcon}
                  >
                    {phone}
                  </LinkItem>
                ))}
                {selectedLocation.emails.map((email) => (
                  <LinkItem
                    key={email}
                    href={`mailto:${email}`}
                    icon={EmailIcon}
                  >
                    {email}
                  </LinkItem>
                ))}
              </div>
              <p className="text-xs md:text-base text-teal text-center mt-4 font-bold uppercase">
                Canais de atendimento:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {selectedLocation.whatsapps.map(
                  ({ name, phone, whatsappUrl }) => (
                    <LinkItem
                      key={phone}
                      href={whatsappUrl}
                      icon={WhatsappIcon}
                    >
                      <div className="flex flex-col">
                        <span className="block">{phone}</span>
                        <span className="font-medium text-sm block">
                          {name}
                        </span>
                      </div>
                    </LinkItem>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const LinkItem = ({ href = "", children, icon, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex text-sm md:text-base hover:text-teal transition-colors",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon && (
        <span className="mr-2 shrink-0">
          {<Image src={icon} alt="" aria-hidden="true" />}
        </span>
      )}
      {children}
    </Link>
  );
};
