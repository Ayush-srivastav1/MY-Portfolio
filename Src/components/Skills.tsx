import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Globe, 
  Server,
  GitBranch,
  Layers
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Java", "JavaScript", "SQL"],
      color: "primary"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js"],
      color: "secondary"
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["MySQL", "Git", "JDBC"],
      color: "accent"
    },
    {
      title: "Frameworks",
      icon: Layers,
      skills: ["MERN Stack", "REST API"],
      color: "success"
    },
    {
      title: "Core Subjects",
      icon: Server,
      skills: ["Computer Networks", "OOPs", "SDLC"],
      color: "primary"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Collaborative Development"],
      color: "secondary"
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl font-bold gradient-text mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`glass hover:glow-accent transition-all duration-300 ${getColorClasses(category.color)} slide-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-${category.color}/10`}>
                    <category.icon className={`text-${category.color}`} size={24} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-muted/20 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Expertise Summary */}
        <div className="mt-16 slide-in-up">
          <Card className="glass glow-primary">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Full Stack Expertise</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Proficient in end-to-end application development with the MERN stack, combining 
                modern frontend technologies with robust backend solutions. Experienced in database 
                design, API development, and version control workflows for collaborative development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;