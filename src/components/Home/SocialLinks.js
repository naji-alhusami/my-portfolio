import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

import { AiOutlineMail } from "react-icons/ai";

const SocialLinks = [
  {
    id: 2,
    image: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/naji-alhusami-b629b01a4/",
  },
  {
    id: 1,
    image: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/naji-alhusami",
  },
  {
    id: 3,
    image: <AiOutlineMail className="social-icon"></AiOutlineMail>,
    url: "https://www.twitter.com",
  },
  //   {
  //     id: 4,
  //     image: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
  //     url: "https://www.twitter.com",
  //   },
];

export default SocialLinks;
