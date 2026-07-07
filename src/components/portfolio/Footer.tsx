import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display font-black text-2xl mb-3 text-gradient">PARMIDER</h3>
          <p className="text-sm text-foreground/70 max-w-xs">
            Frontend developer crafting fast, accessible, and delightful interfaces for ambitious teams.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Address</h4>
          <address className="not-italic text-sm text-foreground/70 space-y-1">
            <p>123 Ocean Avenue</p>
            <p>San Francisco, CA</p>
            <p>United States</p>
          </address>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="text-sm text-foreground/70 space-y-1 mb-4">
            <li>hello@yourname.dev</li>
            <li>+1 (555) 123-4567</li>
          </ul>
          <div className="flex gap-2">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="h-9 w-9 rounded-full glass grid place-items-center hover:gradient-brand hover:text-white transition-all">
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-foreground/60">
        © 2026 Parminder. All Rights Reserved.
      </div>
    </footer>
  );
}
