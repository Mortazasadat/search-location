"use client";
import { Search } from "@/actions";
import { Place } from "@/types";
import React, { useState } from "react";
import Loading from "./Loading";

interface SearchLocationProps {
  onPlaceClick: (place: Place) => void;
}

function SearchLocation({ onPlaceClick }: SearchLocationProps) {
  const [searchterm, setSearchterm] = useState("");
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setSearchterm("");
    e.preventDefault();
    setLoading(true);
    try {
      const result = await Search(searchterm);
      setPlaces(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <h1 className="text-2xl text-slate-900 font-semibold">Search Location</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="border-none rounded-2xl py-2 px-3 mt-5 w-full focus:border-none focus:outline-none ring-1 ring-inset ring-slate-900 focus-visible:outline-3 transition-all duration-100 focus-visible:outline-slate-800 focus-visible:ring-slate-700 focus-visible:ring-inset "
          placeholder="Enter location here.."
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
        />
      </form>
      <div className="w-full h-[1px] bg-gray-400 my-8" />
      <div>
        <h3 className="text-2xl mb-4 text-slate-900 font-semibold">
          Search Results
        </h3>
        <div>
          {loading ? (
            <Loading loading={loading} />
          ) : (
            places.map((place) => {
              return (
                <div
                  className="border border-gray-300  grid grid-cols-[1fr_60px] items-center mb-2 p-1.5 rounded-md"
                  key={place.id}
                >
                  <p className="text-sm pr-1"> {place.name} </p>
                  <button
                    onClick={() => onPlaceClick(place)}
                    className="px-3 py-2 bg-slate-800 hover:bg-slate-900 transition-all duration-200 text-white rounded-md"
                  >
                    Go
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchLocation;
