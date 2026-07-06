import { motion } from "motion/react";
import { Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4"
    >
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Center hero image cutout */}
        <div className="relative z-10 flex flex-col items-center text-center py-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-4xl"
          >
            <img
              src="/image/hero-sitting.png"
              alt="Parminder - Frontend Developer"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative z-10 mt-10 flex w-full flex-col items-start gap-3 md:flex-row md:justify-start"
        >
            <a
              href="#"
              className="group inline-flex items-center gap-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-soft hover:-translate-y-0.5 transition-all"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-4 glass px-6 py-3 rounded-full font-medium hover:bg-accent/10 hover:-translate-y-0.5 transition-all"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
        </motion.div>

        {/* Standalone quote bottom-right */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="relative z-10 mt-8 md:mt-0 md:absolute md:right-2 md:bottom-0 max-w-xs text-right text-sm md:text-base italic text-foreground/60 font-display"
        >
          "Hi! I`m a Frontend Developer.Design is intelligence made visible."
        </motion.p>
      </div>
    </section>
  );
}
