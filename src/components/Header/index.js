import React from "react";
import "./index.styling.css";
import { Navbar } from "../../components/Navbar";
import Logo from "../../assets/Logo512.svg"

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <Navbar />
    </div>
  );
};
