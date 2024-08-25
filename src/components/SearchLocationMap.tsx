"use client";
import React from "react";
import SearchLocation from "./SearchLocation";
import Map from "./Map";
import { Place } from "@/types";

function SearchLocationMap() {
  const [place, setPlace] = React.useState<Place | null>(null);

  return (
    <div className="grid  grid-cols-12">
      <div className=" col-span-3 p-5  h-screen">
        <SearchLocation onPlaceClick={(p) => setPlace(p)} />
      </div>
      <div className="bg-blue-50 h-screen col-span-9">
        <Map place={place} />
      </div>
    </div>
  );
}

export default SearchLocationMap;
