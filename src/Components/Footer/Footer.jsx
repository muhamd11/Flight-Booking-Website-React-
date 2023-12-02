/* eslint-disable no-unused-vars */
import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { IoAirplane } from "react-icons/io5";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section-container containerv grid">
        <div className="grid-one grid container">
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="social-icon flex">
            <TiSocialFacebook className="icon"/>
            <AiOutlineTwitter className="icon"/>
            <AiFillYoutube className="icon"/>
            <FaPinterestP className="icon"/>
          </div>
        </div>
        <div className="footer-links">
          <span className="link-tilte">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Check-In</a>
          </li>
          <li>
            <a href="">Manage Your Booking</a>
          </li>
        </div>
        <div className="footer-links">
          <span className="link-tilte">Quick Guide</span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How To</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>
          <li>
            <a href="">Our Communities</a>
          </li>
        </div>
        <div className="footer-links">
          <span className="link-tilte">Queries</span>
          <li>
            <a href="">Chauffuer</a>
          </li>
          <li>
            <a href="">Our Partners</a>
          </li>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Transportation</a>
          </li>
          <li>
            <a href="">Programme Rules</a>
          </li>
        </div>
      </div>
      <div className="copy-right-div flex">
        <p>Courtesy Design | Developed By <a href="https://emailto-muhamed.medhat11@gmail.com" target="__blank">Muhamed</a></p>
      </div>
    </div>
  );
};

export default Footer;
