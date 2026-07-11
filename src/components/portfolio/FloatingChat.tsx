import { MessageCircle, X, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "bot"; text: string };

const RESPONSES: { match: RegExp; reply: string }[] = [
  { match: /hire|available|freelance|work with/i, reply: "Yes — I'm currently open to select freelance and full-time roles. Drop your details in the contact form and I'll reply within 24 hours." },
  { match: /project|portfolio|work/i, reply: "Check out the Projects section above — it highlights recent product, dashboard, and design-system work." },
  { match: /skill|stack|tech|tool/i, reply: "My core stack: React, TypeScript, Tailwind, Motion, and Node. See the Skills section for the full list." },
  { match: /price|rate|cost|budget/i, reply: "Rates depend on scope. Share a short brief via the contact form and I'll send a tailored quote." },
  { match: /contact|email|reach/i, reply: "The fastest way is the contact form below — or email hello@yourname.dev." },
  { match: /hi|hello|hey|yo/i, reply: "Hey there! 👋 I'm the portfolio assistant. Ask me about projects, skills, availability, or how to get in touch." },
];

const DEFAULT_REPLY = "Sorry, I didn't understand that. I can only answer questions about this portfolio — try asking about projects, skills, availability, or how to get in touch.";

/** Returns true if the message looks like gibberish or is clearly off-topic */
function isGibberish(text: string): boolean {
  const trimmed = text.trim();
  // Too short to be meaningful
  if (trimmed.length < 2) return true;
  // Repeating characters like "aaaaaa" or "jkjkjk"
  if (/^(.)\1{3,}$/.test(trimmed)) return true;
  // No vowels and longer than 4 chars (likely random key mashing)
  if (trimmed.length > 4 && !/[aeiou]/i.test(trimmed)) return true;
  // Mostly non-alphabetic characters
  const alphaRatio = (trimmed.match(/[a-z]/gi) ?? []).length / trimmed.length;
  if (trimmed.length > 5 && alphaRatio < 0.5) return true;
  return false;
}

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hi! I'm the portfolio assistant. Ask about projects, skills, or availability." },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  const send = (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    const matched = RESPONSES.find((r) => r.match.test(text))?.reply;
    const reply = matched
      ? matched
      : isGibberish(text)
      ? "⚠️ That doesn't look like a valid question. I only handle portfolio-related topics — ask about projects, skills, availability, or contact info."
      : DEFAULT_REPLY;
    const delay = 700 + Math.min(1500, reply.length * 15);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: reply }]);
      setTyping(false);
    }, delay);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 220 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-brand hover:shadow-glow"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="h-5 w-5" />
            </motion.span>
          ) : (
            <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[min(92vw,380px)] h-[520px] max-h-[70vh] rounded-3xl glass shadow-brand flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 flex items-center gap-3 border-b border-border bg-primary text-primary-foreground">
              <div className="h-9 w-9 rounded-full bg-primary-foreground/15 grid place-items-center">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold leading-tight">Portfolio Assistant</p>
                <p className="text-[11px] opacity-80 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
                >
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[80%] bg-primary text-primary-foreground rounded-2xl rounded-br-md px-3.5 py-2 text-sm shadow-soft"
                        : "max-w-[80%] bg-card text-card-foreground border border-border rounded-2xl rounded-bl-md px-3.5 py-2 text-sm shadow-soft"
                    }
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 shadow-soft flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-foreground/50"
                        animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={send} className="p-3 border-t border-border flex items-center gap-2 bg-card/70">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 bg-background border border-border rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent transition"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send"
                className="h-10 w-10 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-soft hover:-translate-y-0.5 transition disabled:opacity-40 disabled:hover:translate-y-0"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
