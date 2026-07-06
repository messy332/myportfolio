import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap",
  "Node.js", "Express.js", "PHP", "Laravel", "MySQL", "PostgreSQL", "MongoDB", "Git",
  "GitHub", "Figma", "Docker", "REST API", "Firebase", "Supabase", "Shadcn/UI", "Radix UI", "Vite",
];

export function Skills() {
  const loop = [...skills, ...skills];
  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
                  <span
                    key={`${row}-${i}`}
                    className="glass px-5 py-3 rounded-full font-medium text-sm whitespace-nowrap shadow-brand hover:gradient-brand hover:text-white transition-colors"
                  >
                    <span className="inline-block h-2 w-2 rounded-full gradient-brand mr-2 align-middle" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
