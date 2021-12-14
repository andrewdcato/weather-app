import React, { useState, useEffect, useRef } from "react";
let autoComplete;

/**
 * Dynamically appends script to head element after
 *  component mounts
 *
 * @param {string} url - source of script to load
 * @param {function} callback - func to execute
 */
function loadScript(url, callback) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;

  if (script.readyState) {
    script.onreadystatechange = () => {
      if (['loaded','complete'].includes(script.readyState)) {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else script.onload = () => callback();

  document.getElementsByTagName("head")[0].appendChild(script);
};

/**
 * Handler to hit Places API and update app state w/latitude and
 *  longitude of selected place
 *
 * @param {Object} param0 - funcs for updating app state
 */
function handlePlaceSelect({ setLat, setQuery, setLng }) {
  const place = autoComplete.getPlace();
  const { formatted_address, geometry } = place;

  // Update value of search field
  setQuery(formatted_address);

  // Update lat and lng for weather query
  setLat(geometry.location.lat())
  setLng(geometry.location.lng())
}

/**
 * Sets up autocomplete config and adds listener to place selection
 *  input field
 *
 * @param {Object} param0 - funcs for updating app state
 */
function handleScriptLoad({
  autoCompleteRef, setLat, setLng, setQuery
}) {
  const defaultBounds = new window.google.maps.LatLngBounds();

  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    {
      types: ["(cities)"],
      bounds: defaultBounds,
      componentRestrictions: { country: "us" },
    }
  );

  autoComplete.setFields([
    "address_components", "formatted_address", "geometry"
  ]);

  autoComplete.addListener(
    "place_changed",
    () => handlePlaceSelect({ setLat, setQuery, setLng })
  );
}

/**
 * Renders place select input and passes lat & lng of
 *  selected place up the tree for forecast lookup
 *
 * @param {*} param0 - funcs for updating lat & lng
 */
export default function LocationInput({ setLat, setLng }) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    const { REACT_APP_GOOGLE_API_KEY: API_KEY } = process.env;
    const url = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;

    loadScript(
      url,
      () => handleScriptLoad({
        autoCompleteRef, setLat, setLng, setQuery
      }));
  }, [setLat, setLng]);

  return (
    <>
      <input
        type="text"
        placeholder="Enter a City"
        data-testid='location-input'
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        value={query}
      />
    </>
  );
}
