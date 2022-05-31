import React from "react";
import {
  GoogleMap,
  withGoogleMap,
  Marker,
  withScriptjs,
} from "react-google-maps";

const myMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    ></GoogleMap>
  )),
);

const MapWidget = () => {
  return (
    <div className="rounded-[10px] card_shadow bg-white px-[25px] pt-4 pb-3 overflow-hidden"></div>
  );
};

export default MapWidget;
