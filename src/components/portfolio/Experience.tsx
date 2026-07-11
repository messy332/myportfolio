import { motion } from "motion/react";
import { GraduationCap, ExternalLink, Award } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";

const experiences = [
  { company: "Apply AI", role: "Certification", years: "2026", desc: "Practical training in applying AI to real-world problems, including prompt engineering and workflow automation directly relevant to evaluating and refining AI-generated code.", pdf: "/image/Apply_AI-_Update_Your_Resume_certificate_parmindercristoria-AI-Data Science.pdf", icon: "cert" },
  { company: "AI Ignite for MSMEs", role: "Certification", years: "2026", desc: "Training on applying AI to improve business operations and data-driven decision-making.", pdf: "/image/Certificate of Completion.pdf", icon: "cert" },
  { company: "Data Analytics", role: "Certification", years: "2026", desc: "Data collection, cleaning, visualization, and interpretation techniques.", pdf: "/image/Parminder Cristoria.pdf", icon: "cert" },
  { company: "Java Essentials", role: "Certification · 40 Hours", years: "2025", desc: "Core Java and object-oriented programming fundamentals, strengthening general programming-language proficiency.", pdf: "/image/JAVA PROGRAMMING ESSENTIALS - CSU - CBR (1)-19(isigned)_signed.pdf", icon: "cert" },
  { company: "PSC 10", role: "Top 15 Finalist", years: "2025", desc: "Built and pitched a technology-based startup solution as part of a team at the Philippine Startup Challenge 10.", pdf: "/image/Cristoria_Top15RPC_2025-37.pdf", icon: "award" },
];

const education = [
  { degree: "Bachelor of Science in Information Technology", school: "Caraga State University Cabadbaran Campus", year: "S.Y 2023 - Up to Present" },
];



export function Experience() {
  const loop = [...experiences, ...experiences];
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      <ParticleBackground count={40} speed={0.3} />
      <div className="relative z-10 max-w-6xl mx-auto">
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
                <div className="mb-4">
                  {e.icon === "award"
                    ? <Award className="h-10 w-10 text-brand-blue" />
                    : <GraduationCap className="h-10 w-10 text-brand-blue" />
                  }
                </div>
                <h3 className="font-bold text-lg">{e.company}</h3>
                <p className="text-sm text-accent font-medium">{e.role}</p>
                <p className="text-xs text-muted-foreground mb-2">{e.years}</p>
                <p className="text-sm text-foreground/70">{e.desc}</p>
                {e.pdf && (
                  <a
                    href={e.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-brand-blue hover:underline"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    View Certificate
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div id="education" className="relative z-10 max-w-6xl mx-auto mt-24">
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
