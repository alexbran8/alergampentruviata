import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.styles.css"

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Team", href: "/team" },
  { text: "Proiecte", href: "/projects" },
  { text: "Contact", href: "/contact" }
];


const NavItem = ({ text, href, active }) => {
    return (
      <Link to={href}>
        <div
          className={`nav__item ${
            active ? "active" : ""
          }`}
        >
          {text}
        </div>
      </Link>
    );
  };


export const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

