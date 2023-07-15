import React from 'react'

const Testimonial = () => {
    return (
        <div className='Testimonials' >

            <h1>Hear from Our Mentors</h1>

            <div className='content' >


                <div className='Testimonial'>

                    <div className='person' >
                        <img src="Photo.png" alt='photos' />
                        <h4> Malini sindhu <br/>
chennai , INDIA</h4>
                    </div>
                    <p> "Being a mentor on Mentor Hub has been an incredibly rewarding experience. I've had the opportunity to share my knowledge and guide aspiring professionals in their career journeys.”</p>

                </div>

                <div className='Testimonial'>

                    <div className='person' >
                        <img src="Photo.png" alt='photos' />
                        <h4>Archana Nair
kerala , INDIA</h4>
                    </div>
                    <p>"Mentor Hub has exceeded my expectations. The platform's user-friendly design and comprehensive profile customization options have allowed me to showcase my expertise and build credibility with mentees”.</p>

                </div>
                <div className='Testimonial'>

                    <div className='person' >
                        <img src="Photo.png" alt='photos' />
                        <h4>Deepak Dinesh
chennai , INDIA</h4>
                    </div>
                    <p>"As a mentor on Mentor Hub, I've been able to connect with mentees from around the world, bridging geographical boundaries. The platform's robust search functionality and categorization have made it easy for mentees to find me based on their specific needs.”</p>

                </div>

 


            </div>

        </div>
    )
}

export default Testimonial