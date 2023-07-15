import React from 'react'
import Footer from './Footer'
import Mentor from './Mentor'
import Navbar from './Navbar'

const Mentors = () => {
  return (
    <div  className='Mentors'>
        <Navbar/>
        <h1> OUR MENTORS</h1>
        <div className='Mntrs' >
        <Mentor image="Photo (1).png" name="Shalini 







" role="Software Developer" />
       
        <Mentor image="Photo (1).png" name="Deepak" role="UX Designer" />
        <Mentor image="Photo (1).png" name="Naveen" role="Architect" />
        <Mentor image="Photo (1).png" name="Deepak" role="UX Designer" />
        <Mentor image="Photo (1).png" name="Naveen" role="Architect" />
        <Mentor image="Photo (1).png" name="Deepak" role="UX Designer" />
        <Mentor image="Photo (1).png" name="Naveen" role="Architect" />
        <Mentor image="Photo (1).png" name="Naveen" role="Architect" />
       
        </div>
        <Footer/>
    </div>
  )
}

export default Mentors