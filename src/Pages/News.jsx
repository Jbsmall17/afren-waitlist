import React from 'react'
import Header from '../components/Header'
import Waitlist from '../components/join_afren_waitlist'
import Footer from '../components/Footer'
import "../styles/news.css"
import news_big_bg from "../assets/images/news_big_img.png"
import news_smll_bg from "../assets/images/news_smll_img.png"
import news_img_1 from "../assets/images/news_img_1.png"
import news_img_2 from "../assets/images/news_img_2.png"
import news_img_3 from "../assets/images/news_img_3.png"
import news_img_4 from "../assets/images/news_img_4.png"
import news_img_5 from "../assets/images/news_img_5.png"
import news_img_6 from "../assets/images/news_img_6.png"


export default function News() {
  return (
    <>
        <Header />
        {
            window.innerWidth <= 425 
            ? (
                <div className='hero-section'>
                    <img src={news_smll_bg} alt="news small screen background" />
                </div>
                )
            : ( <div className='hero-section'>
                    <img src={news_big_bg} alt="news big screen background" />
                    <div className='hero-section-flex'>
                        <div>
                           <p>Our Mission</p>
                           <p>Our Goal, Vision & Commitment</p> 
                        </div>
                        <div>
                            <p>Our Events</p>
                            <p>Register and Help Make Change</p>
                        </div>
                        <div>
                            <p>Get Involved</p>
                            <p>Volunteer, Participate & show skill</p>
                        </div>
                    </div>
                </div>
                )
        }
        <section className='news-first-section'>
            <div className='first-section-container'>
                <div>
                    <p>WHY CHOOSE US</p>
                    <p>We Find Your Next Gig With Our Freelance Job Platform</p>
                    <p>
                        We will make sure you never get fooled by client who looks for your amazing skill and we ensure you get 
                        fully paid after job completion.
                    </p>
                </div>
                <div>
                    <img className='img1' src={news_img_1} alt="news image 1" />
                    <img className='img2' src={news_img_2} alt="news image 2" />
                </div>
            </div>
        </section>
        <section className="news-second-section">
            <div className='second-section-container'>
                <div>
                    <img src={news_img_3} alt="news image 3" />
                </div>
                <div>
                    <p>Latest News</p>
                    <p>Get More Client to Notice You</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. 
                        Ut risus quis eget ut massa. Semper auctor etiam adipiscing metus tincidunt blandit lectus et venenatis. 
                        Lorem ipsum dolor sit amet consectetur. Ut risus quis eget ut massa. 
                        Semper auctor etiam adipiscing metus tincidunt blandit lectus et venenatis.
                    </p>
                    <p>Read More</p>
                </div>
            </div>
        </section>
        <section className="news-third-section">
            <div className='third-section-container'>
                <div>
                   <img src={news_img_4} alt="news image 4" />
                   <div>
                        <p>Top 10 Ways to Land Your Dream Client</p>
                        <input 
                            type="text" 
                            placeholder='write a comment'
                        />
                   </div>

                </div>
                <div>
                   <img src={news_img_5} alt="news image 5" />
                   <div>
                        <p>Top 10 Ways to Land Your Dream Client</p>
                        <input 
                            type="text" 
                            placeholder='write a comment'
                        />
                   </div>

                </div>
                <div>
                   <img src={news_img_6} alt="news image 6" />
                   <div>
                        <p>Top 10 Ways to Land Your Dream Client</p>
                        <input 
                            type="text" 
                            placeholder='write a comment'
                        />
                   </div>

                </div>
            </div>
        </section>
        <Waitlist />
        <Footer />
    </>
  )
}
