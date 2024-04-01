import React,{useRef, useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BridgingGap from '../components/BridgingGap'
import ceo from '../assets/images/ceo.png'
import marketing from '../assets/images/marketing.png'
import busola from '../assets/images/busola.png'
import cto from '../assets/images/cto.png'
import haqq from '../assets/images/haqq.png'
import Testimonial from '../components/Testimonial'
import '../styles/about.css'
import GetInTouch from '../components/GetInTouch'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import JoinWaitlist from "../components/join_afren_waitlist"
import { useGlobalContext } from '../Context'
import ModalForm from '../components/ModalForm'

export default function AboutUs() {
    const [count, setCount] = useState(1)
    const [ismotionLeft,setIsMotionLeft] = useState(true)
    const [position, setPosition] = useState(0)
    const {popUp} = useGlobalContext()
    const settings = {
        customPaging: function(i) {
            return (
                <div  className='slider'></div>
            );
          },
          appendDots: dots => (
            <ul className='slick-dots'>
                {dots}
            </ul>
          ),
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 3,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    infinite: true,
                    autoplay: true,
                    speed: 500,
                    slidesToShow: 2,
                    swipeToSlide: true,
                    slidesToScroll: 2,
                    autoplaySpeed: 1000,
                    pauseOnHover: true,
                    cssEase: "linear"
                }
            },
            {
                breakpoint: 600,
                settings: {
                    customPaging: function(i) {
                        return (
                            <div  className='slider'></div>
                        );
                      },
                      appendDots: dots => (
                        <ul className='slick-dots'>
                            {dots}
                        </ul>
                      ),
                    dots: true,
                    infinite: true,
                    autoplay: true,
                    speed: 500,
                    slidesToShow: 1,
                    swipeToSlide: true,
                    slidesToScroll: 1,
                    autoplaySpeed: 1000,
                    pauseOnHover: true,
                    cssEase: "linear"
                }
              }
        ]
      };
  return (
    <>
        <GetInTouch />
        {popUp && <ModalForm />}
        <Header />
        <main>
            <BridgingGap />
            <section className="platform">
                <p className="text-primary-color">Our Platform</p>
                <p>Afren Incorporated is a human cloud business-to-business e-commerce technology platform that connects businesses with skilled freelance professionals in Africa. Our platform is the ultimate destination for clients looking for high-quality, cost-effective solutions and talented professionals seeking flexible work arrangements.</p>  
            </section>
            <section className="care-for-you">
                <p className="text-primary-color">
                    We Care For You
                </p>
                <p>
                    How we empower you…. At Afren, we are passionate about empowering freelancers and providing them with the tools and support they need to succeed. Our platform simplifies the hiring process for both freelancers and clients, providing a secure, user-friendly environment for them to collaborate and complete projects.
                </p>
                <p>
                    Our cutting-edge technology platform features a range of powerful tools and features that make it easy for businesses to find, hire, and manage freelancers in Africa. We offer secure and transparent payment processing, project management tools, and virtual communication tools that facilitate seamless collaboration between businesses and freelancers.
                </p>
                <p>
                    Our global network of talented freelancers spans a wide range of industries and specialties, ensuring that clients can find the right professional for their specific needs. We also provide freelancers with access to a vast pool of job opportunities, enabling them to showcase their skills, build their portfolios, and grow their businesses.
                </p>
            </section>
            <section className="mission-vision">
                <div id="vision-section">
                    <div className="semi-circle"></div>
                    <p className='vision-title'>Our Vision</p>
                    <p className='vision-statement'>
                        To be the catalyst that Transform the feelance landscape,empower individuals
                        and organizations to embrace the future of work, unleash thier potential and thrive
                        connected world.
                    </p>
                </div>
                <div id="mission-section">
                    <div className="semi-circle"></div>
                    <p className='mission-title'>Our Mission</p>
                    <p className='mission-statement'>
                        To transform the way work is done by Providing a platform that fosters collaboration,innovation
                        and mutual growth.
                    </p>
                </div>
            </section>
            <section className="avengers" id="ourTeam">
                <p className="text-primary-color">
                    Meet the Avengers
                </p>
                <Slider {...settings}>
                        <TeamMember
                    link={ceo}
                    alt={'picture of afren ceo'}
                    name={' Basit Raheem'}
                    position= {'CEO/PRODUCT'}
                            description={'Closed on half a decade years of experience In growth and product strategy.'}
                        />
                        <TeamMember 
                            link={cto}
                        alt={'picture of chief thecnology officer'}
                        name={'Fikayo Peters'}
                        position={'cto'}
                            description={'A full-stack developer leading our tech innovations with passion and expertise.'}
                        />
                        <TeamMember 
                            link={marketing}
                    alt={'picture of afren head of marketing'}
                    name={'Nallam Jaya Amruth'}
                    position={'HEAD OF PRODUCT'}
                            description={'Experienced Product Marketing Manager with a proven track record of successfully launching and promoting innovative products in the tech industry.'}
                        />
                        <TeamMember
                            link={busola}
                    alt={'picture of afren head of design'}
                    name={'Busola Falope'}
                    position={'Head of Design / Product'}
                            description={'A visionary design and product leader, spearheading creativity and product innovation at Afren.'}
                        />
                        <TeamMember
                            link={haqq}
                    alt={'picture of software engineer'}
                    name={'Abdulhaqq'}
                    position={'Software Engineer'}
                            description={'A talented software engineer with 5years of experience, dedicated to crafting innovative solutions and driving Afren’s platform success.'}
                        />
                </Slider>
            </section>
            <Testimonial  bkground={'#fff'} color={'#D8F3FE'}/>
        </main>
        <JoinWaitlist />
        <Footer />
    </>
  )
}

function TeamMember({link,alt,name,position,description}){

    return(
        <div className='teamMember'>
            <img src={link} alt={alt} />
            <p className='text-primary-color'>{name}</p>
            <p className='text-primary-color'>- {position}</p>
            <p className="text-primary-color">
                {description}
            </p>
        </div>
    )
}