declare module 'react-map-gl' {
  import { ComponentType, Ref, RefObject } from 'react';
  
  export interface ViewState {
    latitude: number;
    longitude: number;
    zoom: number;
    pitch?: number;
    bearing?: number;
  }

  export interface MapProps {
    initialViewState?: ViewState;
    style?: React.CSSProperties;
    mapStyle?: string;
    mapboxAccessToken?: string;
    children?: React.ReactNode;
    ref?: Ref<MapRef>;
    onMove?: (evt: any) => void;
    onClick?: (evt: any) => void;
  }

  export interface MapRef {
    flyTo: (options: { center: [number, number]; zoom?: number; duration?: number }) => void;
    getMap: () => any;
  }

  export interface MarkerProps {
    latitude: number;
    longitude: number;
    anchor?: string;
    children?: React.ReactNode;
  }

  export interface NavigationControlProps {
    position?: string;
  }

  const Map: ComponentType<MapProps>;
  export const Marker: ComponentType<MarkerProps>;
  export const NavigationControl: ComponentType<NavigationControlProps>;
  export type { MapRef };
  export default Map;
}
