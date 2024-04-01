import React, { useState } from "react";
import Comp from "../components/Comp";
import "../styles/freelancer.css";
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import { useGlobalContext } from "../Context";
import ModalForm from "../components/ModalForm";

export default function Freelancerpage() {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const phoneNumberRegex = /^(\+\d{3}|\d{11})$/;

  const {popUp} = useGlobalContext()
  const [formObj, setFormObj] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
    skillsOffered: "",
    experienceYears: "",
    preferredJobs: "",
    comment: "",
  });
  const {
    fullName,
    email,
    phoneNumber,
    location,
    skillsOffered,
    experienceYears,
    preferredJobs,
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
    const endPoint = "https://afren-waitlist.onrender.com/api/freelancer";

    axios
      .post(endPoint, formObject)
      .then((response) => {
        setIsLoading(false);
        Swal.fire(
          "Thank you for joining the waitlist!",
          "Check your email for confirmation.",
          "success"
        ).then(() => {
          window.location.href = "/"
        })
        setFormObj({
          fullName: "",
          email: "",
          phoneNumber: "",
          location: "",
          skillsOffered: "",
          experienceYears: "",
          preferredJobs: "",
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
      <main className="freelancer">
        <GetInTouch />
        {popUp && <ModalForm />}
        <Comp />
        <div className="freelancer-div">
        <p>
          To help us better understand your needs and provide you with the best
          experience, please provide the following details:
        </p>
        <form onSubmit={handlerSubmit} className="freelancer-form">
          <div>
            <label htmlFor="fullname">Fullname</label>
            <input
              required
              placeholder="Fullname"
              type="text"
              id="fullname"
              value={fullName}
              name="fullName"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              required
              placeholder="Email"
              type="text"
              id="email"
              value={email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phonenumber">Phone number</label>
            <input
              required
              placeholder="Phone number"
              type="text"
              id="phonenumber"
              value={phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="location">
              <label htmlFor="location">Location</label>
              <input
                required
                placeholder="Location"
                type="text"
                id="location"
                value={location}
                name="location"
                onChange={handleChange}
              />
            </div>
            <div className="skill">
              <label htmlFor="skill">Skill/services offered</label>
              <input
                required
                placeholder="Skill/services offered"
                type="text"
                id="skill"
                value={skillsOffered}
                name="skillsOffered"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="years">
              <label htmlFor="years">Years of experience</label>
              <input
                required
                placeholder="Years of experience"
                type="text"
                id="years"
                value={experienceYears}
                name="experienceYears"
                onChange={handleChange}
              />
            </div>
            <div className="job">
              <label htmlFor="job">Preferred job categories</label>
              <input
                required
                placeholder="Preferred job categories"
                type="text"
                id="job"
                value={preferredJobs}
                name="preferredJobs"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="comment">comment</label>
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
