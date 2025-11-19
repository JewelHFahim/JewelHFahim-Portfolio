"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiPrisma, SiSocketdotio, SiJsonwebtokens, SiSwagger, SiVercel, SiRender, SiDocker, SiNginx, SiPostman, SiRedis, SiCloudflare } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";


// about data
const about = {
  title: "About me",
  description:
    "I work as a full stack developer, building everything from intuitive interfaces to efficient backend systems. My experience spans real-time features, scalable APIs, and modern web application architecture.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jewel Hossain Fahim",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 1911 209322",
    },
    {
      fieldName: "Experience",
      fieldValue: "1.9+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "jewelhfahim",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "jewelhfahim@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Bangla",
    },
  ],
};

// education data
const education = {
  icon: "",
  title: "My education",
  description:
    "I hold a B.Sc. in Engineering, specializing in Computer Science and Engineering (CSE).",
  items: [
    {
      institution: "Programming Hero",
      degree: "Complete Web Development",
      duration: "2022",
    },
    {
      institution: "BUBT",
      degree: "Bs.C Engg. in CSE",
      duration: "2017 - 2021",
    },
    {
      institution: "HSC",
      degree: "SRCC",
      duration: "2013 - 2015",
    },
    {
      institution: "SSC",
      degree: "Govt. Science School",
      duration: "2013",
    },
  ],
};

// experience data
const experience = {
  icon: "",
  title: "My experience",
  description:
    "As a frontend developer, I've contributed to two companies, sharpening my skills in crafting responsive and user-focused interfaces. My work has consistently focused on delivering high-quality digital products using modern web technologies.",
  items: [
    {
      company: "QuantumEdge",
      position: "Full-stack Developer",
      duration: "2025.Feb - Present",
    },
    {
      company: "CloudySign",
      position: "Frontend Developer",
      duration: "2023.Dec - 2025.Feb",
    },
    {
      company: "MicroBuddy",
      position: "Jr. Frontend Developer",
      duration: "2023.Feb - 2023.Dec",
    },
  ],
};

// skills data
// const skills = {
//   icon: "",
//   title: "My skills",
//   description:"Building reliable full stack applications with modern tools and clean, maintainable code.",
//   skillList: [
//     {
//       icon: <FaHtml5 />,
//       name: "html 5",
//     },
//     {
//       icon: <FaCss3 />,
//       name: "css 3",
//     },
//     {
//       icon: <FaJs />,
//       name: "javascript",
//     },
//     {
//       icon: <SiTypescript />,
//       name: "typescript",
//     },
//     {
//       icon: <FaReact />,
//       name: "react.js",
//     },
//     {
//       icon: <TbBrandRedux />,
//       name: "redux",
//     },
//     {
//       icon: <SiNextdotjs />,
//       name: "next.js",
//     },
//     {
//       icon: <FaBootstrap />,
//       name: "bootstrap.css",
//     },
//     {
//       icon: <SiTailwindcss />,
//       name: "tailwind.css",
//     },
//     {
//       icon: <FaNodeJs />,
//       name: "node.js",
//     },
//     {
//       icon: <SiExpress />,
//       name: "express ",
//     },
//     {
//       icon: <SiMongodb />,
//       name: "mongodb",
//     },
//     {
//       icon: <FaGithub />,
//       name: "github ",
//     },
//     {
//       icon: <FaFigma />,
//       name: "figma",
//     },
//   ],
// };

const skills = {
  title: "Full Stack Skillset",
  tagline: "A balanced stack for building responsive interfaces, fast APIs, and real-time features.",
  description:
    "I work across the full stack, using modern tools and frameworks to build scalable, production-ready applications.",
  skillList: [
    // Frontend
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <TbBrandRedux />, name: "Redux Toolkit" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaFigma />, name: "Figma" },

    // Backend & APIs
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },           // NEW
    { icon: <SiMysql />, name: "MySQL" },                     // NEW
    { icon: <SiPrisma />, name: "Prisma ORM" },               // NEW
    { icon: <SiSocketdotio />, name: "Socket.io" },           // NEW
    { icon: <SiJsonwebtokens />, name: "JWT Auth" },          // NEW
    { icon: <SiSwagger />, name: "Swagger API Docs" },        // NEW

    // DevOps & Tools
    { icon: <FaGithub />, name: "Git & GitHub" },
    { icon: <SiVercel />, name: "Vercel" },                   // NEW
    { icon: <SiRender />, name: "Render" },                   // NEW
    { icon: <SiDocker />, name: "Docker" },                   // NEW
    { icon: <SiNginx />, name: "Nginx" },                     // NEW

    // Extra Useful Tools
    { icon: <SiPostman />, name: "Postman" },                 // NEW
    { icon: <SiRedis />, name: "Redis" },                     // NEW
    { icon: <SiCloudflare />, name: "Cloudflare" },           // NEW
  ],
};


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[25px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className=" text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className=" text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className=" text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[90px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className=" text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
