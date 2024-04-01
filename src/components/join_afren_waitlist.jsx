import React from 'react'
import '../styles/waitlist.css'
import { useNavigate } from 'react-router-dom'


export default function join_afren_waitlist() {
  const navigate = useNavigate()
  function handleNavigate(){
    navigate('/waitlist')
    window.scrollTo(0,0)
  }
  return (
    <section className="sixth-section">
        <p>Join the Afren Waitlist </p>
        <p>Be the first to experience the future of freelancing! Don't miss out on exclusive early access, exciting updates, and game-changing opportunities. Sign up today and unlock a world of possibilities for your freelance career or projects. Join the revolution with Afren!</p>
        <button onClick={handleNavigate} className='text-primary-color'>Join waitlist</button>
    </section>
  )
}
