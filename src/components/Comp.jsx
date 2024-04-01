import React from 'react'
import logo from '../assets/images/afrenlogo.png'
import { useNavigate } from 'react-router-dom'
import illustration from '../assets/images/cuate.png'

export default function Comp() {
  const navigate = useNavigate()

  return (
    <section className='illustration'>
        <img onClick={()=>navigate('/')} src={logo} alt="afren logo" />
        <p className="text-primary-color">
            Thank you for your interest in joining Afren 
        </p>
        <p className="text-primary-color">
            By filling out this form, you will be added to our exclusive waitlist and be among the first to be notified when Afren officially launches. We look forward to bringing you exceptional freelance opportunities and empowering your professional journey.  
        </p>
        <img src={illustration} alt="illustration" />     
    </section>
  )
}
