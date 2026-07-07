import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import { useState } from "react";
import { ParticleBackground } from "./ParticleBackground";

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <ParticleBackground count={40} speed={0.3} />
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* Left */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative h-56 rounded-3xl gradient-brand mb-8 overflow-hidden shadow-brand">
            <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
            <div className="absolute inset-0 grid place-items-center">
              <Send className="h-16 w-16 text-white/90 animate-float" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Let's <span className="text-gradient">Chat</span>
          </h2>
          <p className="text-foreground/70 mb-8 max-w-md">
            Have a project in mind or just want to say hi? I reply within 24 hours — drop a message and let's build something great.
          </p>

          <motion.ul
            className="space-y-4 mb-8"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Mail,    text: "hello@yourname.dev" },
              { icon: Phone,   text: "+1 (555) 123-4567" },
              { icon: MapPin,  text: "San Francisco, CA" },
            ].map(({ icon: Icon, text }) => (
              <motion.li key={text} variants={itemVariants} className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full glass grid place-items-center">
                  <Icon className="h-4 w-4 text-accent" />
                </span>
                {text}
              </motion.li>
            ))}
          </motion.ul>

          <div className="flex gap-2">
            {[Github, Linkedin, Twitter, Dribbble].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                aria-label="Social link"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.1 }}
                className="h-11 w-11 rounded-full glass grid place-items-center hover:gradient-brand hover:text-white transition-all duration-300"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right form */}
        <motion.form
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
          className="glass rounded-3xl p-6 md:p-8 shadow-brand space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Name"  name="name"  placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" placeholder="jane@example.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="Project inquiry" />
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
            <textarea
              id="message" name="message" rows={6} required
              placeholder="Tell me about your project…"
              className="w-full rounded-2xl bg-card/70 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-accent transition duration-300"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full inline-flex items-center justify-center gap-2 gradient-brand text-primary-foreground px-6 py-4 rounded-2xl font-semibold shadow-brand hover:shadow-glow transition-shadow duration-300"
          >
            <Send className="h-4 w-4" />
            {sent ? "Message Sent!" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        id={name} name={name} type={type} required placeholder={placeholder}
        className="w-full rounded-2xl bg-card/70 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-accent transition duration-300"
      />
    </div>
  );
}
