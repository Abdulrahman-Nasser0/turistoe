import React from "react";

const locations = [
  "Canada",
  "Italy",
  "China",
  "Africa",
  "Peru",
  "Indonesia",
];

const LocationList = ({selectedLocation, setSelectedLocation}) => (
    <ul className="space-y-2 mt-4 ml-4 py-2 text-black text-lg font-sans">
              {locations.map((location) => (
                <li key={location}>
                  <button
                    type="button"
                    className={`w-full text-left px-2 py-1 rounded ${
                      selectedLocation === location
                        ? "bg-blue-100 font-bold text-blue-900 "
                        : "hover:bg-blue-50"
                    }`}
                    onClick={() => setSelectedLocation(location)}
                  >
                    {location}
                  </button>
                </li>
              ))}
            </ul>
);

export default LocationList;