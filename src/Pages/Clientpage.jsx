import React, { useState } from "react";
import Comp from "../components/Comp";
import "../styles/client.css";
import axios from "axios";
import Swal from "sweetalert2";
import GetInTouch from "../components/GetInTouch";
import Footer from '../components/Footer'
import { useGlobalContext } from "../Context";
import ModalForm from "../components/ModalForm";

export default function Clientpage() {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const phoneNumberRegex = /^(\+\d{3}|\d{11})$/;

  const {popUp} = useGlobalContext()
  const [formObj, setFormObj] = useState({
    fullName: "",
    phoneNumber: "",
    companyName: "",
    email: "",
    industry: "",
    location: "",
    skillsNeeded: "",
    experienceLevel: "",
    comment: "",
  });
  const {
    fullName,
    phoneNumber,
    companyName,
    email,
    industry,
    location,
    skillsNeeded,
    experienceLevel,
    comment,
  } = formObj;

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

    // Phone number validation
    if (!phoneNumberRegex.test(phoneNumber)) {
      // Invalid phone number format
      setIsLoading(false);
      Swal.fire("Invalid Phone Number", "Please enter a valid phone number.", "error");
      return;
    }

    const formData = new FormData(e.target);
    const formObject = {};

    formData.forEach((key, value) => {
      formObject[value] = key;
    });
    console.log(formObject);
    const endPoint = "https://afren-waitlist.onrender.com/api/client";

    axios
      .post(endPoint, formObject)
      .then((response) => {
        setIsLoading(false);
        Swal.fire(
          "Thank you for joining the waitlist!",
          "Check your email for confirmation.",
          "success",
        ).then(() => {
          window.location.href = "/"
        })
        setFormObj({
          fullName: "",
          phoneNumber: "",
          companyName: "",
          email: "",
          industry: "",
          location: "",
          skillsNeeded: "",
          experienceLevel: "",
          comment: "",
        });
        console.log("submitted successfully", response);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
      });
  }

  return (
    <>
      <main className="client">
        <GetInTouch />
        {popUp && <ModalForm />}
        <Comp />
        <div className="client-div">
        <p>
          To help us better understand your needs and provide you with the best
          experience, please provide the following details:
        </p>
        <form onSubmit={handlerSubmit} className="client-form">
          <div>
            <div className="names">
              <label htmlFor="fullname">Full name</label>
              <input
                required
                placeholder="Full name"
                type="text"
                id="fullname"
                name="fullName"
                value={fullName}
                onChange={handleChange}
              />
            </div>
            <div className="number">
              <label htmlFor="phonenumber">Phone number</label>
              <input
                required
                type="text"
                placeholder="Phone number"
                id="phonenumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="company">
              <label htmlFor="company">Company name</label>
              <input
                required
                type="text"
                placeholder="Company name"
                id="company"
                name="companyName"
                value={companyName}
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                required
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="industry">
              <label htmlFor="industry">Industry</label>
              <input
                required
                type="text"
                placeholder="Industry"
                id="industry"
                name="industry"
                value={industry}
                onChange={handleChange}
              />
            </div>
            <div className="locations">
              <label htmlFor="location">Location</label>
              <input
                required
                type="text"
                id="location"
                placeholder="Location"
                name="location"
                value={location}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="skills">
              <label htmlFor="skill">Skills/services needed</label>
              <input
                required
                type="text"
                placeholder="Skills/services needed"
                id="skill"
                name="skillsNeeded"
                value={skillsNeeded}
                onChange={handleChange}
              />
            </div>
            <div className="exp">
              <label htmlFor="exp">Preferred freelancer experience level</label>
              <input
                type="text"
                placeholder="Preferred freelancer experience level"
                id="exp"
                name="experienceLevel"
                value={experienceLevel}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="comment">Comment</label>
            <textarea
              style={{ paddingLeft: '0.75rem', paddingTop: '0.5rem' }}
              name="comment"
              value={comment}
              id="comment"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            {isLoading ? (
              Swal.fire({
                title: "Thank you for joining the waitlist!",
                text: "We are confirming the validity of your email.",
                icon:"info",
                showConfirmButton: false,
                allowEscapeKey: false,
                allowOutsideClick: false,
              })
            ) : (
              <button
                type="submit"
                className="bg-primary-color"
                disabled={!isFormActive}
              >
                Join waitlist
              </button>
            )}
          </div>
        </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
