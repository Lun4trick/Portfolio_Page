import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useHeaderTextContext } from "@/context/headerTextContext/HeaderTextContext";

function ChangingNameLogo() {
  const { displayedText } = useHeaderTextContext();

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, [displayedText]);


  return (
    <div ref={containerRef} className="flex scrollbar-hide items-end max-w-full p-5 overflow-x-scroll pointer-events-none">
      <p className="text-2xl sm:text-4xl shrink-0 text-green-400 text-glow shadow-green-900">
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

