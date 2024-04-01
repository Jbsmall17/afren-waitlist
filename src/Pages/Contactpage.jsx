import React, { useState } from "react";
import "../styles/contact.css";
import Header from "../components/Header";
import Join_afren_waitlist from "../components/join_afren_waitlist";
import Footer from "../components/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import GetInTouch from "../components/GetInTouch";

export default function Contactpage() {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const [formObj, setFormObj] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    inquiry: "",
  });
  const { fullName, email, phoneNumber, inquiry } = formObj;

  const [isFormActive, setIsFormActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormObj({
      ...formObj,
      [name]: value,
    });
  }
  function handlerSubmit(e) {
    e.preventDefault();
    setIsFormActive(false);
    setIsLoading(true);

    // Email validation
    if (!emailRegex.test(email)) {
      // Invalid email format
      setIsLoading(false);
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

    axios
      .post(endPoint, formObject)
      .then((response) => {
        setIsLoading(false);
        Swal.fire(
          "Thank you for reaching out to us!",
          "We would make sure to get back to you as soon as possible.",
          "success"
        );
        setFormObj({
          fullName: "",
          email: "",
          phoneNumber: "",
          inquiry: "",
        });
        //console.log("submitted successfully", response);
      })
      .catch((error) => {
        //console.log("error", error);
        setIsLoading(false)
      });
  }
  return (
    <>
      {/* <GetInTouch /> */}
      <Header />
      <section className="contact-section">
        <h3>
          We’re <span>really excited</span> to hear from you!
        </h3>
        <p>
          We value your thoughts and opinions, and we are genuinely interested
          in what you have to say. Your feedback is important to us and helps us
          improve our services
        </p>
        <form onSubmit={handlerSubmit} className="contact-form">
          <div>
            <div className="name">
              <label htmlFor="name">Name</label>
              <input
                placeholder="Enter Full name"
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="number">
              <label htmlFor="phonenumber">Phone number</label>
              <input
                type="text"
                placeholder="Phone number"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="inquiry">Inquiry</label>
              <textarea
                placeholder="Would like to know your thought about us"
                name="inquiry"
                value={inquiry}
                id="inquiry"
                cols="30"
                rows="10"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div>
            {isLoading ? (
              <div>
                <FontAwesomeIcon icon={faSpinner} />
                <span> Loading...</span>
              </div>
            ) : (
              <button
                type="submit"
                className="bg-primary-color contact-button"
                disabled={!isFormActive}
              >
                Send
              </button>
            )}
          </div>
        </form>
      </section>
      <Join_afren_waitlist />
      <Footer />
    </>
  );
}
