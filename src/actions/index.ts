"use server";
import { Place } from "@/types";

interface SearchResponseProps {
  features: {
    geometry: {
      coordinates: number[];
    };
    properties: {
      place_id: number;
      display_name: string;
    };
  }[];
}

export async function Search(searchterm: string) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${searchterm}&format=geojson&addressdetails=1&layer=address&limit=5`
  );

  const data: SearchResponseProps = await res.json();

  const place: Place[] = data.features.map((feature) => {
    return {
      id: feature.properties.place_id,
      name: feature.properties.display_name,
      longitude: feature.geometry.coordinates[0],
      latitude: feature.geometry.coordinates[1],
    };
  });

  return place;
}
