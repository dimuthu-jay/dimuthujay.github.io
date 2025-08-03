import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight, Sparkles } from "lucide-react";
import dimuthuProfile from "@/assets/dimuthu-profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

   const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.usercontent.google.com/download?id=1t4O5PtYJZf4XG-7cinZeGgDlJpuRDZLy&export=download&authuser=1';
    link.download = 'Dimuthu-Jayathunga-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
       <section id="home" className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden pt-20">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-slide-in-left">
          {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-sm text-primary font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for work
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Dimuthu</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-tech-accent bg-clip-text text-transparent">
                  Jayathunga
                </span>
                <span className="text-foreground">.</span>
              </h1>
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-tech-accent"></div>
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-primary rounded-full"></div>
                <h2 className="text-2xl lg:text-3xl text-foreground font-semibold">
                  Software Engineer
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-light">
                Dedicated and open-minded tech enthusiast with a passion for learning and exploring 
                <span className="text-primary font-medium"> untapped opportunities</span>.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              size="lg"
              onClick={downloadCV}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              onClick={scrollToContact}
              className="group bg-background/50 backdrop-blur-sm border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Contact Me
            </Button>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-4">
            {['React', 'Python', 'Java', 'TensorFlow'].map((tech, index) => (
              <span 
                key={tech}
                className="px-3 py-1 text-xs bg-card/50 backdrop-blur-sm border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 cursor-default"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Content - Enhanced Profile Image */}
        <div className="flex justify-center animate-slide-in-right">
          <div className="relative group">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-tech-accent p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-background"></div>
            </div>
            
            {/* Main Profile Container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-elevated group-hover:shadow-glow transition-all duration-500">
              <img 
                src={dimuthuProfile} 
                alt="Dimuthu Jayathunga" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-primary to-tech-accent rounded-full flex items-center justify-center animate-float shadow-glow">
              <Sparkles className="w-6 h-6 text-background" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-tech-accent to-primary rounded-full animate-float shadow-lg" style={{animationDelay: '1s'}}></div>
            
            {/* Code Brackets */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-4xl text-primary/40 font-mono animate-pulse">{'{'}</div>
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-4xl text-primary/40 font-mono animate-pulse" style={{animationDelay: '0.5s'}}>{'}'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;