import React from "react";
import "./index.styling.css";
import { Navbar } from "../../components/Navbar";

export const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img className="logo" src="./logo512.svg" alt="logo" />
      </div>
      <Navbar />
    </div>
  );
};
