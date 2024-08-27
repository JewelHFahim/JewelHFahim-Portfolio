"use client";
import Link from "next/link";
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FiLinkedin />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
