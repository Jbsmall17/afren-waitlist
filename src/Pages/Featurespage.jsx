import '../landingpage.css'
import '../featurespage.css';
import Header from '../components/Header'
import Join_afren_waitlist from '../components/join_afren_waitlist'
import Footer from '../components/Footer'
import feature1 from '../assets/images/feature1.png'
import feature2 from '../assets/images/feature2.png'
import feature3 from '../assets/images/feature3.png'
import feature4 from '../assets/images/feature4.jpeg'
import feature5 from '../assets/images/feature5.png'
import feature6 from '../assets/images/feature6.png'
import feature7 from '../assets/images/feature7.png'
import feature8 from '../assets/images/feature8.png'
import GetInTouch from '../components/GetInTouch';
import Comp2 from '../components/Comp2';
import { useGlobalContext } from '../Context';
import ModalForm from '../components/ModalForm';

export default function Landingpage() {
    const {popUp, setPopUp} = useGlobalContext()
  return (
    <>
        <GetInTouch />
        <Header/>
        {popUp && <ModalForm />}
        <main>
            <section className='header-section'>
                <h2 className='text-primary-color'>
                    OUR BEGINNING, REMOVING WORK BARRIERS!!!
                </h2>
                <p className='text-primary-color'>
                    At Afren, we've curated the best features to ensure you enjoy a seamless freelancing experience like never before. Our platform is designed to connect you with top-notch clients or skilled professionals effortlessly. 
                    Whether you're seeking talent for your projects or offering your freelance services, Afren has you covered.
                </p>
            </section>
            <p className='feature-title text-primary-color'>Features</p>
            <section className='features-div-container'>
                <Comp2 
                    features={"AI-Powered Matchmaking"}
                    desc={"At Afren, we've harnessed the power of AI to revolutionize freelancing. Our intelligent matchmaker uses advanced algorithms to recommend the best-fit freelancers for your projects based on their skills, experience, and work history"}
                    index={0}
                    id={"aimatchmaking"}
                />
                <Comp2 
                    features={"Virtual Workspace"}
                    desc={" At Afren, we understand the importance of seamless collaboration. That's why we've created a state-of-the-art virtual workspace where you can effortlessly collaborate in real-time. Share files, exchange ideas, and manage projects all in one centralized hub."}
                    id={"virtualworkspace"}
                    index={1}
                />
                <Comp2 
                    features={"Built-in Project Management Tools"}
                    desc={"Successful project management is the key to delivering exceptional results. That's why we've integrated powerful project management tools right into our platform. Stay organized, set milestones, track progress, and communicate seamlessly with your team."}
                    id={'projectmangement'}
                    index={2}
                />
                <Comp2 
                    features={"Secure Payment Solutions"}
                    desc={"We take your financial security seriously. Our reliable and secure payment system ensures that your transactions are protected, giving you peace of mind while working on our platform."}
                    id={'securepayment'}
                    index={3}
                />
                <Comp2
                    features={"Integrated Legal Support"}
                    desc={"We understand the importance of protecting your intellectual property and ensuring smooth contract dealings. That's why we've integrated legal support right into our platform."}
                    id={'legalsupport'}
                    index={4}
                />
                <Comp2
                    features={"Customizable Profiles"}
                    desc={"Every freelancer and client is unique, and your profile should reflect that. With our customizable profiles, you have the freedom to showcase your skills and expertise in a way that truly stands out."}
                    id={'profiles'}
                    index={5}
                />
                <Comp2
                    features={"Verified Reviews & Ratings"}
                    desc={"Transparency is paramount. Our verified review and rating system empowers you to make informed decisions with confidence. Gain valuable insights from previous clients' experiences and find the perfect-fit freelancers for your project."}
                    id={"reviews"}
                    index={6}
                />
                <Comp2
                    features={"Mobile-Friendly Interface"}
                    desc={"With Afren's mobile-friendly platform, you can unleash your potential anytime, anywhere. Stay connected on the go and seize opportunities with ease. Our user-friendly interface is optimized for mobile, allowing you to access Afren effortlessly from your phone or tablet."}
                    id={"friendlyinterface"}
                    index={7}
                />
            </section>
            <div className='feature'>
                <section className='feature-section' id="aimatchmaking">
                    <div>
                        <img className="feature-image" src={feature1}/>
                    </div>
                    <div>
                        <h3 className='text-primary-color'>
                            AI-Powered Matchmaking: Seamlessly connecting the perfect client and freelancer together
                        </h3>
                        <p className='text-black-color'>
                            At Afren, we've harnessed the power of AI to revolutionize freelancing. Our intelligent matchmaker uses advanced algorithms to recommend the best-fit freelancers for your projects based on their skills, experience, and work history
                        </p>
                        <p className='text-black-color'>
                            No more sifting through endless profiles or searching for the right talent. Our AI matchmaker ensures that freelancers are effortlessly connected to projects that perfectly align with their expertise and qualifications.
                        </p>
                        <p className='text-black-color'>
                            Experience the ease and efficiency of our AI-powered matchmaking. Focus on what you do best while we handle the seamless collaboration between freelancers and clients.
                        </p>
                    </div>
                </section>
                <section className='feature-section' id="virtualworkspace">
                    <div>
                        <img className="feature-image" src={feature2}/>
                    </div>
                    <div>
                        <h3 className='text-primary-color'>
                            Virtual Workspace
                        </h3>
                        <p className='text-black-color'>
                            At Afren, we understand the importance of seamless collaboration. That's why we've created a state-of-the-art virtual workspace where you can effortlessly collaborate in real-time. Share files, exchange ideas, and manage projects all in one centralized hub.
                        </p>
                        <p className='text-black-color'>
                            No more scattered communication or endless back-and-forths. With our integrated virtual workspace, you and your team can stay connected, productive, and organized from anywhere in the world.
                        </p>
                    </div>
                </section>
                <section className='feature-section' id='projectmangement'>
                    <div>
                        <img className="feature-image" src={feature3}/>
                    </div>
                    <div>
                        <h3 className='text-primary-color'>
                            Built-in Project Management Tools
                        </h3>
                        <p className='text-black-color'>
                            Successful project management is the key to delivering exceptional results. That's why we've integrated powerful project management tools right into our platform. Stay organized, set milestones, track progress, and communicate seamlessly with your team.
                        </p>
                        <p className='text-black-color'>
                            No need to juggle multiple apps or worry about missed deadlines. With our robust project management tools, you can keep everything in one place, ensuring smooth collaboration and successful project delivery.
                        </p>
                    </div>
                </section>
                <section className='feature-section' id="securepayment">
                    <div>
                        <img className="feature-image" src={feature4}/>
                    </div>
                    <div>
                        <h3 className='text-primary-color'>
                            Secure Payment Solutions
                        </h3>
                        <p className='text-black-color'>
                            We take your financial security seriously. Our reliable and secure payment system ensures that your transactions are protected, giving you peace of mind while working on our platform.
                        </p>
                        <p className='text-black-color'>
                            No more worries about payment mishaps or unauthorized access. With our robust and trusted payment solutions, you can focus on what matters most – delivering top-notch work to your clients.
                        </p>
                    </div>
                </section>
                <section className='feature-section' id='legalsupport'>
                    <div>
                        <img className="feature-image" src={feature5}/>
                    </div>
                    <div>
                        <h3 className='text-primary-color'>
                            Integrated Legal Support
                        </h3>
                        <p className='text-black-color'>
                            We understand the importance of protecting your intellectual property and ensuring smooth contract dealings. That's why we've integrated legal support right into our platform.
                        </p>
                        <p className='text-black-color'>
                        No more fretting over legal complications or contract disputes. With Afren's built-in legal assistance, both clients and freelancers can confidently navigate any legal challenges that may arise during their collaboration. 
                        </p>
                        <p className='text-black-color'>
                        Your creativity and hard work are valuable, and we want to safeguard your rights every step of the way. Focus on what you do best, and leave the legal complexities to us.
                        </p>
                    </div>
                </section>
                <section className='feature-section' id="profiles">
                    <div>
                        <img className="feature-image" src={feature6}/>
                    </div>
                    <div>
                        <h3 className='text-primary-color'>
                            Customizable Profiles
                        </h3>
                        <p className='text-black-color'>
                            Every freelancer and client is unique, and your profile should reflect that. With our customizable profiles, you have the freedom to showcase your skills and expertise in a way that truly stands out.
                        </p>
                        <p className='text-black-color'>
                            No more generic templates or cookie-cutter profiles – personalize your Afren profile to highlight your strengths, achievements, and aspirations. Captivate potential clients or freelancers who align with your vision and objectives.
                        </p>
                        <p className='text-black-color'>
                            Your journey on Afren begins with a profile that speaks to your individuality and sets you apart from the crowd.
                        </p>
                    </div>
                </section>
                <section className='feature-section' id='reviews'>
                    <div>
                        <img className="feature-image" src={feature7}/>
                    </div>
                    <div>
                        <h3 className='text-primary-color'>
                            Verified Reviews & Ratings
                        </h3>
                        <p className='text-black-color'>
                            Transparency is paramount. Our verified review and rating system empowers you to make informed decisions with confidence. Gain valuable insights from previous clients' experiences and find the perfect-fit freelancers for your project.
                        </p>
                        <p className='text-black-color'>
                            No more guesswork or uncertainty, our trustworthy reviews and ratings provide an accurate depiction of freelancers' capabilities. Rest assured that you're partnering with skilled professionals who have earned the trust and praise of their clients.
                        </p>
                    </div>
                </section>
                <section className='feature-section' id='friendlyinterface'>
                <div>
                        <img className="feature-image" src={feature8}/>
                    </div>
                    <div>
                        <h3 className='text-primary-color'>
                            Mobile-Friendly Interface
                        </h3>
                        <p className='text-black-color'>
                            With Afren's mobile-friendly platform, you can unleash your potential anytime, anywhere. Stay connected on the go and seize opportunities with ease. Our user-friendly interface is optimized for mobile, allowing you to access Afren effortlessly from your phone or tablet.
                        </p>
                        <p className='text-black-color'>
                            No matter where life takes you, Afren keeps you in the loop and empowers you to seize the moment. Whether you're commuting, travelling, or taking a well-deserved break, your freelance journey continues with Afren's mobile convenience.
                        </p>
                    </div>
                   
                </section>
            </div>
            <Join_afren_waitlist />
        </main>
        <Footer />
    </>
  )
}
