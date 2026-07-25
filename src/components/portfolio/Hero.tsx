import { motion } from "motion/react";
import { Download, Mail } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-16 px-6"
    >
      <ParticleBackground count={55} />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* On mobile: image first, text below */}
        {/* Right — image */}
        <motion.div
          initial={{ x: 60, opacity: 0, scale: 0.92 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:order-2 md:justify-end"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 xl:w-[440px] xl:h-[440px] rounded-full overflow-hidden ring-4 ring-brand-blue/20 shadow-2xl">
            <img
              src="/image/myportfolio.png"
              alt="Parminder - Web Graphic Designer"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Left — text content */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5 md:order-1 text-center md:text-left items-center md:items-start"
        >
          {/* Eyebrow */}
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-blue">
            Hello, I'm Parminder
          </span>

          {/* Big headline */}
          <h1 className="text-4xl sm:text-5xl xl:text-7xl font-display font-bold leading-tight text-foreground">
            Web{" "}
            <span className="text-brand-blue">Software</span>
            <br />
           Developer
          </h1>

          {/* Bio */}
          <p className="max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed">
            Passionate about creating accessible and inclusive websites where
            everyone can connect, interact, and belong. Design is intelligence
            made visible.
          </p>

          {/* CTA buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-accent/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
