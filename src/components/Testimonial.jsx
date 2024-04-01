import React from 'react'
import face_image from '../assets/images/jumoke.jpg'
import star from '../assets/images/star.png'
import "../styles/testimonial.css"

export default function Testimonial({color,bkground}) {
    const style = {
        background: color
    }
  return (
    <section className='testimonial' style={{background: bkground}}>
        <p className="para text-primary-color">
            See what our clients are saying 
        </p>
        <div style={style} className="client-container">
            <p>
                Joining Afren waitlist will make me among the first to experience the groundbreaking platform. With Afren Inc, I know I will have the opportunity to connect with top talents and access unparalleled resources to elevate my business and projects
            </p>
            <div>
                <div>
                    <img src={face_image} alt="face image" style={{borderRadius: '50%', height: '75px', width: '75px', marginBottom: '5px'}}/>
                    <div>
                        <p className="text-primary-color">Jumoke</p>
                        <div className='star-container'>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        </div>
                    </div>
                    </div>
                    <p className="text-primary-color">Verified Client</p>
                    </div>
        </div>
    </section>
  )
}
