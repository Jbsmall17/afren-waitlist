import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import '../styles/waitlistpage.css'
import GetInTouch from '../components/GetInTouch'
import { useGlobalContext } from '../Context'
import ModalForm from '../components/ModalForm'

export default function Waitlistpage() {
    const navigate = useNavigate()
    const {popUp} = useGlobalContext()
    function handleNavigate(link){
        navigate(link)
    }

  return (
    <>
        <GetInTouch />
        {popUp && <ModalForm />}
        <Header />
        <main className='waitlist-page'>
            <p className="text-primary-color">
                Join the Afren waitlist and unlock limitless opportunities
            </p>
            <p>
                Who are you joining as?
            </p>
            <div className="waitlist-contianer">
                <button onClick={()=>handleNavigate('/freelancer')}>
                    Freelancer 
                </button>
                <button onClick={()=>handleNavigate('/client')}>
                    Client
                </button>
            </div>
        </main>
        <Footer />
    </>
  )
}
