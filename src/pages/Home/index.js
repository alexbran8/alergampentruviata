import React, {useEffect} from "react";
import "./index.styling.css";
import { setGroundSpeed } from "../../utils";

export const Home = () => {

useEffect(()=>{
    setGroundSpeed(570)
},[])

  return (
    <div className="container">
     
    </div>
  );
};
