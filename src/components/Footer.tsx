import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Name and Title */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">
              Ayush Kumar Shriwastava
            </h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>

          {/* Center: Social Links */}
          <div className="flex justify-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:glow-accent"
              asChild
            >
              <a href="https://github.com/Ayush-srivastav1" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:glow-accent"
              asChild
            >
                 <a href="https://www.linkedin.com/in/ayushsrivastav1705/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:glow-accent"
              asChild
            >
              <a href="mailto:ayushsrivastav1786@gmail.com">
                <Mail size={18} />
              </a>
            </Button>
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Made with <Heart size={14} className="text-primary" /> by Ayush Kumar
            </p>
          </div>
        </div>

        {/* Bottom: Additional Info removed as requested */}
      </div>
    </footer>
  );
};

export default Footer;