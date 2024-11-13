import React from "react";
import { LuMonitorSmartphone } from "react-icons/lu";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { fullstackStack, aiStack, cybersecurityStack } from "./techStack";
import * as motion from "framer-motion/client";
import TechStacks from "./TechStacks";

const techStacks = [
  {
    title: "Fullstack development",
    icon: (
      <LuMonitorSmartphone className="h-full w-full bg-base-900 rounded-lg" />
    ),
    stack: fullstackStack,
  },
  {
    title: "AI Development",
    icon: (
      <GiArtificialIntelligence className="w-full h-full bg-base-900 rounded-lg" />
    ),
    stack: aiStack,
  },
  {
    title: "Cybersecurity",
    icon: <MdSecurity className="h-full w-full bg-base-900 rounded-lg" />,
    stack: cybersecurityStack,
  },
];

function TechStacksContainer() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
       className="text-4xl mx-auto text-red-300 text-glow shadow-red-800"> 
        My technology stack
      </motion.h1>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col sm:flex-row w-full justify-evenly gap-10 sm:gap-5 p-2"
      >
        {techStacks.map((tech, index) => (
          <div key={tech.title} className="flex flex-col gap-7 items-center">
            <motion.div
              className="p-1 bg-gradient-to-tr cursor-pointer from-base-900 rounded-xl to-base-500 h-[200px] w-full"
              initial={{
                boxShadow: "0px 0px 0px 0px rgba(0, 255, 0, 0)",
                color: "transparent",
              }}
              animate={{
                boxShadow: [
                  "0px 10px 20px 5px rgba(0, 285, 0, 0)",
                  "0px 10px 20px 5px rgba(0, 285, 0, 0.3)",
                  "0px 10px 20px 5px rgba(0, 285, 0, 1)",
                  "0px 10px 20px 5px rgba(0, 285, 0, 0.3)",
                  "0px 10px 20px 5px rgba(0, 285, 0, 1)",
                  "0px 10px 20px 5px rgba(0, 285, 0, 0.3)",
                  "0px 10px 20px 5px rgba(0, 285, 0, 1)",
                  "0px 10px 20px 5px rgba(0, 285, 0, 0.3)",
                  "0px 10px 20px 5px rgba(0, 285, 0, 1)",
                  "0px 10px 20px 5px rgba(0, 285, 0, 0.5)",
                ],
                color: [
                  "rgba(34, 197, 94, 0.1)",
                  "rgba(34, 197, 94, 0.3)",
                  "rgba(34, 197, 94, 1)",
                  "rgba(34, 197, 94, 0.3)",
                  "rgba(34, 197, 94, 1)",
                  "rgba(34, 197, 94, 0.3)",
                  "rgba(34, 197, 94, 1)",
                  "rgba(34, 197, 94, 0.3)",
                  "rgba(34, 197, 94, 1)",
                ],
              }}
              transition={{
                duration: 0.3,
                delay: (index + 1) * 0.5,
              }}
              whileHover={{
                boxShadow: ["0px 10px 30px 5px rgba(255, 30, 40, 0.3)", "0px 10px 30px 5px rgba(255, 30, 40, 1)"],
                color: ["rgba(255, 50, 50, 1)"],
                transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
              }}
            >
              {tech.icon}
            </motion.div>
            <p className="text-glow text-red-300 shadow-red-700">
              {tech.title}
            </p>
            <TechStacks techStack={tech.stack} />
          </div>
        ))}
      </motion.section>
    </>
  );
}

export default TechStacksContainer;
