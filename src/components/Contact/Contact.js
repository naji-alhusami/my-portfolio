import React from "react";

import { motion } from "framer-motion";

import ContactCard from "../Cards/ContactCard";
import Cover from "../assets/Images/Cover3.png";

const Contact = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center z-0">
      <h1 className="text-emerald-700 text-bold text-6xl  p-4 border-b-4 border-amber-700">
        CONTACT
      </h1>
      <div className=" flex xl:flex-row xl:w-[90%] xl:my-8 lg:flex-row lg:mt-2 md:flex-row md:mt-10 md:items-center  mt-2 image-styles-s">
        <ContactCard>
          <form
            action="https://getform.io/f/dc37deaf-23cc-45aa-9d8d-9f8611294beb"
            method="POST"
            className="flex flex-col p-4 max-w-[700px] w-full"
          >
            <label className="font-bold text-black">Name:</label>
            <input
              type="text"
              name="name"
              className="bg-[#ccd6f6] p-2 mb-2"
              placeholder="Enter Your Name"
            />
            <label className="font-bold text-black">Email:</label>
            <input
              type="email"
              name="email"
              className="bg-[#ccd6f6] p-2 mb-2"
              placeholder="Enter Your Email"
            />
            <label className="font-bold text-black">Subject:</label>
            <input
              type="text"
              name="subject"
              className="bg-[#ccd6f6] p-2 mb-2"
              placeholder="Enter Your Subject"
            />
            <label className="font-bold text-black">Your Message:</label>
            <textarea
              required
              className="bg-[#ccd6f6] p-2"
              name="message"
              rows="5"
              placeholder="Enter Your Message"
            ></textarea>
            <button
              type="submit"
              className="rounded-lg bg-emerald-500 hover:bg-emerald-700 text-black hover:text-white text-bold border-2 hover:bg-secondary hover:border-secondary px-4 py-2 mt-3 mx-auto flex items-center"
            >
              Send
            </button>
          </form>
        </ContactCard>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex xl:w-full xl:h-full xl:mt-0 xl:mr-0 xl:ml-32 xl:block  lg:m-10 lg:block md:m-10 md:hidden sm:hidden hidden"
        >
          <img
            src={Cover}
            alt="portfolio"
            className="object-cover h-[22rem]"
            placeholder="blurred"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
