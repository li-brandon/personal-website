"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { visitedCountries } from "@/lib/data";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function TravelMap() {
  return (
    <section className="py-16 border-t border-white/5">
      <h2 className="text-2xl font-bold text-white mb-4">Travelling</h2>
      <p className="text-white/50 mb-10">
        I&apos;ve been lucky enough to discover many countries around the world.
        <br />
        These are the ones that I visited.
      </p>

      <div className="relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 120,
            center: [0, 30],
          }}
          className="w-full h-auto"
          style={{ backgroundColor: "transparent" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isVisited = visitedCountries.includes(geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isVisited ? "#10B981" : "#1a1a1a"}
                    stroke="#262626"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: isVisited ? "#34D399" : "#222" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        <div className="absolute bottom-4 left-4 flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-emerald-500"></span>
            <span className="text-white/50">Visited</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-[#1a1a1a] border border-white/10"></span>
            <span className="text-white/50">Not yet</span>
          </div>
        </div>
      </div>
    </section>
  );
}
