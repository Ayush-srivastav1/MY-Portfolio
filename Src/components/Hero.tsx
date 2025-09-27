import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ayush-profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 slide-in-left">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold gradient-text">
                Ayush Kumar
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-secondary">
                Full Stack Developer
              </h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>Kolkata, West Bengal</span>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Enthusiastic software engineering graduate passionate about creating 
              innovative solutions with modern technologies. Specialized in MERN stack 
              and Java development.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="glow-primary pulse-glow" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="#contact">
                  <Mail size={16} className="mr-2 group-hover:text-primary transition-colors" />
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="hover:glow-accent">
                <Github size={20} />
              </Button>
           <Button variant="ghost" size="sm" className="hover:glow-accent" asChild>
                <a href="https://www.linkedin.com/in/ayushsrivastav1705/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                <img
                  src={heroImage}
                  alt="Ayush Kumar Shriwastava"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/30 glow-primary float"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 slide-in-up">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;