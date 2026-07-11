import { motion } from "motion/react";
import { ParticleBackground } from "./ParticleBackground";

const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap",
  "Node.js", "Express.js", "PHP", "Laravel", "MySQL", "SQL", "PostgreSQL", "MongoDB", "Git",
  "GitHub", "Figma", "UI Design", "UX Design", "Docker", "REST API", "Firebase", "Supabase", "Shadcn/UI", "Radix UI", "Vite",
];

export function Skills() {
  const loop = [...skills, ...skills];
  return (
    <section id="skills" className="py-24 overflow-hidden relative">
      <ParticleBackground count={36} speed={0.25} />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-black">Skills</h2>
        </motion.div>
      </div>

      <div className="space-y-5">
        {[0, 1].map((row) => (
          <div key={row} className="relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="overflow-hidden">
              <div className={`flex gap-3 w-max ${row === 0 ? "animate-marquee" : "animate-marquee-slow"} pause-on-hover`}>
                {loop.map((s, i) => (
                  <motion.span
                    key={`${row}-${i}`}
                    whileHover={{ scale: 1.08, y: -3 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="glass px-5 py-3 rounded-full font-medium text-sm whitespace-nowrap shadow-brand hover:gradient-brand hover:text-white transition-colors duration-300 cursor-default"
                  >
                    <span className="inline-block h-2 w-2 rounded-full gradient-brand mr-2 align-middle" />
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
