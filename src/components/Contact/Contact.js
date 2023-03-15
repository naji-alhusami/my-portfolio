import React from "react";
import HomeAndSkillsCard from "../Cards/HomeAndSkillsCard";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-primary flex justify-center items-center p-4"
    >
      <HomeAndSkillsCard>
        <form
          action="https://getform.io/f/dc37deaf-23cc-45aa-9d8d-9f8611294beb"
          method="POST"
          className="flex flex-col max-w-[600px] w-full"
        >
          <label>Name:</label>
          <input type="text" name="name" className="bg-[#ccd6f6] p-2" />
          <label>Email:</label>
          <input type="email" name="email" className="bg-[#ccd6f6] p-2" />
          <label>Subject:</label>
          <input type="text" name="subject" className="bg-[#ccd6f6] p-2" />
          <label>Your Message:</label>
          <textarea
            required
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>

          <button type="submit" className=" border-2 hover:bg-secondary hover:border-secondary px-4 py-3 my-8 mx-auto flex items-center">Send</button>
        </form>
      </HomeAndSkillsCard>
    </div>
  );
};

export default Contact;
