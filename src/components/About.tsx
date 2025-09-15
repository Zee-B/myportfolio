import { useEffect, useState, useRef } from "react";

const About = () => {
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

  const skills = [
    { name: "HTML", color: "hsl(var(--skill-html))" },
    { name: "CSS", color: "hsl(var(--skill-css))" },
    { name: "JavaScript", color: "hsl(var(--skill-js))" },
    { name: "React", color: "hsl(var(--skill-react))" },
    { name: "TypeScript", color: "hsl(var(--secondary))" },
    { name: "Node.js", color: "hsl(var(--primary))" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary">About Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bio Text */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
            >
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate Front-End developer with over 5 years of
                experience creating digital experiences that combine beautiful
                design with robust functionality. I specialize in modern web
                technologies and love turning complex problems into simple,
                elegant solutions.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in writing clean,
                maintainable code that scales.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                  Continuous Learner
                </span>
              </div>
            </div>

            {/* Skills Tags */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                Core Technologies
              </h3>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:scale-110 transition-all duration-300 cursor-default animate-bounce-in`}
                    style={{
                      backgroundColor: skill.color,
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-card rounded-2xl shadow-lg border border-border">
                <h4 className="text-lg font-semibold mb-4 text-card-foreground">
                  Quick Stats
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">
                      5+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Learning Mode
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
