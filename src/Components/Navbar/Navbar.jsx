/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { IoAirplane } from "react-icons/io5";


const Navbar = () => {

  // Remove Navbar In Small Screen
  const [active, setActive] = useState("navbar-menu");
  const showNavbar = () => {
    active === "navbar-menu"
      ? setActive("navbar-menu show-navbar")
      : setActive("navbar-menu");
  };

  // Remove Navbar When Item Clicked
  const removeNavbar = () => {
    setActive("navbar-menu");
  };

  // Add Background While Scrolling
  const [bg, setBg] = useState("navbar-two flex");
  const addBg = () => {
    setBg("navbar-two flex add-bg");
  };
  window.addEventListener("scroll", () => {
    window.scrollY >= 10 ? addBg() : setBg("navbar-two flex");
  });

  return (
    <div className="navbar flex">
      <div className="navbar-one flex">
        <div>
          <SiConsul className="icon" />
        </div>
        <div className="mid-items none flex">
          <li className="info flex">
            <BsPhoneVibrate className="icon" /> <span>Support</span>
          </li>
          <li className="info flex">
            <AiOutlineGlobal className="icon" /> <span>Languages</span>
          </li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className={bg}>
        <div className="logo-div">
          <IoAirplane className="logo" />
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavbar}>Home</li>
            <li onClick={removeNavbar}>About</li>
            <li onClick={removeNavbar}>Offers</li>
            <li onClick={removeNavbar}>Seats</li>
            <li onClick={removeNavbar}>Destinations</li>
          </ul>
          <button onClick={removeNavbar} className="btn btn-one">
            Contact
          </button>
        </div>
        <button className="btn btn-two none">Contact</button>
        <div onClick={showNavbar} className="toggle-icon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
