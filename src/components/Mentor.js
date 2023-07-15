import React from 'react'

function Mentor({image,name,role}) {
  return (
    <div className='Mentor' >
        <img src={image} alt="" />
        <h3> {name} <br/> <span>{role}</span> </h3>
        <p> <i>fB</i> <i>Twitter</i>  </p>
    </div>
  )
}

export default Mentor