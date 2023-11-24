/* eslint-disable no-unused-vars */
import React from 'react'
import video from '../../Assets/video.mp4'
import takeOff from '../../Assets/takeoff.png'

const Home = () => {
  return (
    <div className='home flex container'>
      <div className="main-text">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>
      <div className="home-imgs flex">
        <div className="video-div">
          <video src={video} className='video' autoPlay muted loop></video>
        </div>
        <img src={takeOff} alt="plane" className='plane' />
      </div>
    </div>
  )
}

export default Home