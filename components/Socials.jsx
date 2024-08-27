"use client";
import Link from "next/link";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/JewelHFahim" },
  { icon: <FiLinkedin />, path: "https://www.linkedin.com/in/jewelhfahim/" },
  { icon: <FaFacebook/>, path: "https://www.facebook.com/jewelhfahim" },
  { icon: <FaTwitter />, path: "https://x.com/jewelhfahim" },
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
