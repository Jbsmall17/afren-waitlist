import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landingpage'
import AboutUs from './Pages/AboutUs' 
import Freelancerpage from './Pages/Freelancerpage'
import Clientpage from './Pages/Clientpage'
import Features from './Pages/Featurespage'
import Vision from './Pages/Visionpage'
import Waitlistpage from './Pages/Waitlistpage'
import Contactpage from './Pages/Contactpage'
import News from "./Pages/News"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='features'  element={<Features />} />
        <Route path='vision'  element={<Vision />} />
        <Route path='waitlist'  element={<Waitlistpage />} />
        <Route path='freelancer' element={<Freelancerpage />} />
        <Route path='client' element={<Clientpage />} />
        <Route path='contact' element={<Contactpage />} />
        <Route path='news' element={<News />} />
      </Routes>
    </>
  )
}

export default App
