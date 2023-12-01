/* eslint-disable no-unused-vars */
import React from "react";
import image3 from "../../Assets/image3.jpg";
import image4 from "../../Assets/image4.jpg";
import image5 from "../../Assets/image5.jpg";
import image6 from "../../Assets/image6.jpg";
import image7 from "../../Assets/image7.jpg";
import image8 from "../../Assets/image8.jpg";
import image9 from "../../Assets/image9.jpg";
import image10 from "../../Assets/image10.jpg";

const travelers = [
  {
    id: 1,
    destinationImage: image3,
    travelerImage: image7,
    travelerName: "muhamd",
    socialLink: "@muhamd11",
  },
  {
    id: 2,
    destinationImage: image4,
    travelerImage: image8,
    travelerName: "muhamd",
    socialLink: "@muhamd11",
  },
  {
    id: 3,
    destinationImage: image5,
    travelerImage: image9,
    travelerName: "muhamd",
    socialLink: "@muhamd11",
  },
  {
    id: 4,
    destinationImage: image6,
    travelerImage: image10,
    travelerName: "muhamd",
    socialLink: "@muhamd11",
  },
];

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="section-container">
        <h2>Top Travelers of this month !</h2>
        <div className="travelers-container grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                <div className="single-traveler" key={id}>
                  <img src={destinationImage} className="destination-image" />
                  <div className="traveler-details">
                    <div className="traveler-picture">
                      <img src={travelerImage} className="traveler-image" />
                    </div>
                    <div className="traveler-name">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
