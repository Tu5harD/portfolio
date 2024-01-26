"use client";

import React, { useRef } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import "./Footer.scss";
import SendButton from "../Button/SendButton";
const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.name.value;
    const email = form.current.email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      // Display an error message if any of the fields are empty
      toast.error("Please fill in all fields.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    // If all fields have values, proceed with sending the email
    emailjs
      .sendForm(
        "service_xdx999q",
        "template_grvoq82",
        form.current,
        "Vhlc_EIfChq4oDLyZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Display success message
          toast.success("Email Sent successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          // Reset the form after successful submission
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          // Display error message
          toast.error("Error sending email. Please try again later.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };
  return (
    <>
      <h2 className="head-text">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
          Take a coffee & chat with me
        </div>
      </h2>
      <ToastContainer />
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src="./email.png" alt="email" />
          <a
            href="mailto:tushardukane9@gmail.com"
            className="text-[#313bac] font-semibold"
          >
            tushardukane9@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src="./mobile.png" alt="phone" />
          <a href="tel:+91 7499833141" className="text-[#313bac] font-semibold">
            +91 7499833241
          </a>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="app__footer-form app__flex"
      >
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="name"
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            name="message"
          />
        </div>
        {/* <button type="submit" className="p-text cursor-pointer">
          Send Message
        </button> */}

        {/* <Button className=" mt-3" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button> */}
      </form>
      <div>
        <SendButton />
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__blackbg"
);
