import React from "react";
import "./index.styling.css";
import { Navbar } from "../../components/Navbar";
import Logo  from "../../assets/logo_alergam_final.png"

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container">
        <img className="logo" src={Logo} alt="logo" />
        <h1 className="header-text">Alergam pentru viata</h1>
      </div>
      <Navbar />
    </div>
  );
};
