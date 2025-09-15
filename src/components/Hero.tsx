import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import profileImage from "@/assets/zee.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div
          className={`text-center lg:text-left transition-all duration-1000 ${
            isVisible ? "animate-slide-in-left" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-primary">Hello, I'm</span>
            <br />
            <span className="text-foreground">
              Ogundare Samson <span className="text-primary">[Zee]</span>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Front-End Developer passionate about creating beautiful, functional
            web experiences with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div
          className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
            isVisible ? "animate-slide-in-right" : "opacity-0"
          }`}
        >
          <div className="relative">
            <img
              src={profileImage}
              alt="Alex Johnson - Full Stack Developer"
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/20 shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown
          onClick={() => scrollToSection("about")}
          className="w-8 h-8 text-primary cursor-pointer hover:scale-110 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;
