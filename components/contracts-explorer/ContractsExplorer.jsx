"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";

import { cn } from "@/utils/utils";

import { Button } from "@/components/ui/button";
import { ContractsDataTable } from "./ContractsDataTable";
import { contractColumns } from "./columns";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { InfoText } from "../shared/InfoText";

const MapChart = dynamic(() => import("../map-chart/MapChart"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-teal">
      Carregando mapa…
    </div>
  ),
});

const GLOBAL = "__GLOBAL__";
export default function ContractsExplorer({
  contracts = [],
  className,
  ...props
}) {
  const [view, setView] = useState("map");
  const [isMapReady, setIsMapReady] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const mapRef = useRef(null);

  const rows = useMemo(
    () =>
      contracts.map((c) => ({
        id: c.id,
        sociedadeSigla: c.sociedade.sigla,
        paisNome: c.sociedade.pais.pais,
        iso: c.sociedade.pais.sigla,
        tipoContrato: c.tipoContrato,
      })),
    [contracts]
  );

  const filteredRows = useMemo(
    () =>
      rows.filter((r) =>
        r.paisNome.toLowerCase().includes(search.toLowerCase())
      ),
    [rows, search]
  );

  const countryOptions = useMemo(() => {
    const map = new Map();
    contracts.forEach((c) => {
      map.set(c.sociedade.pais.sigla, c.sociedade.pais.pais);
    });
    return Array.from(map, ([iso, name]) => ({ iso, name }));
  }, [contracts]);

  const handleSeeOnMap = useCallback((iso) => {
    setView("map");
    setSelectedCountry(iso);
    mapRef.current?.focusCountry(iso);
  }, []);

  const handleCountryChange = useCallback((value) => {
    setSelectedCountry(value);
    setTimeout(() => {
      if (value === GLOBAL) {
        mapRef.current?.focusWorld?.();
      } else {
        mapRef.current?.focusCountry?.(value);
      }
    }, 100);
  }, []);

  const handleMapReady = useCallback(() => setIsMapReady(true), []);

  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div className="flex flex-col-reverse sm:flex-row gap-4 items-center">
        <div className="w-full sm:max-w-sm sm:mr-auto">
          {view === "map" ? (
            <Select
              value={selectedCountry}
              onValueChange={handleCountryChange}
              disabled={!isMapReady}
            >
              <SelectTrigger aria-label="Selecione um país" className="w-full">
                <SelectValue placeholder="Selecione um país" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={GLOBAL}>TODOS</SelectItem>
                {countryOptions.map(({ iso, name }) => (
                  <SelectItem key={iso} value={iso}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Input
              placeholder="Procurar País"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full"
            />
          )}
        </div>
        <div className="flex w-full p-0.5 gap-1 bg-coal-100 rounded-md sm:w-fit">
          <Button
            className={cn("shadow-none w-full min-w-32", {
              "bg-transparent hover:bg-coal-200 text-coal-900": view !== "map",
            })}
            onClick={() => setView("map")}
            disabled={!isMapReady}
          >
            Ver Mapa
          </Button>
          <Button
            onClick={() => setView("list")}
            className={cn("shadow-none w-full min-w-32", {
              "bg-transparent hover:bg-coal-200 text-coal-900": view === "map",
            })}
            disabled={!isMapReady}
          >
            Ver Lista
          </Button>
        </div>
      </div>
      <div className="border rounded-md aspect-[3/2] overflow-y-auto">
        <MapChart
          ref={mapRef}
          contracts={contracts}
          onMapReady={handleMapReady}
          className={cn({
            hidden: view === "list",
          })}
        />
        {view === "list" && (
          <ContractsDataTable
            data={filteredRows}
            columns={contractColumns}
            onSeeOnMap={handleSeeOnMap}
          />
        )}
      </div>
      {view === "map" && (
        <InfoText style={{ animationDelay: "400ms" }}>
          Clique nos países destacados para ver os detalhes da sociedade
          parceira.
        </InfoText>
      )}
    </div>
  );
}
