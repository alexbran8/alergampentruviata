import React, { useEffect } from "react";
import "./index.styling.css";
import { setGroundSpeed } from "../../utils";

export const Support  = () => {



    useEffect(()=>{
        setGroundSpeed(2770)
    },[])

  return (
    <div className="container">
 
    </div>
  );
};
