import { Card } from "@/components/ui/card";
import { Code, Wrench, Users } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    "Python", "Java", "HTML", "CSS", "JavaScript", "SQL", "React", "PHP", 
    "Firebase", "CNNs", "TensorFlow", "Keras", "OpenCV", "Node.js", "MongoDB"
  ];

  const tools = [
    "Git", "Figma", "draw.io", "ClickUp"
  ];

  const interpersonalSkills = [
    "Leadership", "Creativity", "Teamwork", "Flexibility", "Critical Thinking"
  ];

  const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors duration-200">
      {skill}
    </span>
  );

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <Card className="p-8 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 group">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          </Card>

          {/* Tools */}
          <Card className="p-8 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 group">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <SkillBadge key={index} skill={tool} />
              ))}
            </div>
          </Card>

          {/* Interpersonal Skills */}
          <Card className="p-8 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 group">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Interpersonal Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {interpersonalSkills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;