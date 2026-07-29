import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display font-black text-2xl mb-3 text-gradient">PARMIDER</h3>
          <p className="inline-flex text-sm text-foreground/70 max-w-xs">
            Junior Software Developer crafting fast, accessible, and user-friendly applications
            while continuously learning and growing.{" "}
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Address</h4>
          <address className="not-italic text-sm text-foreground/70 space-y-1">
            <p>Cabadbaran City</p>
            <p>Agusan Del Norte</p>
            <p>Philippines</p>
          </address>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="text-sm text-foreground/70 space-y-1 mb-4">
            <li>parmindercristoria@gmail.com</li>
            <li>+63 (938) 290-7739</li>
          </ul>
          <div className="flex gap-2">
            {[
              { Icon: Github, href: "https://github.com/messy332", label: "GitHub" },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/parminder-cristoria-1a3b38393/",
                label: "LinkedIn",
              },
              {
                Icon: Instagram,
                href: "https://www.instagram.com/dayswithpar",
                label: "Instagram",
              },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="h-9 w-9 rounded-full glass grid place-items-center hover:gradient-brand hover:text-white transition-all"
              >
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
