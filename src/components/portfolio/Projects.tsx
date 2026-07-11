import { motion } from "motion/react";
import { ParticleBackground } from "./ParticleBackground";

const projects = [
  {
    title: "Hospital Management System",
    desc: "Enables patients to book appointments with doctors online, reducing manual scheduling.",
    tech: ["PHP", "MySQL", "JavaScript", "CSS", "HTML"],
  },
  {
    title: "E-Learning Platform – Cybersecurity",
    desc: "Basic e-learning platform delivering a structured cybersecurity fundamentals learning guide.",
    tech: ["PHP", "MySQL", "JavaScript", "CSS", "HTML"],
  },
  {
    title: "Payroll System",
    desc: "Standard payroll processing system to calculate and manage employee pay records.",
    tech: ["Java"],
  },
  {
    title: "Gym Management System",
    desc: "Booking system allowing members to schedule sessions with gym trainers.",
    tech: ["PHP", "MySQL", "JavaScript", "CSS", "HTML"],
  },
  {
    title: "Intern Management System",
    desc: "Attendance module that generates a Daily Time Record (DTR) automatically from scanner input.",
    tech: ["PHP", "Laravel", "Supabase", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Coffee Cup Variety Scanner",
    desc: "Image-scanning tool to identify coffee cup variety from uploaded images.",
    tech: ["Dart", "Flutter", "Firebase"],
  },
  {
    title: "FarmTrack Management System",
    desc: "Records farmer information and tracks harvest outcomes, including yield and crop failure data.",
    tech: ["PHP", "Laravel", "Supabase", "JavaScript", "Tailwind CSS"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <ParticleBackground count={40} speed={0.35} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-black">Projects</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[420px] sm:max-h-[500px] pr-1 scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group glass rounded-3xl p-5 shadow-brand hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            >
              {/* text */}
              <div className="flex flex-col justify-center min-w-0">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-foreground/70 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
