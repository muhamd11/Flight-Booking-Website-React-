/* eslint-disable no-unused-vars */
import React from "react";
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";



const Info = () => {
  return (
    <div className="info section">
      <div className="info-container container">
        <div className="title-div flex">
          <h2>Travel to make memories all around the world</h2>
          <button className="btn">View All</button>
        </div>
        <div className="cards-div grid">
          <div className="single-card grid">
            <div className="icon-div flex"><RxCalendar className="icon"/></div>
            <span className="card-title">Book & Relax</span>
            <p>You can also call airlines from your phone and book a flight ticket</p>
          </div>
          <div className="single-card grid">
            <div className="icon-div flex color-one"><BsShieldCheck className="icon"/></div>
            <span className="card-title">Smart Checklist</span>
            <p>You can also call airlines from your phone and book a flight ticket</p>
          </div>
          <div className="single-card grid">
            <div className="icon-div flex color-two"><BsBookmarkCheck className="icon"/></div>
            <span className="card-title">Save More</span>
            <p>You can also call airlines from your phone and book a flight ticket</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
