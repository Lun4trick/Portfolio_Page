import React from "react";
import { motion } from "framer-motion";
import { useHeaderTextContext } from "@/context/headerTextContext/HeaderTextContext";

function ChangingNameLogo() {
  const { displayedText } = useHeaderTextContext();
  return (
    <div className="flex items-end p-5">
      <p className="text-4xl text-green-400 text-glow shadow-green-900">
        {displayedText}
      </p>
      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="w-[15px] h-[4px] bg-white"
      />
    </div>
  );
}

export default ChangingNameLogo;
