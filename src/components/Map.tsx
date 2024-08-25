import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import type { Map as leafletMap } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Place } from "@/types";
import L from "leaflet";

interface MapPorps {
  place: Place | null;
}

// Fix for default icon paths
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapCom({ place }: MapPorps) {
  const mapRef = useRef<leafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.latitude, place.longitude]);
    }
  }, [place]);

  return (
    <div className="h-full w-full">
      <MapContainer
        ref={mapRef}
        center={[40.7, -74]}
        zoom={13}
        scrollWheelZoom={true}
        className="h-screen"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {place && (
          <Marker position={[place.latitude, place.longitude]}>
            <Popup>
              <div>
                <h1 className="text-sm font-semibold text-black">Name</h1>
                {place.name}
              </div>
              <div>
                <h1 className="text-sm font-semibold text-black">Latitude</h1>
                {place.latitude}
              </div>
              <div>
                <h1 className="text-sm font-semibold text-black">Longitude</h1>{" "}
                {place.longitude}
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
