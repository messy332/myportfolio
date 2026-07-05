import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function FloatingChat() {
  return (
    <motion.a
      href="#contact"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Message Me"
      className="group fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full gradient-brand text-primary-foreground grid place-items-center shadow-brand hover:shadow-glow"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-full mr-3 whitespace-nowrap glass px-3 py-1.5 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Message Me
      </span>
    </motion.a>
  );
}
