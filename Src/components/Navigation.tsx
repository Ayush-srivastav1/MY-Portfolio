import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold gradient-text slide-in-left">
            Ayush Kumar
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground animated-underline transition-colors duration-300"
                onClick={e => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Ayush _Shriwastava_resume_1_.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="glow-primary mr-2">
                View Resume
              </Button>
            </a>
            <a
              href="/Ayush _Shriwastava_resume_1_.pdf"
              download
            >
              <Button variant="outline" size="sm" className="glow-primary">
                Download Resume
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass border-b border-border/30 slide-in-up">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                  onClick={e => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/Ayush _Shriwastava_resume_1_.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" size="sm" className="w-full glow-primary mb-2">
                  View Resume
                </Button>
              </a>
              <a
                href="/Ayush _Shriwastava_resume_1_.pdf"
                download
                className="block"
              >
                <Button variant="outline" size="sm" className="w-full glow-primary">
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;