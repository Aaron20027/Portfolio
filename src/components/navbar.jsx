import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const navbarItems = [
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Skills",
    link: "/#skills",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
  {
    title: "Contact",
    link: "/#contact",
  },

  {
    title: "Practicum",
    link: "/practicum",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <span className="link logo">Aaron</span>

      <div className="menu-items">
        {navbarItems.map((item, index) => (
          <a key={index} className="link" href={item.link}>
            {item.title}
          </a>
        ))}
      </div>

      {/* Hamburger icon */}
      <div className="mobile-menu-icon" onClick={toggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Popup menu */}
      {isOpen && (
        <div className="mobile-popup-menu">
          {navbarItems.map((item, index) => (
            <a
              key={index}
              className="link"
              href={item.link}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
