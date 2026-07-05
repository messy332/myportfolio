import { motion } from "motion/react";
import { Download, Mail, Quote } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4">
      {/* Floating shapes */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 h-72 w-72 gradient-brand opacity-30 blur-3xl animate-blob" />
        <div className="absolute bottom-10 -right-20 h-96 w-96 gradient-brand-rev opacity-25 blur-3xl animate-blob" />
        <div className="absolute top-1/2 left-1/3 h-40 w-40 rounded-full bg-accent/20 blur-2xl animate-float" />
      </div>

      <div className="w-full max-w-6xl mx-auto grid gap-10">
        {/* Quote card top right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="glass rounded-2xl p-4 max-w-xs justify-self-end shadow-brand"
        >
          <Quote className="h-5 w-5 text-accent mb-2" />
          <p className="text-sm text-foreground/80 italic">
            "Design is intelligence made visible — I build interfaces that feel effortless."
          </p>
        </motion.div>

        {/* Center block */}
        <div className="flex flex-col items-center text-center gap-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 gradient-brand rounded-full blur-2xl opacity-60 scale-110" />
            <div className="relative h-44 w-44 md:h-56 md:w-56 rounded-full gradient-brand p-1 shadow-brand animate-float">
              <div className="h-full w-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                <span className="font-display font-black text-4xl md:text-5xl text-gradient text-center leading-none px-4">
                  YOUR<br />NAME
                </span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
          >
            YOUR <span className="text-gradient">NAME</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-3xl font-display font-medium text-foreground/70"
          >
            Frontend Developer
          </motion.p>
        </div>

        {/* CTA buttons bottom-left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-self-start"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 gradient-brand text-primary-foreground px-6 py-3 rounded-full font-medium shadow-brand hover:shadow-glow hover:-translate-y-0.5 transition-all"
          >
            <Download className="h-4 w-4 group-hover:animate-bounce" />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:bg-accent/10 hover:-translate-y-0.5 transition-all"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
