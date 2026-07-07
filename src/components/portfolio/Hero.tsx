import { motion } from "motion/react";
import { Download, Mail } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-start justify-center overflow-hidden pt-16 pb-16 px-4"
    >
      <ParticleBackground count={55} />
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Hero image */}
        <div className="relative z-10 flex flex-col items-center text-center pt-35 pb-4">
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-4xl"
          >
            <img
              src="/image/hero-sitting.png"
              alt="Parminder - Frontend Developer"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mt-20 flex w-full flex-col items-start gap-3 md:flex-row md:justify-start"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-soft hover:-translate-y-0.5 transition-all duration-300"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-4 glass px-6 py-3 rounded-full font-medium hover:bg-accent/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mt-8 md:mt-0 md:absolute md:right-2 md:bottom-0 max-w-xs text-justify text-sm md:text-base text-foreground font-display"
        >
          Hi! I'm a Frontend Developer passionate about creating accessible and inclusive websites where everyone can connect, interact, and belong. Design is intelligence made visible.
        </motion.p>
      </div>
    </section>
  );
}
