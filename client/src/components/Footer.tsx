import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Portfolio
            </h3>
            <p className="text-muted-foreground text-sm">
              Building scalable web applications and enterprise solutions with modern technologies.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <button className="text-sm text-muted-foreground hover:text-foreground text-left">About</button>
              <button className="text-sm text-muted-foreground hover:text-foreground text-left">Projects</button>
              <button className="text-sm text-muted-foreground hover:text-foreground text-left">Contact</button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" data-testid="footer-github">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" data-testid="footer-linkedin">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" data-testid="footer-email">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by a passionate developer
          </p>
        </div>
      </div>
    </footer>
  );
}
