import React from "react";
import "./index.styling.css";
import { Stats } from "../../components/Stats";


export const Home = () => {

  return (
    <div className="container">
      <Stats />
     <p className="header">Povestea noastră. Cum a început totul?</p>
     <p className="header">Fiecare km alergat e transformat în bani ce se donează cauzelor în care credem ajutând astfel comunitatea</p>
    </div>
  );
};
