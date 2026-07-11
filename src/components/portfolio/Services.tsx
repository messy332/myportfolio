import { motion } from "motion/react";
import { Monitor, Smartphone, Palette, Zap, Code2, BarChart2 } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";

const services = [
  { icon: Monitor,   title: "Web Development",       desc: "Building fast, responsive, and accessible websites using React, TypeScript, and modern tooling." },
  { icon: Smartphone,title: "Responsive Design",     desc: "Crafting layouts that look and feel great on every screen size, from mobile to ultrawide." },
  { icon: Palette,   title: "UI/UX Design",          desc: "Translating ideas into clean, intuitive interfaces with a focus on usability and aesthetics." },
  { icon: Zap,       title: "Performance Optimization", desc: "Auditing and improving load times, rendering speed, and Core Web Vitals scores." },
  { icon: Code2,     title: "Component Libraries",   desc: "Designing reusable, well-documented component systems that scale with your product." },
  { icon: BarChart2, title: "Analytics Integration", desc: "Setting up event tracking, dashboards, and data pipelines to help you make better decisions." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export function Services() {
  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      <ParticleBackground count={44} speed={0.3} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-black">Services</h2>
          <p className="mt-4 text-foreground/60 max-w-xl mx-auto text-sm md:text-base">
            What I bring to the table — from first pixel to final deploy.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group glass rounded-3xl p-6 shadow-brand hover:shadow-glow transition-shadow duration-300"
            >
              <motion.div
                className="mb-4 inline-flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <s.icon className="h-7 w-7 text-brand-blue" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
