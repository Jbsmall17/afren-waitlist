import React, { useEffect, useState } from 'react'
import '../styles/bridging.css'

export default function BridgingGap() {
  const [isScreenLarge, setScreenLarge] = useState(true)
  const [screen, setScreen] = useState(0)
  return (
    <section className='about-img-container'>
      <p>Bridging the gap between Client and Freelancers</p>
      <p>Our Beginning, Removing work Barriers.</p>
      {/* { window.innerWidth >= 768
        ? <img 
          src={globe} 
          alt="globe image" 
        />
        : <img 
            src={globe2} 
            alt="globe image" 
        />
      } */}
    </section>
  )
}

