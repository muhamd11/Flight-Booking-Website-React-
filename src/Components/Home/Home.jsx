/* eslint-disable no-unused-vars */
import {React, useEffect} from 'react'
import video from '../../Assets/video.mp4'
import takeOff from '../../Assets/takeoff.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    AOS.init({duration:2000})
  })

  return (
    <div className='home flex container'>
      <div data-aos='fade-down-right' className="main-text">
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