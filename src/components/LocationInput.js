import React, { useState, useRef } from "react";
import useLoadScript from "../hooks/useLoadScript";

/**
 * Renders place select input and passes lat & lng of
 *  selected place up the tree for forecast lookup
 *
 * @param {*} param0 - funcs for updating lat & lng
 */
export default function LocationInput({ setLat, setLng }) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useLoadScript({
    autoCompleteRef,
    setLat,
    setLng,
    setQuery
  });

  return (
    <>
      <div className="w-full mb-2">
        <div className="flex justify-center">
          <label htmlFor="city" className="sr-only">
            City
          </label>

          <input
            type="text"
            name="city"
            className="w-full block shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
            placeholder="Enter a City"
            data-testid='location-input'
            ref={autoCompleteRef}
            onChange={event => setQuery(event.target.value)}
            value={query}
          />
        </div>
      </div>
    </>
  );
}
