import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Building, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Java Full Stack Development",
      issuer: "QSpiders Kolkata",
      date: "2024",
      type: "Professional Training",
      skills: ["Java", "Spring Framework", "Database Management", "Full Stack Development"],
      color: "primary"
    },
    {
      title: "TCS iON Career Edge Young Professional",
      issuer: "TCS iON",
      date: "2024",
      type: "Professional Certification",
      skills: ["Professional Skills", "Industry Readiness", "Career Development"],
      color: "secondary"
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft and LinkedIn",
      date: "2024",
      type: "Technology Certification",
      skills: ["Generative AI", "Machine Learning", "AI Applications", "Future Tech"],
      color: "accent"
    },
    {
      title: "Career Essentials in Software Development",
      issuer: "Microsoft and LinkedIn",
      date: "2024",
      type: "Technology Certification",
      skills: ["Software Development", "Best Practices", "Industry Standards", "Career Growth"],
      color: "success"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-primary/30 bg-primary/5";
      case "secondary":
        return "border-secondary/30 bg-secondary/5";
      case "accent":
        return "border-accent/30 bg-accent/5";
      case "success":
        return "border-success/30 bg-success/5";
      default:
        return "border-primary/30 bg-primary/5";
    }
  };

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl font-bold gradient-text mb-4">Certifications & Learning</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning through professional certifications and specialized training programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className={`glass hover:glow-accent transition-all duration-300 group ${getColorClasses(cert.color)} slide-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-${cert.color}/10 group-hover:glow-accent transition-all`}>
                    <Award className={`text-${cert.color}`} size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <Building size={14} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar size={14} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                      <Badge variant="outline" className="ml-auto text-xs">
                        {cert.type}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-secondary">Key Areas</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="secondary"
                            className="text-xs bg-muted/20 hover:bg-primary/20 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Activities */}
        <div className="mt-16 slide-in-up">
          <Card className="glass glow-primary">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold gradient-text mb-4">Extracurricular Activities</h3>
                <p className="text-muted-foreground">
                  Beyond technical skills, I'm actively involved in community service and leadership activities
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full bg-success/10 flex items-center justify-center">
                    <span className="text-success font-bold">🌱</span>
                  </div>
                  <h4 className="font-semibold">Environmental Initiative</h4>
                  <p className="text-sm text-muted-foreground">
                    Organized tree plantation programs near college campus
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-secondary font-bold">🩸</span>
                  </div>
                  <h4 className="font-semibold">Community Service</h4>
                  <p className="text-sm text-muted-foreground">
                    Active volunteer in blood donation camps
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">🎉</span>
                  </div>
                  <h4 className="font-semibold">Event Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Organized and managed college fest events
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;