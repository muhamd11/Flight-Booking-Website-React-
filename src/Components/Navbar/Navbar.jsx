/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import logo from "../../Assets/logo.png";
import { CgMenuGridO } from "react-icons/cg";

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
    setActive("navbar-menu")
  } 

  return (
    <div className="navbar flex">
      <div className="navbar-one flex">
        <div>
          <SiConsul />
        </div>
        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" /> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" /> Languages
          </li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className="navbar-two flex">
        <div className="logo-div">
          <img src={logo} alt="Flight Website Logo" className="logo" />
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavbar}>Home</li>
            <li onClick={removeNavbar}>About</li>
            <li onClick={removeNavbar}>Offers</li>
            <li onClick={removeNavbar}>Seats</li>
            <li onClick={removeNavbar}>Destinations</li>
          </ul>
          <button onClick={removeNavbar} className="btn btn-one">Contact</button>
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
