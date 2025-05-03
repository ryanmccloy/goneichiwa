"use client";

import { motion } from "framer-motion";

export default function Slider({ children }) {
  return (
    <motion.div
      role="region"
      aria-label="Travel Guides"
      className="flex gap-15  pb-30 overflow-x-auto"
      whileTap={{ cursor: "grabbing" }}
      tabIndex="-1"
    >
      {children}
    </motion.div>
  );
}
