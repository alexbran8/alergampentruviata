import React from "react";
import "./index.styling.css";

export const Home = () => {
  return (
    <div className="container">
      <div className="man">
        <div className="body">
          <div className="head">
            <div className="hat"></div>
            <div className="glasses"></div>
            <div className="ear"></div>
            <div className="mouth"></div>
          </div>

          <div className="arm left">
            <div className="lower-arm"></div>
          </div>
          <div className="leg left">
            <div className="lower-leg"></div>
          </div>
          <div className="leg right">
            <div className="lower-leg"></div>
          </div>
          <div className="arm right">
            <div className="lower-arm"></div>
          </div>
        </div>
      </div>

      <div className="cloud c1"></div>
      <div className="cloud c2"></div>
      <div className="cloud c3"></div>

      <div className="ground">
        <div className="grass"></div> 
        <div className="rock rk1"></div>  
        <div className="rock rk2"></div>
        <div className="rock rk3"></div>
        <div className="rock rk4"></div> 
        <div className="rock rk5"></div>
      </div>
    </div>
  );
};
