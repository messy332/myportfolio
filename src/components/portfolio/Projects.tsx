import { motion, type Variants } from "motion/react";
import { ParticleBackground } from "./ParticleBackground";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Hospital Management System",
    desc: "Enables patients to book appointments with doctors online, reducing manual scheduling.",
    image: "/projects/hospital.png",
    github: "https://github.com/yourusername/hospital-management",
    live: "https://hospital.yourdomain.com",
    tech: ["PHP", "MySQL", "JavaScript", "CSS", "HTML"],
  },
  {
    title: "E-Learning Platform – Cybersecurity",
    desc: "Basic e-learning platform delivering a structured cybersecurity fundamentals learning guide.",
    image: "/projects/elearning.png",
    github: "https://github.com/yourusername/elearning-cybersecurity",
    live: "https://hospital.yourdomain.com",
    tech: ["PHP", "MySQL", "JavaScript", "CSS", "HTML"],
  },
  {
    title: "Payroll System",
    desc: "Standard payroll processing system to calculate and manage employee pay records.",
    image: "/projects/payroll.png",
    github: "https://github.com/yourusername/payroll-system",
    live: "https://hospital.yourdomain.com",
    tech: ["Java"],
  },
  {
    title: "Gym Management System",
    desc: "Booking system allowing members to schedule sessions with gym trainers.",
    image: "/projects/gym.png",
    github: "https://github.com/yourusername/gym-management",
    live: "https://hospital.yourdomain.com",
    tech: ["PHP", "MySQL", "JavaScript", "CSS", "HTML"],
  },
  {
    title: "Intern Management System",
    desc: "Attendance module that generates a Daily Time Record (DTR) automatically from scanner input.",
    image: "/projects/intern.png",
    github: "https://github.com/yourusername/intern-management",
    live: "https://hospital.yourdomain.com",
    tech: ["PHP", "Laravel", "Supabase", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Coffee Cup Variety Scanner",
    desc: "Image-scanning tool to identify coffee cup variety from uploaded images.",
    image: "/projects/coffee.png",
    github: "https://github.com/yourusername/coffee-cup-scanner",
    live: "https://hospital.yourdomain.com",
    tech: ["Dart", "Flutter", "Firebase"],
  },
  {
    title: "FarmTrack Management System",
    desc: "Records farmer information and tracks harvest outcomes, including yield and crop failure data.",
    image: "/projects/farmtrack.png",
    github: "https://github.com/yourusername/farmtrack-management",
    live: "https://hospital.yourdomain.com",
    tech: ["PHP", "Laravel", "Supabase", "JavaScript", "Tailwind CSS"],
  },
];

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
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition-transform"
            >
              <div className="aspect-video w-full bg-black/10 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto grid grid-cols-2 gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/10 transition"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
