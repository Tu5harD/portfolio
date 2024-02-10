"use client";
import React, { useRef } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { email, mobile } from "../../../public/assets";

const Footer = () => {
  const form = useRef();

  const alertShow = () => {
    alert(
      "Sorry, the contact form is currently not working. Please try again later. If your matter is urgent, please call us at +91 7499833141."
    );
  };

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
        "service_7v9km18",
        "template_fbj63ga",
        form.current,
        "IG1jF-d5HCq33DRdc"
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
      <ToastContainer />

      <h2 className="head-text">
        <div className=" text-black">Take a coffee & chat with me</div>
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <Image src={email} alt="email" width={50} height={50} />
          <Link
            href="/mailto:tushardukane9@gmail.com"
            className="text-black font-semibold text-sm"
          >
            tushardukane9@gmail.com
          </Link>
        </div>
        <div className="app__footer-card">
          <Image src={mobile} alt="phone" width={50} height={50} />
          <Link
            href="/tel:+91 7499833141"
            className="text-black font-semibold text-sm"
          >
            +91 7499833241
          </Link>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="app__footer-form app__flex"
      >
        <div className="app__flex">
          <input
            className="text-sm text-left leading-4"
            type="text"
            placeholder="Your Name"
            name="name"
          />
        </div>
        <div className="app__flex">
          <input
            className="text-sm text-left leading-4"
            type="email"
            placeholder="Your Email"
            name="email"
          />
        </div>
        <div>
          <textarea
            className="text-sm text-left leading-4"
            placeholder="Your Message"
            name="message"
          />
        </div>
        <span
          className=" cursor-pointer mt-4 rounded-full  text-white"
          onClick={alertShow}
        >
          <span
            className=" bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 flex flex-row gap-2 items-center justify-center text-sm"
            type="submit"
          >
            Send Now <SendIcon />
          </span>
        </span>
      </form>
      <div className=" flex flex-wrap uppercase sm:hidden text-sm font-medium mt-5 gap-1">
        <p className="">@2024 Tush Dev</p>
        <p className="">All rights reserved</p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
