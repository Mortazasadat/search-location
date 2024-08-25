import "leaflet/dist/leaflet.css";
import type { Map as leafletMap } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Place } from "@/types";
import React, { useEffect, useRef } from "react";

interface MapPorps {
  place: Place | null;
}

function Map({ place }: MapPorps) {
  const mapRef = useRef<leafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.latitude, place.longitude]);
    }
  }, [place]);

  return (
    <div>
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

export default Map;
