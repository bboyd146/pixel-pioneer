import { motion } from "framer-motion";

export default function AnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}