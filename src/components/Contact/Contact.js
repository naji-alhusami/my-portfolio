import React from "react";
import SkillsContactCard from "../Cards/SkillsContactCard";

const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-emerald-700 text-bold text-6xl  p-4 border-b-4 border-amber-700">
        CONTACT ME
      </h1>
      <SkillsContactCard>
        <form
          action="https://getform.io/f/dc37deaf-23cc-45aa-9d8d-9f8611294beb"
          method="POST"
          className="flex flex-col p-4 max-w-[700px] w-full"
        >
          <label className="font-bold text-black">Name:</label>
          <input type="text" name="name" className="bg-[#ccd6f6] p-2 mb-2" placeholder="Enter Your Name" />
          <label className="font-bold text-black">Email:</label>
          <input type="email" name="email" className="bg-[#ccd6f6] p-2 mb-2" placeholder="Enter Your Email" />
          <label className="font-bold text-black">Subject:</label>
          <input type="text" name="subject" className="bg-[#ccd6f6] p-2 mb-2" placeholder="Enter Your Subject" />
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
      </SkillsContactCard>
    </div>
  );
};

export default Contact;
