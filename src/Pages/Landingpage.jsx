import React,{useEffect, useState} from 'react'
import '../landingpage.css'
import Header from '../components/Header'
import picture from '../assets/images/picture.png'
import picture2 from '../assets/images/picture2.png'
import frame_pic from '../assets/images/best_for_you.png'
import Testimonial from '../components/Testimonial'
import Join_afren_waitlist from '../components/join_afren_waitlist'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import ai from '../assets/images/ai_specialist.png'
import bd from '../assets/images/blockchain_development.png'
import cyber_security from '../assets/images/cyber_security.png'
import data_privacy from '../assets/images/data_privacy.png'
import data_analysis from '../assets/images/data_analysis.png'
import sd from '../assets/images/software_development.png'
import ui_ux from '../assets/images/ui_ux.png'
import ux_researcher from '../assets/images/ux_researcher.png'
import vd from '../assets/images/virtual_developer.png'
import Service from '../components/Service'
import GetInTouch from '../components/GetInTouch'
import { useGlobalContext } from '../Context'
import ModalForm from '../components/ModalForm'


export default function Landingpage() {
    const [isScreenSmall,setScreenSmall] = useState(false)
    const [isMotionLeft,setIsMotionLeft] = useState(true)
    // const [count, setCount] = useState(1)
    const [firstTimeRendering, setFirstTimeRendering] = useState(true)
    const {count,setCount,popUp,setPopUp} = useGlobalContext()
    const navigate = useNavigate()
    // console.log(window.innerWidth)
    function handleNavigate(link){
        navigate(link)
        window.scrollTo(0,0)
    }
    useEffect(()=>{
        if(window.innerWidth <= 768){
            setScreenSmall(true)
            return 
        }
        setFirstTimeRendering(false)
    },[])
    return (
    <>
        <GetInTouch />
        <Header />
        {popUp && <ModalForm />}
        <main>
            <section className='first-section'>
                <p className='text-black-color'>
                    Discover top talents! <br/><span>Find freelance jobs, earn and make a living.</span>
                </p>
                <p className='text-black-color'>
                    Join the exclusive Afren waitlist.
                </p>
                <button onClick={()=>handleNavigate('/waitlist')} className='bg-primary-color text-white-color'>Join waitlist</button> 
            </section>
            <section className='second-section'>
                <div className='stats-container'>
                    <div className='stats'>
                    <div className='stats-item'>
                        <p className='text-primary-color'>300+</p>
                        <p>client</p>
                    </div>
                    <div className='stats-item'>
                        <p className='text-primary-color'>500+</p>
                        <p>Freelancers</p>
                    </div>
                    <div className='stats-item'>
                        <p className='text-primary-color'>400+</p>
                        <p>Jobs</p>
                    </div>
                    </div>
                </div>
                <p className='text-primary-color'> 
                    Unlock limitless opportunities and elevate your freelance 
                    career with Afren – your gateway to seamless connections 
                    between talented freelancers and discerning clients, empowering each to reach new heights in their pursuits.
                </p>
                <div>
                    <div className="item">
                        <img src={picture} alt="picture1" />
                        <p>
                            As a freelancer, you can showcase your skills to a wide range of clients and secure rewarding projects. You will also have access to a host of exclusive benefits, such as early access to new features and discounts on services.
                        </p>
                        <button 
                        onClick={()=>handleNavigate('/freelancer')} 
                        className='bg-primary-color'> 
                            Join as freelancer
                        </button>
                    </div>
                    <div className="item">
                        <img src={picture2} alt="picture1" />
                        <p>
                            As a client, you can find the perfect freelancer for your project, regardless of your budget or timeline. You can also rest assured that your project will be managed seamlessly, with Afren providing all the tools and support you need.
                        </p>
                        <button onClick={()=>handleNavigate('/client')} className='bg-primary-color' >Join as client</button>
                    </div>
                </div>
                <p className='sub-heading text-primary-color'>
                    Benefits of joining the Afren waitlist:
                </p>
                <div className="waitlist">
                    <div className='bg-primary-color'>
                        <span>01</span>
                        <p>Early access to the platform</p>
                        <p>
                            You will be among the first to test out 
                            the latest features and improvements.
                        </p>
                    </div>
                    <div className='bg-primary-color'>
                        <span>02</span>
                        <p>Exclusive discounts</p>
                        <p>You will receive special discounts on services and products</p>
                    </div>
                    <div className='bg-primary-color'>
                        <span>03</span>
                        <p>Community support</p>
                        <p>You will be able to connect with other freelancers and clients on the platform.</p>
                    </div>
                    <div className='bg-primary-color'>
                        <span>04</span>
                        <p>Stay up-to-date</p>
                        <p>You will receive regular updates on the platform's progress.</p>
                    </div>
                </div>
            </section>
        </main>
        <main>
            <section className='third-section'>
                <div>
                    <img src={frame_pic} alt=" frame picture" />
                    <div>
                        <p>We got the best for you!</p>
                        <ul>
                            <li><a href='#'>Zero percent charge rate</a></li>
                            <li><a href="#">Highly secure and instant payment system</a></li>
                            <li><a href="#">Built-in project management tools</a></li>
                            <li><a href='#'>AI-powered matchmaking</a></li>
                            <li><a href='#'>24/7 support system</a></li>
                        </ul>
                    </div>                    
                </div>
                <p className='text-primary-color' >
                    Services for you
                </p>
                <p id={!isScreenSmall ? "services" : null}>Empower your project with a diverse talent pool. Afren offers a curated workforce with a wide range of skills and specialities. From creative minds to technical wizards.</p>
            </section>
            {
                !isScreenSmall &&(
                    <section className="services-container">
                        <p 
                            // id="indemand-services"
                            className={count==1 ?'active': undefined}
                            onClick={()=>{
                                
                                if(count == 2 || count ==3 ){
                                    setIsMotionLeft(false)
                                }
                                setCount(1)
                            }}
                        >
                            In-demand services
                        </p>
                        <p 
                            // id="trending-services" 
                            className= {count==2 ? 'active' : undefined}
                            onClick={()=>{
                                if(count == 1){
                                    setIsMotionLeft(true)
                                }
                                else if(count == 3){
                                    setIsMotionLeft(false)
                                }
                                setCount(2)}}
                        >
                            Trending services
                        </p>
                        <p 
                            // id="underserved-services"
                            className= {count==3 ? 'active': undefined}
                            onClick={()=>{
                                if(count == 1 || count == 2){
                                    setIsMotionLeft(true)
                                }
                                setCount(3)}}
                        >
                            Underserved  services
                        </p>
                    </section>
                )
            }
            {!isScreenSmall &&(
            count == 1
            ?
            <Service
                type={"In-demand services"}
                id={"indemand-services"}
                img1={sd}
                desc1={"Software Development"}
                img2={ui_ux}
                desc2={"UI/UX (Product design)"}
                img3={data_analysis}
                desc3={'Data Analysis'}
                screenSize={isScreenSmall}
                selector={
                    firstTimeRendering
                    ? "forth-section"
                    :isMotionLeft
                    ?'forth-section movingLeft' 
                    :"forth-section movingRight"
                    }
            />
            : count == 2
            ?
            <Service
                type={"Trending services"}
                id={"trending-services"}
                img1={ai}
                desc1={'Artificial Intelligence Specialist'} 
                img2={cyber_security}
                desc2={'Cybersecurity'}
                img3={bd}
                desc3={'Blockchain Development'}
                screenSize={isScreenSmall}
                selector={ isMotionLeft?'forth-section movingLeft2':'forth-section movingRight2'}
            />
            :
            <Service
                type={"Underserved services"}
                id={"underserved-services"}
                img1={ux_researcher}
                desc1={'UX Researcher'}
                img2={vd}
                desc2={'Virtual Reality Developer'}
                img3={data_privacy}
                desc3={'Data Privacy Consultant'}
                screenSize={isScreenSmall}
                selector={isMotionLeft? 'forth-section movingLeft3': 'forth-section movingRight3'}
            />)
            }
            {
                isScreenSmall
                &&
                (
                <>
                <Service
                type={"In-demand services"}
                id={"indemand-services"}
                img1={sd}
                desc1={"Software Development"}
                img2={ui_ux}
                desc2={"UI/UX (Product design)"}
                img3={data_analysis}
                desc3={'Data Analysis'}
                screenSize={isScreenSmall}
                selector={'forth-section'}
                />
                <Service
                type={"Trending services"}
                id={"trending-services"}
                img1={ai}
                desc1={'Artificial Intelligence Specialist'} 
                img2={cyber_security}
                desc2={'Cybersecurity'}
                img3={bd}
                desc3={'Blockchain Development'}
                screenSize={isScreenSmall}
                selector={'forth-section'}
                />
                <Service
                type={"Underserved services"}
                id={"underserved-services"}
                img1={ux_researcher}
                desc1={'UX Researcher'}
                img2={vd}
                desc2={'Virtual Reality Developer'}
                img3={data_privacy}
                desc3={'Data Privacy Consultant'}
                screenSize={isScreenSmall}
                selector={'forth-section'}
            />
                </>
                )  
            }
            <Testimonial bkground={'#D8F3FE'} color={'#fff'}/>
            <Join_afren_waitlist />
        </main>
        <Footer />
    </>
  )
}
