import React from "react";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

import CV from "../assets/CV.pdf";

const SocialLinksData = [
  {
    id: 1,
    name: "LinkedIn: ",
    image: (
      <FaLinkedin className="text-blue-600 hover:text-blue-900"></FaLinkedin>
    ),
    url: "https://www.linkedin.com/in/naji-alhusami-b629b01a4/",
  },
  {
    id: 2,
    name: "Github: ",
    image: (
      <FaGithubSquare className="text-gray-600 hover:text-gray-800"></FaGithubSquare>
    ),
    url: "https://github.com/naji-alhusami",
  },
  {
    id: 3,
    name: "Email: ",
    image: (
      <AiOutlineMail className="text-emerald-500 hover:text-emerald-800"></AiOutlineMail>
    ),
    url: "mailto:najihussami@gmail.com",
  },
  {
    id: 4,
    name: "Resume: ",
    image: (
      <BsFillPersonLinesFill
        download
        className="text-gray-600 hover:text-gray-800"
      ></BsFillPersonLinesFill>
    ),
    url: CV,
  },
];

const SocialLinks = ({showName}) => {
  return SocialLinksData.map((link) => (
    <p className="text-md font-bold text-emerald-900 flex flex-row mr-2">
      {showName && link.name}
      <a
        href={link.url}
        key={link.id}
        target="_blank"
        rel="noreferrer"
        className="text-3xl transition duration-500 mr-5"
      >
        {link.image}
      </a>
    </p>
  ));
};

export default SocialLinks;
