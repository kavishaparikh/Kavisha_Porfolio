import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_developer_headshot_photo_186eff02.png";

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
            <Badge className="text-sm" data-testid="badge-availability">
              Available for Freelance Projects
            </Badge>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl lg:text-6xl font-bold tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Full-Stack Developer
              <span className="block text-primary mt-2">Building Digital Excellence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Experienced developer with 3+ years creating scalable web applications, 
              cloud integrations, and enterprise solutions. Specialized in delivering 
              high-quality code with modern technologies.
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
              <Button 
                size="lg" 
                variant="outline"
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-4 pt-4"
            >
              <Button size="icon" variant="ghost" data-testid="button-github">
                <Github className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-linkedin">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-email">
                <Mail className="w-5 h-5" />
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
                alt="Professional developer"
                className="relative rounded-lg shadow-2xl w-full max-w-md mx-auto"
                data-testid="img-hero-photo"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
