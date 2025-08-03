import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a dedicated Software Engineer with a BEng (Hons) in Software Engineering, I'm passionate about 
              creating innovative solutions that make a real difference. My journey in technology has been driven 
              by curiosity and a constant desire to learn and adapt to new challenges.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have one year of hands-on experience in full-stack development and UI/UX Design. 
              My experience spans from building real-time analytics systems to developing user-friendly 
              web applications. I believe in writing clean, efficient code and collaborating effectively with 
              teams to deliver exceptional results.

            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
              and mentoring fellow developers. I'm always open to new opportunities and exciting challenges 
              that push the boundaries of what's possible.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            <Card className="p-6 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
                  <p className="text-primary font-medium">BEng (Hons) Software Engineering</p>
                  <p className="text-muted-foreground">Informatics Institute of Technology</p>
                  <p className="text-muted-foreground text-sm">(affiliated with University of Westminster, UK)</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Experience</h3>
                  <p className="text-primary font-medium">SLT DIGITAL LAB | 2023 - 2024</p>
                  <p className="text-muted-foreground">Worked as a full-stack developer at SLT DIGITAL LAB.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Graduation Year</h3>
                  <p className="text-primary font-medium">2025</p>
                  <p className="text-muted-foreground">Second Class Honours  </p>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;