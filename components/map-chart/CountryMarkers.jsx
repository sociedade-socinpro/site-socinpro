"use client";

import { memo } from "react";
import { geoCentroid } from "d3-geo";
import { Marker, useZoomPanContext } from "react-simple-maps";
import { PopoverArrow } from "@radix-ui/react-popover";
import { useIsMobile } from "@/hooks/use-mobile";

import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export const CountryMarkers = memo(
  ({ geographies, countryMap, selectedIso, setSelectedIso }) => {
    const { k } = useZoomPanContext();
    const isMobile = useIsMobile();

    const baseRadius = isMobile ? 16 : 6;
    const baseFontSize = isMobile ? 24 : 10;
    const baseFontStrokeWidth = isMobile ? 4 : 1.6;
    const baseTextInset = 2.5;

    return geographies.map((geo) => {
      const iso = geo.properties["ISO3166-1-Alpha-2"];
      const data = countryMap[iso];
      if (!data) return null;

      const centroid = geoCentroid(geo);
      const r = baseRadius / k;
      const fontSize = baseFontSize / k;
      const fontStrokeWidth = baseFontStrokeWidth / k;
      const textInset = baseTextInset / k;

      return (
        <Marker key={iso} coordinates={centroid}>
          <Popover
            open={iso === selectedIso}
            onOpenChange={(open) => {
              if (open) setSelectedIso(iso);
              else setSelectedIso(null);
            }}
          >
            <PopoverTrigger asChild>
              <g className="cursor-pointer">
                <circle
                  r={r}
                  fill="#FF5722"
                  stroke="#fff"
                  strokeWidth={1 / k}
                />
                <text
                  y={-r - textInset}
                  textAnchor="middle"
                  className="pointer-events-none"
                  style={{
                    fontSize: `${fontSize}px`,
                    paintOrder: "stroke",
                  }}
                  fill="#fff"
                  stroke="#000"
                  strokeWidth={fontStrokeWidth}
                  strokeLinejoin="round"
                >
                  {data.name}
                </text>
              </g>
            </PopoverTrigger>
            <PopoverContent side="top" sideOffset={6} className="w-84">
              <PopoverArrow />
              <div className="space-y-4">
                <div className="text-sm">
                  <strong className="block">{data.name}</strong>
                  <span>{data.iso}</span>
                </div>
                <div className="border rounded-md">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Sociedade</TableHead>
                        <TableHead>Tipo de contrato</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.items.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.sociedadeSigla}</TableCell>
                          <TableCell>{item.tipoContrato}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </Marker>
      );
    });
  }
);

CountryMarkers.displayName = "CountryMarkers";
