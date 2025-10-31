import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="font-bold text-2xl mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Kavisha Parikh
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Full-stack software developer passionate about creating exceptional web experiences. 
              Let's build something amazing together.
            </p>
            <div className="flex gap-3">
              <Button 
                size="icon" 
                variant="outline"
                onClick={() => window.open('https://www.linkedin.com/in/kavisha-parikh', '_blank')}
                data-testid="footer-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline"
                onClick={() => window.location.href = 'mailto:kavishap05@gmail.com'}
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-sm text-muted-foreground hover:text-foreground text-left transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-sm text-muted-foreground hover:text-foreground text-left transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-sm text-muted-foreground hover:text-foreground text-left transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-sm text-muted-foreground hover:text-foreground text-left transition-colors"
              >
                Education
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="mailto:kavishap05@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>kavishap05@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 8490963334</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Toronto, Canada</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kavisha Parikh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
