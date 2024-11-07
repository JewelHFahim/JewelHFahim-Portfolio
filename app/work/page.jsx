"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowRight, BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "project 1",
    description:
      "EpikMovie is a comprehensive movie streaming and download platform that provides users with a seamless experience for both streaming and downloading their favorite movies. As the frontend developer, I took charge of the entire client-side development, ensuring a user-friendly interface and efficient functionality.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "React" },
      { name: "Redux" },
      { name: "Hls" },
      { name: "Video.js" },
      { name: "Swiper" },
      { name: "Slick-Slider" },
    ],
    image: "/assets/epickmovies.PNG",
    live: "https://epickmovies.com/",
    github: "https://github.com/JewelHFahim/epickmovie",
  },
  {
    num: "02",
    category: "Frontend",
    title: "project 2",
    description:
      "I developed a fully responsive frontend project using modern web technologies to create a seamless user experience across devices. The project leverages the power of HTML5 , CSS3 & Tailwind for a robust and accessible structure, combined with React to manage dynamic UI components and state.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Tailwind.css" },
      { name: "React" },
      { name: "React-router" },
      { name: "Swiper" },
      { name: "React-Icons" },
      { name: "React-modern-drawer" },
    ],
    image: "/assets/spagreen.PNG",
    live: "https://spagreen.netlify.app/",
    github: "https://github.com/JewelHFahim/SpaGreen",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "project 3",
    description:
      "Fire Cutter is a responsive fullstack e-commerce application designed to offer a smooth and engaging shopping experience. The project combines a powerful CMS Wix Headless Studio backend with a modern frontend stack, including Next.js, to deliver a dynamic and high-performing online store.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Tailwind.css" },
      { name: "Next.js" },
      { name: "zustand" },
      { name: "react-confetti" },
      { name: "react-hot-toas" },
      { name: "wix studio" },
    ],
    image: "/assets/firecutter.PNG",
    live: "https://fire-cutter-ecommerce.vercel.app/",
    github: "https://github.com/JewelHFahim/FireCutter-Ecommerce",
  },

  {
    num: "04",
    category: "Frontend",
    title: "project 4",
    description:
      "I developed a responsive casino blog and service app using React, Tailwind, and a range of libraries like Swiper, Google-Map-React, and Redux. The app features dynamic content, smooth animations, and interactive maps, all while ensuring seamless navigation and performance across devices.",
    stack: [
      { name: "Tailwind" },
      { name: "React" },
      { name: "redux" },
      { name: "Swiper" },
      { name: "React Icons" },
      { name: "React Router" },
      { name: "React-CountUp" },
      { name: "Google-Map-React, " },
      { name: "React-Type-Animation" },
    ],
    image: "/assets/credesign.PNG",
    live: "https://credesign-bd.netlify.app/",
    github: "https://github.com/JewelHFahim/CreDesign",
  },

  {
    num: "05",
    category: "Frontend",
    title: "project 5",
    description:
      "IPTV Service Provider is a responsive frontend application designed to deliver a seamless user experience for IPTV services. Built using modern technologies like Next.js, Tailwind CSS, and a suite of powerful React libraries.",
    stack: [
      { name: "Tailwind" },
      { name: "Next.js" },
      { name: "Swiper" },
      { name: "React Icons" },
      { name: "React-CountUp" },
      { name: "Google-Map-React, " },
    ],
    image: "/assets/iptv.PNG",
    live: "https://iptv-bd.vercel.app/",
    github: "https://github.com/JewelHFahim/IpTv",
  },
];

const WorkPage = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-8 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* text */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/* outline num */}
              <div className="text-6xl lg:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className=" text-[30px] lg:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className=" text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Reopository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full cursor-pointer">
                    <div className="h-[460px] relative group flex justify-center items-center bg-transparent lg:p-5 border border-white/5">
                      {/* overly */}
                      <div className="absolute top-0 bottom-0 bg-black/10 z-10 w-full h-full"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          className="object-cover"
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;
