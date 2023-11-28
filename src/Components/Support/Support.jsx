/* eslint-disable no-unused-vars */
import React from 'react'
import image1 from '../../Assets/image1.jpg'

const Support = () => {
  return (
    <div className='support container section'>
      <div className="section-container">
        <div className="titles-div">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>find help with booking and travel plans, see what to expect along the journey!</p>
        </div>
        <div className="info-div grid">
          <div className="text-div grid">
            <div className="single-info">
              <span className='number'>01</span>
              <h4>Travel requirments for Dubai</h4>
              <p>find help with booking and travel plans, see what to expect along the journey to your favourite destination!</p>
            </div>
            <div className="single-info">
              <span className='number color-one'>02</span>
              <h4>chauffeaur services at your arrival</h4>
              <p>find help with booking and travel plans, see what to expect along the journey to your favourite destination!</p>
            </div>
            <div className="single-info">
              <span className='number color-two'>03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>find help with booking and travel plans, see what to expect along the journey to your favourite destination!</p>
            </div>
          </div>
          <div className="img-div">
            <img src={image1} alt="Plane" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support