import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";

const projects = [
  { title: "Nebula Dashboard", desc: "Analytics platform with real-time charts and role-based access.", tech: ["React", "TypeScript", "Tailwind", "Supabase"] },
  { title: "Orbit E-commerce", desc: "Headless storefront with lightning-fast checkout and CMS.", tech: ["Next.js", "Stripe", "Sanity"] },
  { title: "Pulse Chat", desc: "Realtime messaging app with end-to-end encryption.", tech: ["React", "Node.js", "Socket.io"] },
  { title: "Atlas Portfolio Kit", desc: "Open-source portfolio starter used by 5k+ developers.", tech: ["Vite", "shadcn/ui", "Motion"] },
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

        <div className="overflow-y-auto max-h-[720px] pr-2 space-y-6 scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group glass rounded-3xl p-5 shadow-brand hover:shadow-glow hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center"
            >
              {/* Left — text */}
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-foreground/70 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href="#" className="inline-flex items-center gap-1.5 gradient-brand text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:shadow-glow transition-all duration-300">
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </a>
                  <a href="#" className="inline-flex items-center gap-1.5 glass px-4 py-2 rounded-full text-sm font-medium hover:bg-accent/10 transition-all duration-300">
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                </div>
              </div>

              {/* Right — image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full md:w-72 h-44 rounded-2xl gradient-brand overflow-hidden flex-shrink-0"
              >
                <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-glow)" }} />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display font-black text-2xl md:text-3xl text-white/95 tracking-tight px-4 text-center">
                    {p.title}
                  </span>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
