import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <div className='card' ><svg xmlns="http://www.w3.org/2000/svg" width="397" height="839" viewBox="0 0 397 839" fill="none">
  <path d="M0 0H397V839H103C46.1147 839 0 792.885 0 736V0Z" fill="#00487C"/>
</svg></div>
      <div className='herocard' >
        <div className='info' >
          <h1 >"Unlock your potential as a <span style={{color:"#00487C ",fontWeight:"800"}} >Mentor</span>  and empower
            others to thrive."</h1>
          <div className='buttons'>
            <button>Get Started as a Mentor <i><svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
  <path d="M2.92944 9.4353L16.6526 9.29845M11.5476 2.91125L18.0706 9.43424L11.4162 16.0886" stroke="#00A896" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round"/>
</svg></i> </button>
            <button>Learn More<i><svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
  <path d="M2.92944 9.4353L16.6526 9.29845M11.5476 2.91125L18.0706 9.43424L11.4162 16.0886" stroke="#00A896" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round"/>
</svg></i></button>
          </div>
        </div>
        <img className='heroImg' src="Rectangle2.png" alt="" srcSet="" />
      </div>
    </>
  )
}

export default HeroSection