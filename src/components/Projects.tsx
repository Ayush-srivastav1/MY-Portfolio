import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ATS Resume Scorer",
      description: "A Java-based tool that evaluates resumes against job descriptions using keyword matching, formatting analysis, and weighted scoring logic to help optimize resumes for Applicant Tracking Systems.",
      technologies: ["Java", "JDBC", "Algorithm Design", "File Processing"],
      github: "https://github.com/Ayush-srivastav1/ATS-Resume-Scorer",
      liveDemo: null,
      features: [
        "Keyword matching algorithm",
        "Formatting analysis",
        "Experience & skills scoring",
        "ATS optimization insights"
      ],
      category: "Desktop Application"
    },
    {
      title: "PACK-YOUR-BAGS",
      description: "A responsive tourism website built with modern web technologies, featuring an intuitive user interface for travel planning and destination exploration.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/Ayush-srivastav1/Pack-Your-Bags",
      liveDemo: "https://ayush-srivastav-pack-your-bags.netlify.app/",
      features: [
        "Responsive UI design",
        "Interactive destination browser",
        "Tourism-focused features",
        "Optimized deployment"
      ],
      category: "Web Application"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing practical applications of my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass hover:glow-accent transition-all duration-300 group slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl gradient-text group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="hover:glow-primary"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                        </a>
                      </Button>
                    )}
                    {project.liveDemo && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="hover:glow-secondary"
                        asChild
                      >
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-secondary">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-muted/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.github && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Code2 size={16} className="mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.liveDemo && (
                    <Button size="sm" className="flex-1 glow-primary" asChild>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <Globe size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12 slide-in-up">
          <Card className="glass inline-block">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Interested in more projects?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Check out my GitHub for additional projects and contributions
              </p>
              <Button variant="outline" className="glow-accent" asChild>
                <a href="https://github.com/Ayush-srivastav1" target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-2" />
                  View All Projects
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;