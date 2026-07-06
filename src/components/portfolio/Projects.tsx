import { motion } from "motion/react";
import { ExternalLink, Github, FolderKanban } from "lucide-react";

const projects = [
  { title: "Nebula Dashboard", desc: "Analytics platform with real-time charts and role-based access.", tech: ["React", "TypeScript", "Tailwind", "Supabase"] },
  { title: "Orbit E-commerce", desc: "Headless storefront with lightning-fast checkout and CMS.", tech: ["Next.js", "Stripe", "Sanity"] },
  { title: "Pulse Chat", desc: "Realtime messaging app with end-to-end encryption.", tech: ["React", "Node.js", "Socket.io"] },
  { title: "Atlas Portfolio Kit", desc: "Open-source portfolio starter used by 5k+ developers.", tech: ["Vite", "shadcn/ui", "Motion"] },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          
          <h2 className="text-4xl md:text-6xl font-black">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group glass rounded-3xl p-5 shadow-brand hover:shadow-glow hover:-translate-y-2 transition-all"
            >
              <div className="relative h-56 rounded-2xl gradient-brand overflow-hidden mb-5">
                <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-glow)" }} />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display font-black text-4xl md:text-5xl text-white/95 tracking-tight px-6 text-center group-hover:scale-105 transition-transform">
                    {p.title}
                  </span>
                </div>
              </div>
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
                <a href="#" className="inline-flex items-center gap-1.5 gradient-brand text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:shadow-glow transition-all">
                  <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 glass px-4 py-2 rounded-full text-sm font-medium hover:bg-accent/10 transition-all">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
