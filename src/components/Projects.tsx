import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import codrify from "@/assets/codrify.png";
import tikfetch from "@/assets/tikfect.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Codrify | Code Testing Platform",
      image: codrify,
      description:
        "A full-Stack Project: Codrify is a developer-focused platform I built to help programmers instantly test and validate code in multiple languages, including JavaScript, TypeScript, and Python. It uses AI-assisted evaluation to detect errors, provide real-time feedback, and optimize code performance.",
      tech: ["React", "TypeScript", "Tailwind CSS", "React Query", "Supabase"],
      liveUrl: "https://codrifydemo.netlify.app/",
      githubUrl: "https://github.com/Zee-B/codrifytesting",
      color: "bg-skill-react",
    },
    {
      title: "Landing Page + Coming soon countdown",
      image: tikfetch,
      description:
        "A fully functional and responsive landing page recreated from a UI design spotted on X (formerly Twitter). It features a dynamic countdown timer and serves as a polished “Coming Soon” page, built using well-structured React.js components.",
      tech: ["Reactjs", "Framer Motion", "react-countdown", "React Router"],
      liveUrl: "https://tikfetchdemo.netlify.app/",
      githubUrl: "https://github.com/Zee-B/tikfetch",
      color: "bg-skill-css",
    },
    {
      title: "Weather App",
      image: "/assets/projects/weather.png",
      description:
        "A beautiful weather app with location search, 7-day forecasts, animated weather icons, and responsive design.",
      tech: ["TypeScript", "React", "Tailwind CSS", "Axios"],
      liveUrl: "https://example-weather.com",
      githubUrl: "https://github.com/username/weather-app",
      color: "bg-skill-js",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Frontend applications showcasing modern web development skills
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />

              {/* Project Header */}
              <div className={`p-6 ${project.color} text-white`}>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm opacity-90">Frontend Project</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-card-foreground">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    asChild
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: projects.length * 0.2, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my frontend work?
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
