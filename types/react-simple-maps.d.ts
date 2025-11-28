declare module "react-simple-maps" {
  import * as React from "react";

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: {
      scale?: number;
      center?: [number, number];
      rotate?: [number, number, number];
    };
    width?: number;
    height?: number;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (data: {
      geographies: Geography[];
    }) => React.ReactNode;
  }

  export interface Geography {
    rsmKey: string;
    id: string;
    properties: Record<string, unknown>;
  }

  export interface GeographyProps {
    geography: Geography;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: {
      default?: React.CSSProperties & { outline?: string };
      hover?: React.CSSProperties & { outline?: string; fill?: string };
      pressed?: React.CSSProperties & { outline?: string };
    };
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyProps>;
  export const ZoomableGroup: React.FC<{
    center?: [number, number];
    zoom?: number;
    children?: React.ReactNode;
  }>;
  export const Marker: React.FC<{
    coordinates: [number, number];
    children?: React.ReactNode;
  }>;
  export const Line: React.FC<{
    coordinates: [number, number][];
    stroke?: string;
    strokeWidth?: number;
  }>;
  export const Annotation: React.FC<{
    subject: [number, number];
    dx?: number;
    dy?: number;
    children?: React.ReactNode;
  }>;
}

