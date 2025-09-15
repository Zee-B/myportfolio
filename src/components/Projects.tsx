import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
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

  const projects = [
    {
      title: "E-Commerce Frontend",
      description:
        "A modern e-commerce frontend with shopping cart, product filtering, responsive design, and smooth animations. Features dynamic product displays, search functionality, and optimized user experience.",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "React Query",
        "Framer Motion",
      ],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce-frontend",
      color: "bg-skill-react",
    },
    {
      title: "Interactive Dashboard",
      description:
        "A responsive admin dashboard with data visualizations, interactive charts, dark/light theme toggle, and real-time UI updates. Built with modern React patterns and hooks.",
      tech: ["React", "Chart.js", "Material-UI", "React Router", "CSS Grid"],
      liveUrl: "https://example-dashboard.com",
      githubUrl: "https://github.com/username/react-dashboard",
      color: "bg-skill-css",
    },
    {
      title: "Weather App",
      description:
        "A beautiful weather application with location search, 7-day forecasts, animated weather icons, and responsive design. Features smooth transitions and modern UI patterns.",
      tech: ["TypeScript", "React", "Tailwind CSS", "Axios", "React Hooks"],
      liveUrl: "https://example-weather.com",
      githubUrl: "https://github.com/username/weather-app",
      color: "bg-skill-js",
    },
    {
      title: "Portfolio Gallery",
      description:
        "A stunning portfolio gallery with image optimization, lazy loading, lightbox functionality, and smooth animations. Showcases responsive design and performance optimization.",
      tech: [
        "Next.js",
        "React",
        "CSS Modules",
        "Intersection Observer",
        "WebP",
      ],
      liveUrl: "https://example-gallery.com",
      githubUrl: "https://github.com/username/portfolio-gallery",
      color: "bg-secondary",
    },
    {
      title: "Interactive Landing Page",
      description:
        "A modern landing page with parallax scrolling, CSS animations, contact forms, and mobile-first design. Features smooth scroll effects and optimized performance.",
      tech: ["React", "SCSS", "Tailwind CSS", "AOS Library", "React Hook Form"],
      liveUrl: "https://example-landing.com",
      githubUrl: "https://github.com/username/landing-page",
      color: "bg-primary",
    },
    {
      title: "Task Manager UI",
      description:
        "A clean task management interface with drag-and-drop functionality, custom components, state management, and intuitive user experience design.",
      tech: [
        "React",
        "TypeScript",
        "React DnD",
        "Styled Components",
        "Context API",
      ],
      liveUrl: "https://example-tasks.com",
      githubUrl: "https://github.com/username/task-manager-ui",
      color: "bg-skill-html",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
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
              <span className="text-primary">Featured Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Frontend applications showcasing modern web development skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Header */}
                <div className={`p-6 ${project.color} text-white relative`}>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm opacity-90">
                        Frontend Project
                      </span>
                    </div>
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
                      Frontend Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
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

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
              isVisible ? "animate-bounce-in" : "opacity-0"
            }`}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
