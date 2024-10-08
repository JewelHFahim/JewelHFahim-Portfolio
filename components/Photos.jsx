"use client";

import { easeIn, easeInOut, motion } from "framer-motion";
import Image from "next/image";

const Photos = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: easeIn },
        }}
        className="flex justify-center items-center"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: easeInOut },
          }}
          className="w-[210px] h-[210px] xl:w-[350px] xl:h-[350px] mix-blend-lighten absolute"
        >
          <Image
            src="/jewel.png"
            alt=""
            priority
            quality={100}
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className="w-[300px] h-[300px] xl:w-[450px] xl:h-[450px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="200"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photos;
