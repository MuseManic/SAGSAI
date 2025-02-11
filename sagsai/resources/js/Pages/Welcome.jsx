import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 flex items-center justify-center"
    >
      <motion.h1
        initial={{ y: 0 }}
        animate={{ y: -200 }}  // Moves up further to remain visible
        transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
        className="text-4xl font-bold text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        Welcome there
      </motion.h1>
    </motion.div>
  );
}
