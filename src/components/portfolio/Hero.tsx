import { motion } from "motion/react";
import { Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4"
    >
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Oversized background typography */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none"
        >
          <span className="font-display font-black leading-[0.85] tracking-tighter text-foreground/1500 text-[22vw] md:text-[16vw] lg:text-[14rem] whitespace-nowrap">
            PARMINDER
          </span>
          <span className="font-display font-black leading-[0.85] tracking-tighter text-accent/10 text-[10vw] md:text-[7vw] lg:text-[6rem] whitespace-nowrap mt-2">
            FRONTEND DEVELOPER
          </span>
        </div>

        {/* Center profile image */}
        <div className="relative z-10 flex flex-col items-center text-center py-24">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="h-56 w-56 md:h-72 md:w-72 rounded-full bg-primary p-1.5 shadow-brand">
              <div className="h-full w-full rounded-full bg-card flex items-center justify-center overflow-hidden border border-border">
                <span className="font-display font-black text-4xl md:text-5xl text-primary text-center leading-none px-4">
                  YOUR<br />NAME
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative z-10 mt-10 flex flex-col md:flex-row gap-3 justify-center"
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
          "Design is intelligence made visible —<br />I build interfaces that feel effortless."
        </motion.p>
      </div>
    </section>
  );
}
