import '../landingpage.css'
import '../featurespage.css';
import '../visionpage.css';
import Header from '../components/Header'
import vision from '../assets/images/rafiki.png'
import BridgingGap from '../components/BridgingGap';
import Testimonial from '../components/Testimonial';
import Join_afren_waitlist from '../components/join_afren_waitlist'
import Footer from '../components/Footer'
import GetInTouch from '../components/GetInTouch';
import { useGlobalContext } from '../Context';
import ModalForm from '../components/ModalForm';


export default function Visionpage() {
    const {popUp} = useGlobalContext()
  return (
    <>
        <GetInTouch />
        {popUp && <ModalForm/>}
        <Header/>
        <BridgingGap/>
        <main>
            <div className='feature'>
                {/* <section className='vision-section'id='vision-section' >
                    <div >
                        <h3 className='text-primary-color'>
                            Our Vision
                        </h3>
                        <p className='text-black-color'>
                            At Afren, we've harnessed the power of AI to revolutionize freelancing. Our intelligent matchmaker uses advanced algorithms to recommend the best-fit freelancers for your projects based on their skills, experience, and work history
                        </p>
                        <p className='text-black-color'>
                            We strive to be the leading freelance marketplace, providing a trusted platform that fosters meaningful connections and unlocks the full potential of freelancers and businesses alike. We envision a world where talent knows no boundaries, where professionals can pursue their passions, and where businesses can access top-tier expertise to fuel their growth and innovation. Through cutting-edge technology, streamlined processes, and a relentless commitment to quality, we aim to simplify the freelancer-client relationship, making it easier for businesses to find the right talent and for freelancers to showcase their skills and build thriving careers.
                        </p>
                        <p className='text-black-color'>
                            Our vision extends beyond transactions; we aim to create a community that nurtures collaboration, learning, and mutual success. We envision a supportive environment where freelancers can connect with like-minded professionals, access resources, and grow their skills. Simultaneously, businesses can tap into a global pool of talent, seamlessly scaling their operations and staying ahead in an ever-evolving marketplace.
                        </p>
                    </div>
                    <div className='last-vision-div'>
                        <p className='text-black-color last-vision'>
                            Ultimately, our vision for Afren is to be the catalyst that transforms the freelance landscape, empowering individuals and organizations to embrace the future of work, unleash their full potential, and thrive in a connected world.
                        </p>
                        <img src={vision}/>
                    </div>
                </section> */}
                {/* <section className='mission-section' id='mission-section'>
                    <div>
                        <h3 className='text-primary-color'>
                            Our Mission
                        </h3>
                        <p className='text-black-color'>
                            Our mission at Afren is to create a dynamic and inclusive freelance marketplace that connects talented professionals with businesses worldwide. We are dedicated to transforming the way work is done by providing a platform that fosters collaboration, innovation, and mutual growth
                        </p>
                        <p className='text-black-color'>
                            We strive to empower freelancers by offering them a supportive and transparent environment where they can showcase their skills, build their portfolios, and access a wide range of opportunities. Through our platform, we aim to enable freelancers to take control of their careers, find fulfilling work, and achieve their professional aspirations.
                        </p>
                        <p className='text-black-color'>
                            For businesses, our mission is to simplify the process of finding and engaging top-tier freelance talent. We aim to provide a trusted marketplace where businesses can seamlessly discover skilled professionals who align with their specific needs. By connecting businesses with the right freelancers, we help them enhance their productivity, optimize their operations, and drive sustainable growth.
                        </p>
                        <p className='text-black-color'>
                            We are committed to maintaining the highest standards of quality and professionalism. Our mission is to uphold integrity, transparency, and fairness in all interactions within our marketplace. We prioritize building strong relationships, fostering trust, and promoting a culture of collaboration and respect.
                        </p>
                        <p className='text-black-color'>
                            As a mission-driven organization, we strive to have a positive impact on the freelance community, businesses, and the broader society. We believe in the power of freelancing to create economic opportunities, promote diversity and inclusion, and drive innovation. Through our initiatives, partnerships, and continuous improvement, we aim to contribute to the overall advancement and success of the freelance ecosystem.
                        </p>
                    </div>
                </section> */}
                <section className='message-section'>
                    <h2 className='text-primary-color'>
                        At Afren, our mission is to be the platform of choice for freelancers and businesses, providing them with the tools, opportunities, and support they need to thrive in the evolving landscape of work.
                    </h2>
                    <div className='users-message-container'>
                        <div className='users-message'>
                            <h4>
                                To Freelancers
                            </h4>
                            <p>
                                We believe that everyone has something to offer. We are committed to providing a platform where you can showcase your skills and earn a living.
                            </p>
                        </div>
                        <div className='users-message'>
                            <h4>
                                To Clients
                            </h4>
                            <p>
                                We are committed to providing you a platform where you can access a pool of talented freelancers to get your work done efficiently, diligently, and timely.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <section className='testimonial-aboutus'>
                <Testimonial  color={'#D8F3FE'}/>
            </section>
            <Join_afren_waitlist />
        </main>
        <Footer/>
    </>
  )
}
