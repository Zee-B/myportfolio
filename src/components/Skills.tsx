import { useEffect, useState, useRef } from "react";
import { Code2, Globe, Smartphone } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-8 h-8" />,
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "HTML5/CSS3",
        "JavaScript",
      ],
      color: "bg-skill-react",
    },
    {
      title: "Web3 & Blockchain",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        "Solidity",
        "Ethereum",
        "Smart Contracts",
        "Metamask Integration",
        "NFTs",
        "DeFi",
      ],
      color: "bg-primary",
    },
    {
      title: "React Native",
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        "React Native",
        "Expo",
        "React Navigation",
        "Native Modules",
        "Mobile UI/UX",
      ],
      color: "bg-skill-html",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary">Skills & Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group p-6 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-scale-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-xl ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`flex items-center p-3 bg-muted/50 rounded-lg hover:bg-muted transition-all duration-300 animate-fade-in`}
                      style={{
                        animationDelay: `${index * 150 + skillIndex * 50}ms`,
                      }}
                    >
                      <div className="w-2 h-2 bg-current rounded-full mr-3 opacity-70"></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">
                      Proficiency
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {category.title === "Web3 & Blockchain" ||
                      category.title === "React Native"
                        ? "Beginner"
                        : "Advanced"}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 ${category.color} rounded-full animate-[slideInWidth_1.5s_ease-out_forwards]`}
                      style={{
                        width:
                          category.title === "Web3 & Blockchain" ||
                          category.title === "React Native"
                            ? "40%"
                            : "85%",
                        animationDelay: `${index * 200}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Banner */}
          <div
            className={`mt-16 p-8 bg-muted rounded-2xl border border-border text-center transition-all duration-1000 delay-1000 ${
              isVisible ? "animate-bounce-in" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Always Learning, Always Growing
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Currently exploring: Web3 Development, Crypto Protocols, React
              Native, and Advanced Frontend Optimization
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Web3",
                "Blockchain",
                "Ethereum",
                "Solidity",
                "React Native",
                "Mobile Development",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-card text-card-foreground rounded-full text-sm font-medium border border-border hover:border-primary hover:text-primary transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
