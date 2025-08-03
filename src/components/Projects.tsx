import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  year: string;
  githubUrl?: string;
  demoUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "FaceCx",
      description: "Real-time customer emotion, age & gender analysis system for enhanced customer experience insights",
      technologies: ["Python", "HTML", "CSS", "JavaScript", "Firebase", "TensorFlow", "Keras", "OpenCV"],
      year: "2025",
      githubUrl: "https://github.com/dimuthu-jay/FaceCx.git"
    },
     {
      title: "ProRev Analyzer",
      description: "Intelligent product review sentiment analysis tool using natural language processing for business insights",
      technologies: ["Python", "JavaScript", "Jupyter", "MongoDB"],
      year: "2022-2023",
      githubUrl: "https://github.com/DevakaAlwis/SDGP-Project"
    },
    {
      title: "Ideas - SLT DIGITAL LAB",
      description: "Research Development Platform. Comprehensive portal connecting researchers and organizations to facilitate collaborative research initiatives",
      technologies: ["React.js", "Node.js", "MongoDB"],
      year: "2023-2024",
      // githubUrl: "https://github.com/Daniel0Fernando/Research-Management-Platform.git"
    },
    {
      title: "Ientrada - SLT DIGITAL LAB",
      description: "Employee Face Recognition Attendance System. Automated attendance system using IP cameras and a Raspberry Pi-based edge device to detect, verify, and record employee entries and exits via facial recognition.",
      technologies: ["Python","Raspberry Pi", "OpenCV"],
      year: "2023-2024",
      // githubUrl: "https://github.com/dimuthu-jay/FaceCx-Attendance-System"
    },
    {
      title: "Skin Consultation System",
      description: "Advanced system for managing dermatological consultations with appointment scheduling and patient management",
      technologies: ["Java", "Java Swing"],
      year: "2022",
      githubUrl: "https://github.com/dimuthu-jay/SKIN-CONSULTATION-SYSTEM.git"
    },
    {
      title: "Sports Zone",
      description: "Full-featured ecommerce website for sports goods with shopping cart and payment integration",
      technologies: ["HTML", "CSS", "JavaScript"],
      year: "2021",
      githubUrl: "https://github.com/dimuthu-jay/SPORTS-ZONE.git"
    },
    {
      title: "Academic Progress Prediction System",
      description: "A program for the University to predict progress results at the end of each academic year",
      technologies: ["Python"],
      year: "2021",
      githubUrl: "https://github.com/dimuthu-jay/A-PROGRESS-PREDICTION-SYSTEM.git"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Portfolio & Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in software development, machine learning, and system design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {project.githubUrl && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button 
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;