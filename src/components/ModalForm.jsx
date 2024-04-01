import React, {useState} from 'react'
import '../styles/modalForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes, faSpinner} from '@fortawesome/free-solid-svg-icons'
import { useGlobalContext } from '../Context'
import axios from "axios";
import Swal from "sweetalert2";

export default function ModalForm() {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const {popUp, setPopUp,formObj, setFormObj} = useGlobalContext()
    const [loading,setLoading] = useState(false)
    const [isFormFilled,setIsFormFilled] = useState(false)

    // console.log(formObj)
    const {fullName, email, phoneNumber, inquiry} = formObj
    function handlerChange(e){
        const {name, value} = e.target;
        setFormObj({
            ...formObj,
            [name] : value
        })
    }
    function handleClick(){
        setPopUp(false); 
        setFormObj({
            ...formObj,
            fullName : '',
            email: '',
            phoneNumber: '',
            textArea: ''
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)

        // Email validation
        if (!emailRegex.test(email)) {
            // Invalid email format
            setLoading(false);
            Swal.fire("Invalid Email", "Please enter a valid email address.", "error");
            return;
        }
        const formData = new FormData(e.target);
        const formObject = {};
        
        formData.forEach((key, value) => {
            formObject[value] = key;
        });
        //console.log(formObject);
        const endPoint = "https://afren-waitlist.onrender.com/api/message";
        axios.post(endPoint, formObject)
        .then((response)=>{
            setLoading(false)
            Swal.fire(
                "Thank you for reaching out to us!",
                "We would make sure to get back to you as soon as possible.",
                "success"
              );
            setFormObj({
                ...formObj,
                fullName : '',
                email: '',
                phoneNumber: '',
                inquiry: ''
            })
            //console.log("submitted successfully", response);
        }).catch((error) => {
            setLoading(false)
            //console.log("error", error);
          });
    }
  return (
    <div className='modal-form'>
        <form onSubmit={handleSubmit}>
            <p>Send us a message</p>
            <FontAwesomeIcon onClick={handleClick} icon={faTimes} size='2x' className='form-icon'/>
            <>
                <label htmlFor="name">Full Name</label>
                <input 
                    type="text" 
                    id='name'
                    value={fullName} 
                    onChange={handlerChange}
                    name='fullName'
                    placeholder='Full name'
                    // pattern="^[A-Za-z\s.'-]{2,}$"
                />
            </>
            <>
                <label htmlFor="email">E-mail</label>
                <input 
                    type="text" 
                    id='email'
                    onChange={handlerChange}
                    name='email'
                    value={email}
                    placeholder='youremail@mail.com'
                    // pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" 
                />
            </>
            <>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input 
                    type="tel" 
                    id='phoneNumber' 
                    name='phoneNumber'
                    value={phoneNumber}
                    onChange={handlerChange}
                    placeholder='your number'
                    // pattern="^\+?[0-9\s.-]{7,}$" 
                />
            </>
            <>
                <label htmlFor="textArea">Inquiry</label>
                <textarea 
                    name="inquiry" 
                    id="textArea"
                    onChange={handlerChange}
                    value={inquiry}
                    cols="30" 
                    rows="5"
                ></textarea>
            </>
            { fullName== ''|| email == "" || phoneNumber == "" || inquiry == ""
            ? <button type='submit' disabled>Send Message</button>
            :<button type='submit' className='btn-form'>
                { loading ? 
                    <FontAwesomeIcon icon={faSpinner} spin /> : "Send Message"
                }
            </button>
            }
        </form>
    </div>
  )
}
