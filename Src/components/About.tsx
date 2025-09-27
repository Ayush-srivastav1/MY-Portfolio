import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    "Full Stack Development",
    "MERN Stack", 
    "Java Programming",
    "Problem Solving",
    "Team Collaboration",
    "Continuous Learning"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about technology and driven by curiosity to build meaningful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6 slide-in-left">
            <Card className="glass glow-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a dedicated software engineering graduate with a passion for creating 
                  innovative digital solutions. My journey in technology began with curiosity 
                  and has evolved into expertise across multiple programming languages and 
                  frameworks.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in full-stack development, particularly with the MERN stack, 
                  and have a strong foundation in Java programming. I believe in writing 
                  clean, efficient code and am always eager to learn new technologies and 
                  tackle challenging problems.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Highlights */}
          <div className="space-y-6 slide-in-right">
            <Card className="glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-secondary">Key Highlights</h3>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((highlight, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="justify-center py-2 px-4 bg-muted/30 hover:bg-primary/20 transition-colors"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-accent">My Values</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">Innovation</h4>
                    <p className="text-muted-foreground text-sm">
                      Always exploring new technologies and creative solutions
                    </p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold">Quality</h4>
                    <p className="text-muted-foreground text-sm">
                      Committed to writing clean, maintainable, and efficient code
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold">Growth</h4>
                    <p className="text-muted-foreground text-sm">
                      Continuously learning and adapting to new challenges
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;