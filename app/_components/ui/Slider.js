import { motion } from "framer-motion";

export default function Slider({ children }) {
  return (
    <motion.div
      className="flex gap-15 cursor-grab pb-30 overflow-x-auto snap-x snap-mandatory"
      whileTap={{ cursor: "grabbing" }}
      tabIndex="-1"
    >
      {children}
    </motion.div>
  );
}
