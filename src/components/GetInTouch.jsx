import React from 'react'
import '../styles/getintouch.css'
import { useNavigate, NavLink } from 'react-router-dom'
import { useGlobalContext } from '../Context'

export default function GetInTouch() {
  const navigate = useNavigate()
  const {popUP,setPopUp} = useGlobalContext()
  const clickHandler = () =>{
    // const distanceWindowScrolled = window.scrollY
    // window.scrollTo(0, -distanceWindowScrolled)
    setPopUp(true)
  }
  return (
    <div className='getintouch'>
      {/* <a href='mailto:info@afreninc.com'>Get in Touch</a> */}
      <NavLink onClick={clickHandler} to='#'>Get in Touch</NavLink>
    </div>
  )
}
