/* eslint-disable no-unused-vars */
import React from 'react'
import image2 from '../../Assets/image2.jpg'

const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className="section-container grid">
        <div className="img-div">
          <img src={image2} />
        </div>
        <div className="text-div">
          <h2>Unaccompanied Minor Lounge</h2>
        </div>
        <div className="grids grid">
          <div className="single-grid">
            <span className='grid-title'>Help through the airport</span>
            <p>you can also call airlines from your phone and book a flight ticket to one of your favourite destination</p>
          </div>
          <div className="single-grid">
            <span className='grid-title'>Priorty Boarding</span>
            <p>you can also call airlines from your phone and book a flight ticket to one of your favourite destination</p>
          </div>
          <div className="single-grid">
            <span className='grid-title'>Care on the flight</span>
            <p>you can also call airlines from your phone and book a flight ticket to one of your favourite destination</p>
          </div>
          <div className="single-grid">
            <span className='grid-title'>Chauffeur-drive service</span>
            <p>you can also call airlines from your phone and book a flight ticket to one of your favourite destination</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge