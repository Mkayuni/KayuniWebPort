"use client";

import React from "react";

const MapComponent = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101756.89728333518!2d-86.52937769418733!3d36.97584048530394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886110de3c99fd71%3A0x4d609629453aab7b!2sBowling%20Green%2C%20KY!5e0!3m2!1sen!2sus!4v1710216083202!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;