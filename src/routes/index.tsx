import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { FloatingChat } from "@/components/portfolio/FloatingChat";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "parmind.dev" },
      { name: "description", content: "Portfolio of Your Parmminder — Frontend developer crafting fast, accessible, and delightful web experiences with React, TypeScript, and modern design systems." },
      { property: "og:title", content: "Parminder — Frontend Developer" },
      { property: "og:description", content: "Frontend developer portfolio showcasing selected work, experience, and skills." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <ThemeProvider>
      <div className="relative min-h-dvh">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <FloatingChat />
      </div>
    </ThemeProvider>
  );
}
