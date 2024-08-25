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
    <div className="flex flex-col lg:grid  grid-cols-12">
      <div className=" lg:col-span-3 p-5  lg:h-screen">
        <SearchLocation onPlaceClick={(p) => setPlace(p)} />
      </div>
      <div className="bg-blue-50 lg:h-screen lg:col-span-9">
        <DynamicMapCom place={place} />
      </div>
    </div>
  );
}

export default SearchLocationMap;
