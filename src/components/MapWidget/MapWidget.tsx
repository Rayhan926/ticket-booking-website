import ViewMap from "@components/Icons/ViewMap";
import React from "react";

const MapWidget = () => {
  return (
    <div className="rounded-[10px] card_shadow bg-white overflow-hidden">
      <div className="px-[25px] pt-4 pb-3 flex items-center gap-3 title_sm text-base text-dark">
        <ViewMap />
        View Map
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.1509317934!2d90.34928559373314!3d23.780620653255404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1654058679488!5m2!1sen!2sbd"
        width="600"
        height="280"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        frameBorder={0}
      ></iframe>
    </div>
  );
};

export default MapWidget;
