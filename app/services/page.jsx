"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const Service = () => {
  const services = [
    {
      num: "01",
      title: "Web Development",
      description:
        "I specialize in building responsive, user-friendly websites and applications. My focus is on creating seamless digital experiences through clean code, modern design, and efficient functionality.",
      href: "",
    },
    {
      num: "02",
      title: "SEO",
      description:
        "I optimize websites to improve search engine visibility, driving organic traffic and enhancing online presence. My approach focuses on both technical SEO and content strategy to achieve sustainable, high-ranking results.",
      href: "",
    },
    // {
    //   num: "03",
    //   title: "UI/UX Design",
    //   description:
    //     "I craft intuitive and visually appealing interfaces, ensuring that user experiences are both engaging and seamless. Aesthetics with functionality to create designs that are both beautiful and user-friendly.",
    //   href: "",
    // },
    
    // {
    //   num: "04",
    //   title: "Digital Marketing",
    //   description:
    //     "I develop strategic digital marketing campaigns that engage audiences and drive growth. My approach combines creativity with data-driven insights to deliver impactful results across various online platforms.",
    //   href: "",
    // },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[30px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-4 group"
              >
                {/* top */}
                <div className="w-full flex items-center justify-between">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-2xl text-primary" />
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
