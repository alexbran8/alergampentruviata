import React, { useEffect } from "react";
import "./index.styling.css";
import { setGroundSpeed } from "../../utils";

export const Join = () => {
  useEffect(() => {
    setGroundSpeed(2770);
  }, []);

  return (
    // <div className="container">
      <div className="text-wrapper">
        <h1>
          If you want to be part of our team, you can contact us on facebook or on
          instagram and let us know why you wish to be part of what we do.
        </h1>
        <p className="alingment">Our main goal of course is to be able to provide as much support as needed to the ones whom desperately await it, but nevertheless forming a community having this as its base is also of great importance.</p>
      </div>
    // </div>
  );
};
