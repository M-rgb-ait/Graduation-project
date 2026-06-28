"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState, useEffect } from "react";

export type Location = {
  lat: number;
  lng: number;
};

interface Props {
  value: Location;
  onChange: (location: Location) => void;
}

export default function GoogleMapComponent({ value, onChange }: Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const center = useMemo(
    () => ({
      lat: value.lat,
      lng: value.lng,
    }),
    [value.lat, value.lng],
  );

  useEffect(() => {
    if (map) {
      map.panTo(center);
    }
  }, [center, map]);

  if (!isLoaded) {
    return <div className="h-100">Loading map...</div>;
  }

  return (
    <GoogleMap
      onLoad={(m) => setMap(m)}
      zoom={13}
      center={center}
      mapContainerStyle={{
        width: "100%",
        height: "400px",
        borderRadius: "12px",
      }}
      onClick={(e) => {
        if (!e.latLng) return;

        onChange({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        });
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
