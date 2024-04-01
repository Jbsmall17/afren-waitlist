import React, {useEffect} from 'react'
import logo from '../assets/images/afrenlogo.png'
import '../styles/footer.css'
import { useNavigate,NavLink } from 'react-router-dom'
import { useGlobalContext } from '../Context'
export default function footer() {
    const navigate = useNavigate()
    const {count,setCount} = useGlobalContext()
    function setCountValue(string){
        if(string == '#indemand-services'){
            setCount(1)
        }
        else if(string == '#trending-services'){
            setCount(2)
        }
        else{
            setCount(3)
        }
    }
    function servicesClickHandler(event){
        event.preventDefault()
        navigate("/")
        const targetId = event.currentTarget.getAttribute('href');
        setCountValue(targetId)
        setTimeout(()=>{
            if(window.innerWidth <= 768){
                const targetElement = document.querySelector(targetId)
                const headerElement = document.querySelector('.header')
                const headerElementHeight = headerElement.getBoundingClientRect().height
                if(targetElement){
                    const targetPosition = targetElement.offsetTop - headerElementHeight
                    window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                })
                }
            }
            else{
                const targetElement = document.querySelector('.services-container')
                const headerElement = document.querySelector('.header')
                const headerElementHeight = headerElement.getBoundingClientRect().height
                if(targetElement){
                    const targetPosition = targetElement.offsetTop - headerElementHeight
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    })
                }
            }
        },50)

    }
    function handleNavigate(){
        const windowVerticlPosition = window.scrollY;

        window.scrollTo(0, -windowVerticlPosition)
    }
    function contactClickHandler(){
        const windowVerticlPosition = window.scrollY;

        window.scrollTo(0, -windowVerticlPosition)
    }
    function aboutUsHandler(){
        const windowVerticlPosition = window.scrollY;
        window.scrollTo(0,-windowVerticlPosition)
    }
    function ourTeamClickHandler(event){
        event.preventDefault()
        navigate('/about-us') 
        const targetId = event.currentTarget.getAttribute('href')
        setTimeout(()=>{
            const targetElement = document.querySelector(targetId)
            const headerElement = document.querySelector('.header')
            const headerElementHeight = headerElement.getBoundingClientRect().height
            if(targetElement){
                const targetPosition = targetElement.offsetTop - headerElementHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'    
                })
            }    
        },50)
    }
    function visonClickHandler(event){
        event.preventDefault()
        navigate('/about-us')
        const targetId = event.currentTarget.getAttribute('href');
        setTimeout(()=>{
            const targetElement = document.querySelector(targetId);
            const headerElement = document.querySelector('.header')
            const headerElementHeight = headerElement.getBoundingClientRect().height
            if(targetElement){
                const targetPosition = targetElement.offsetTop - headerElementHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                })
        }
        },50)
    }
    useEffect(()=>{
        const link_Team = document.querySelector('.link-team2')
        link_Team.addEventListener('click',ourTeamClickHandler)
        return(()=>{
            link_Team.removeEventListener('click',ourTeamClickHandler)
        })
    
    },[])
    useEffect(()=>{
        const vision_link = document.querySelectorAll('.link-vision2')
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
        const service_links = document.querySelectorAll('.link2');
        service_links.forEach((link,index)=>{
            link.addEventListener('click',servicesClickHandler)
        })
        return ()=>{
            service_links.forEach((link,index)=>{
                link.removeEventListener('click',servicesClickHandler)
            })
        }
    })
  return (
    <footer className='footer'>
        <div className='footer-body'>
            <div>
            <img src={logo} alt="afren logo" />
            </div>
            <div>
                <div>
                <p>Join Waitlist</p>
                <ul>
                    <li><NavLink onClick={handleNavigate} to="/client">For Clients</NavLink></li>
                    <li><NavLink onClick={handleNavigate} to="/freelancer">For Freelancers</NavLink></li>
                </ul>
                </div>
                <div>
               <p>Resources</p>
               <ul>
                <li><NavLink onClick={handleNavigate} to="/features">Features</NavLink></li>
                <li><a  className='link2'href="#indemand-services">In demand Services</a></li>
                <li><a  className='link2' href="#trending-services">Trending Services</a></li>
                <li><a  className='link2' href="#underserved-services">Underserved Services</a></li>
               </ul>
                </div>
                <div>
               <p>About</p>
               <ul>
                <li><NavLink onClick={aboutUsHandler} to="/about-us">About Us</NavLink></li>
                <li><a className="link-vision2" href='#vision-section'>Our Vision</a></li>
                <li><a className='link-vision2' href="#mission-section">Our Mission</a></li>
                <li><a className='link-team2' href='#ourTeam'>Our Team</a></li>
                <li><NavLink onClick={handleNavigate} to="/news">News</NavLink></li>
                <li><NavLink onClick={contactClickHandler} to="/contact">Contact Us</NavLink></li>
               </ul>
                </div>
                <div>
               <p>Connect with us</p>
               <ul>
                    <li><a href="mailto:info@afreninc.com">info@afreninc.com</a></li>
                </ul> 
                </div>
            </div>
        </div>
        <p>© 2023 Afren  LLC. All Rights Reserved. | Terms of Service</p>
    </footer>
  )
}
