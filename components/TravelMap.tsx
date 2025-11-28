"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { visitedCountries } from "@/lib/data";
import { useEffect, useState } from "react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function TravelMap() {
  const [isDark, setIsDark] = useState(true);
  
  useEffect(() => {
    // Check if dark class is on html element
    const checkTheme = () => {
      const root = document.documentElement;
      setIsDark(root.classList.contains("dark"));
    };
    
    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    return () => observer.disconnect();
  }, []);
  
  const visitedColor = "#10B981";
  const notVisitedColor = isDark ? "#1f1f1f" : "#e5e5e5";
  const strokeColor = isDark ? "#333" : "#d4d4d4";
  const hoverNotVisited = isDark ? "#2a2a2a" : "#d4d4d4";

  return (
    <section className="py-12">
      <h2 className="text-xl font-semibold text-foreground mb-4">Travelling</h2>
      <p className="text-foreground/60 mb-8">
        I&apos;ve been lucky enough to discover many countries around the world.
        <br />
        These are the ones that I visited.
      </p>

      <div className="relative rounded-2xl overflow-hidden bg-muted border border-border">
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
                    fill={isVisited ? visitedColor : notVisitedColor}
                    stroke={strokeColor}
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: isVisited ? "#34D399" : hoverNotVisited },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        <div className="absolute bottom-4 left-4 flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-emerald-500"></span>
            <span className="text-foreground/60">Visited</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-sm ${isDark ? "bg-[#1f1f1f]" : "bg-[#e5e5e5]"} border border-border`}></span>
            <span className="text-foreground/60">Not yet</span>
          </div>
        </div>
      </div>
    </section>
  );
}
