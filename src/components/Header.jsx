import React, {useState,useEffect,useRef} from 'react'
import '../styles/header.css'
import logo from '../assets/images/afrenlogo.png'
import { NavLink,useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { IconContext } from "react-icons";
import { FaCaretDown } from 'react-icons/fa';
import { useGlobalContext } from '../Context'

export default function Header() {
    const [isActive, setIsActive] = useState(false)
    const headerRef = useRef(null)
    const {count, setCount} = useGlobalContext() 
    const navigate = useNavigate()
    function handleNavigate(link){
        navigate(link)
    }
    function scrollWindowUp(){
        window.scrollTo(0,0)        
    }
    function handleClick(){
        setIsActive(prev => !prev)
    }
    function jointClickHandler(){
        handleNavigate('/waitlist')
        window.scrollTo(0,0)
    }
    function clickHandler(event){
        event.preventDefault()
        handleNavigate('/features')
        const headerEl = headerRef.current
        const headerElHeight = headerEl.getBoundingClientRect().height
        const targetId = event.currentTarget.getAttribute('href')
        setTimeout(()=>{
            const targetElement = document.querySelector(targetId)
            console.log(targetElement)
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - headerElHeight;
                window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
                });
            }
        },50)
    }
    function visonClickHandler(event){
                event.preventDefault()
                navigate('/about-us')
                const headerEl = headerRef.current
                const headerElHeight = headerEl.getBoundingClientRect().height; 
                const targetId = event.currentTarget.getAttribute('href');
                setTimeout(()=>{
                    const targetElement = document.querySelector(targetId)
                    if(targetElement){
                        const targetPosition = targetElement.offsetTop - headerElHeight;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: "smooth"
                        })
                    }
                },50)
    }
    function ourTeamClickHandle(event){
        event.preventDefault()
        navigate('/about-us')
        const headerEl = headerRef.current
        const headerElHeight = headerEl.getBoundingClientRect().height; 
        const targetId = event.currentTarget.getAttribute('href')
        setTimeout(()=>{
            const targetElement = document.querySelector(targetId);
            if(targetElement){
                const targetPosition = targetElement.offsetTop - headerElHeight
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                })
            }
        },50)
    }
    function setCountValue(string){
        if(string == '#indemand-services'){
            setCount(1)
        }
        else if(string == '#trending-services'){
            setCount(2)
        }
        else if (string == '#underserved-services'){
            setCount(3)
        }
        else{
            setCount(1)
        }
    }
    function serviceClickHandler(event){
        event.preventDefault()
        handleNavigate('/')
        const headerEl = headerRef.current
        const headerElHeight = headerEl.getBoundingClientRect().height;
        const targetId = event.currentTarget.getAttribute("href")
        setCountValue(targetId)
        setTimeout(()=>{
            if(window.innerWidth <= 768){
                const targetElement = document.querySelector(targetId)
                if(targetElement){
                    const targetPosition = targetElement.offsetTop - headerElHeight
                    window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                })
                }
            }
            else{
                const targetElement = document.querySelector('.services-container')
                if(targetElement){
                    const targetPosition = targetElement.offsetTop - headerElHeight
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    })
                }
            }
        },50)
    }
    useEffect(()=>{
        const service_links = document.querySelectorAll(".link")
        service_links.forEach((link,index)=>{
            link.addEventListener("click", serviceClickHandler)
        })
        return ()=>{
            service_links.forEach((link,index)=>{
                link.removeEventListener("click", serviceClickHandler)
            })  
        }
    })
    useEffect(()=>{
            const Feature_links = document.querySelectorAll('.features-link');
            Feature_links.forEach((link,index)=>{
                link.addEventListener('click',clickHandler)
            })
        return ()=>{
            const Feature_links = document.querySelectorAll('.features-link');
            Feature_links.forEach((link,index)=>{
                link.removeEventListener('click',clickHandler)
            })
        }
    },[])
    useEffect(()=>{
        const vision_link = document.querySelectorAll('.link-vision')
        vision_link.forEach((link)=>{
            link.addEventListener('click', visonClickHandler)
        })
        return ()=>{
            vision_link.forEach((link)=>{
                link.removeEventListener('click', visonClickHandler)
            })  
        }
    },[])
    useEffect(()=>{
        const link_Team = document.querySelector('.link-team')
        link_Team.addEventListener('click',ourTeamClickHandle)
        return(()=>{
            link_Team.removeEventListener('click',ourTeamClickHandle)
        })

    },[])
  return (
    <header ref={headerRef} className='header bg-white-color'>
        <div>
            <img onClick={()=>{handleNavigate('/');scrollWindowUp()}} 
            src={logo} 
            alt="afren logo" 
            />
            <nav className={ isActive ? 'active' : null}>
                <ul>
                    <li className='dropdown'>
                        <NavLink onClick={scrollWindowUp} className='text-black-color dropbtn' to="/features"> Features <FaCaretDown className="dropdown-icon" /></NavLink>
                        <div className="dropdown-content">
                            <a className='features-link' href='#aimatchmaking'>AI-Powered Matchmaking</a>
                            <a className='features-link' href="#virtualworkspace">Virtual Workspace</a>
                            <a className='features-link' href="#projectmangement">Built-in Project Management Tools</a>
                            <a className='features-link' href="#securepayment">Secure Payment Solutions</a>
                            <a className='features-link' href="#legalsupport">Integrated Legal Support</a>
                            <a className='features-link' href="#profiles">Customizable Profiles</a>
                            <a className='features-link' href="#reviews">Verified Reviews & Ratings</a>
                            <a className='features-link' href="#friendlyinterface">Mobile-Friendly Interface</a>
                        </div>
                    </li>
                    {/* <li className='dropdown'><NavLink className='text-black-color dropbtn' to="/features"> Value Proposition</NavLink></li> */}
                    <li className='dropdown'>
                        <NavLink className='text-black-color dropbtn link' to="/">Service Category <FaCaretDown className="dropdown-icon" /></NavLink>
                        <div className="dropdown-content">
                            <a className='link'   href='#indemand-services'>In-demand Services</a>
                            <a className='link'   href="#trending-services">Trending Services</a>
                            <a className='link' href="#underserved-services">Underserved services</a>
                        </div>
                    </li>
                    <li className='dropdown'>
                        <NavLink onClick={scrollWindowUp} className='text-black-color dropbtn' to="/about-us" >About <FaCaretDown className="dropdown-icon" /></NavLink>
                        <div className="dropdown-content">
                            {/* <NavLink onClick={aboutUsHandle} to="/about-us">About Us</NavLink> */}
                            <a className="link-vision" href='#vision-section'>Vision</a>
                            <a className='link-vision' href="#mission-section">Mission</a>
                            <a className='link-team' href='#ourTeam'>Our Team</a>
                            <NavLink onClick={scrollWindowUp} to="/news">News</NavLink>
                            <NavLink onClick={scrollWindowUp} to="/contact">Contact Us</NavLink>
                        </div>
                    </li>
                </ul>
                <button  onClick={jointClickHandler} className='bg-primary-color text-white-color'>
                    Join waitlist
                </button>
            </nav>
            <div className="icons">
                <IconContext.Provider value={{ color: "#015B7E", className: "icon", size : "2em" }}>
                    { !isActive
                     ?  <GiHamburgerMenu 
                            onClick={handleClick}
                        />
                    : <GrClose 
                            onClick={handleClick}
                        />
                    }
                </IconContext.Provider>
            </div>
        </div>
    </header>
  )
}