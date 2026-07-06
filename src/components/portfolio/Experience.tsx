import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  { company: "Acme Corp", role: "Senior Frontend Engineer", years: "2023 — Present", desc: "Leading design-system work and shipping high-performance React apps." },
  { company: "Nova Labs", role: "Frontend Developer", years: "2021 — 2023", desc: "Built dashboards and marketing sites with Next.js and Tailwind." },
  { company: "Pixel Studio", role: "UI Engineer", years: "2019 — 2021", desc: "Crafted interactive product experiences and micro-animations." },
  { company: "Freelance", role: "Web Developer", years: "2017 — 2019", desc: "Delivered custom websites for startups and small businesses." },
  { company: "Bright Agency", role: "Junior Developer", years: "2016 — 2017", desc: "Learned the craft building landing pages and email templates." },
];

const education = [
  { degree: "Bachelor of Science in Information Technology", school: "Caraga State University Cabadbaran Campus", year: "S.Y 2023 - Up to Present" },
];

export function Experience() {
  const loop = [...experiences, ...experiences];
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-black">Experience</h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee pause-on-hover">
            {loop.map((e, i) => (
              <article key={i} className="w-80 shrink-0 glass rounded-2xl p-5 shadow-brand hover:-translate-y-1 hover:shadow-glow transition-all">
                <div className="h-36 rounded-xl gradient-brand mb-4 flex items-center justify-center">
                  <span className="font-display font-black text-3xl text-white">{e.company.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-lg">{e.company}</h3>
                <p className="text-sm text-accent font-medium">{e.role}</p>
                <p className="text-xs text-muted-foreground mb-2">{e.years}</p>
                <p className="text-sm text-foreground/70">{e.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div id="education" className="max-w-6xl mx-auto mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-6xl font-black">Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-5">
          {education.map((ed, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 shadow-brand hover:shadow-glow transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl gradient-brand grid place-items-center shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-lg">{ed.degree}</h3>
                  <p className="text-sm text-accent font-medium">{ed.school}</p>
                  <p className="text-xs text-muted-foreground mt-1">{ed.year}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
