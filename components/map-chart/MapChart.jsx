"use client";

import {
  forwardRef,
  useState,
  useImperativeHandle,
  memo,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { feature } from "topojson-client";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";
import { Plus, Loader2, Minus } from "lucide-react";

import { cn } from "@/utils/utils";

import { Button } from "../ui/button";
import { CountryMarkers } from "./CountryMarkers";

const MapChart = forwardRef(({ contracts, onMapReady, className }, ref) => {
  const [geography, setGeography] = useState(null);
  const [center, setCenter] = useState([0, 40]);
  const [zoom, setZoom] = useState(1);
  const [selectedIso, setSelectedIso] = useState(null);

  const countryMap = useMemo(() => {
    const map = {};
    contracts.forEach((c) => {
      const iso = c.sociedade.pais.sigla;
      const name = c.sociedade.pais.pais;
      const item = {
        id: c.id,
        sociedadeSigla: c.sociedade.sigla,
        tipoContrato: c.tipoContrato,
      };
      if (!map[iso]) {
        map[iso] = { name, iso, items: [item] };
      } else {
        map[iso].items.push(item);
      }
    });

    return map;
  }, [contracts]);

  const handleZoomIn = useCallback(() => {
    setZoom((z) => Math.min(z * 2, 30));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((z) => Math.max(z / 2, 1));
  }, []);

  useImperativeHandle(ref, () => ({
    focusCountry(iso) {
      const feat = geography.find(
        (g) => g.properties["ISO3166-1-Alpha-2"] === iso
      );
      if (!feat) return;
      const [x, y] = geoCentroid(feat);
      setCenter([x, y]);
      setZoom(30);
      setSelectedIso(iso);
    },
  }));

  useEffect(() => {
    fetch("/features.topo.json")
      .then((r) => r.json())
      .then((topo) => {
        const geos = feature(topo, topo.objects.features).features;
        setGeography(geos);
        onMapReady?.();
      });
  }, [onMapReady]);

  if (!geography) {
    return (
      <div className="w-full h-full flex items-center justify-center text-teal">
        <Loader2 className="animate-spin" size={40} />
      </div>
    );
  }

  return (
    <div className={cn("relative w-full h-full", className)}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 130, center: [0, 40] }}
        className="w-full h-full"
      >
        <ZoomableGroup
          center={center}
          zoom={zoom}
          onMoveEnd={({ coordinates, zoom }) => {
            setCenter(coordinates);
            setZoom(zoom);
            setSelectedIso(null);
          }}
          maxZoom={30}
        >
          <Geographies geography={geography}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => {
                  const iso = geo.properties["ISO3166-1-Alpha-2"];
                  const hasData = Boolean(countryMap[iso]);

                  return (
                    <Geography
                      role="button"
                      aria-label={
                        hasData
                          ? `${countryMap[iso].name}: detalhes`
                          : `${iso}: sem dados`
                      }
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => {
                        if (hasData) {
                          setSelectedIso(iso);
                          const [x, y] = geoCentroid(geo);
                          setCenter([x, y]);
                          setZoom(30);
                        }
                      }}
                      className={cn(
                        "outline-none transition-colors duration-200",
                        {
                          "fill-coal-400": iso === selectedIso,
                          "fill-teal hover:fill-teal-400":
                            hasData && iso !== selectedIso,
                          "fill-coal-100 cursor-default": !hasData,
                        }
                      )}
                    />
                  );
                })}
                <CountryMarkers
                  geographies={geographies}
                  countryMap={countryMap}
                  selectedIso={selectedIso}
                  setSelectedIso={setSelectedIso}
                />
              </>
            )}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <Button
          aria-label="Zoom In"
          variant="outline"
          size="icon"
          className="text-black border-gray-200 bg-white hover:bg-gray-100 hover:text-black"
          onClick={handleZoomIn}
        >
          <Plus />
        </Button>
        <Button
          aria-label="Zoom Out"
          variant="outline"
          size="icon"
          className="text-black border-gray-200 bg-white hover:bg-gray-100 hover:text-black"
          onClick={handleZoomOut}
        >
          <Minus />
        </Button>
      </div>
    </div>
  );
});

export default memo(MapChart);

MapChart.displayName = "MapChart";
