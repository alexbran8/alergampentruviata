import React, {useEffect} from "react";
import "./index.styling.css";
import { setGroundSpeed } from "../../utils";

export const Home = () => {

useEffect(()=>{
    setGroundSpeed(570)
},[])

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
    </div>
  );
};
