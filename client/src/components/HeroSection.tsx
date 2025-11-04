import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@assets/Kavisha_1761914756981.jpg";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl lg:text-6xl font-bold tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Kavisha Parikh
              <span className="block text-primary mt-2">
                Software Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Experienced full-stack developer with 3.5+ years specializing in
              React.js, TypeScript, and modern web technologies. Passionate
              about building scalable, high-performance applications with
              exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                data-testid="button-hire-me"
              >
                Hire Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-4 pt-4"
            >
              <Button
                size="icon"
                variant="ghost"
                data-testid="button-linkedin"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/kavishaparikh",
                    "_blank"
                  )
                }
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                data-testid="button-email"
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&to=kavishap05@gmail.com",
                    "_blank"
                  )
                }
              >
                <Mail className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                data-testid="button-email"
                onClick={() =>
                  window.open("https://github.com/kavishaparikh", "_blank")
                }
              >
                <Github className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-2xl" />
              <img
                src={heroImage}
                alt="Kavisha Parikh"
                className="relative rounded-lg shadow-2xl w-full max-w-md mx-auto object-cover object-top h-[500px]"
                data-testid="img-hero-photo"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
