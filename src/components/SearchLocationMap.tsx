"use client";
import React from "react";
import SearchLocation from "./SearchLocation";
import { Place } from "@/types";
import MapCom from "./Map";
import dynamic from "next/dynamic";

const DynamicMapCom = dynamic(() => import("./Map"), { ssr: false });

function SearchLocationMap() {
  const [place, setPlace] = React.useState<Place | null>(null);

  return (
    <div className="grid  grid-cols-12">
      <div className=" col-span-3 p-5  h-screen">
        <SearchLocation onPlaceClick={(p) => setPlace(p)} />
      </div>
      <div className="bg-blue-50 h-screen col-span-9">
        <DynamicMapCom place={place} />
      </div>
    </div>
  );
}

export default SearchLocationMap;
