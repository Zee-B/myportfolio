import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
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

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Zee-B",
      color: "hover:text-foreground",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "#",
      color: "hover:text-secondary",
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:ogundaresamson14@gmail.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
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
              <span className="text-primary">Let's Work Together</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas
              to life.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "animate-slide-in-up" : "opacity-0"
            }`}
          >
            {/* Contact Info */}
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-muted-foreground">
                      ogundaresamson14@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <p className="text-muted-foreground">+234 8164 8996 07</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-skill-html rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-muted-foreground">Abeokuta/Lagos, NG</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                Follow Me
              </h3>

              <div className="flex flex-col space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 bg-muted rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 animate-scale-in ${link.color}`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 text-white">
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-semibold">{link.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Connect with me
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 bg-muted rounded-xl border border-border">
                <h4 className="font-semibold mb-2 text-card-foreground">
                  Let's Build Something Amazing
                </h4>
                <p className="text-sm text-muted-foreground">
                  I'm always open to discussing new opportunities, creative
                  projects, or just having a friendly chat about technology.
                </p>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div
            className={`mt-12 text-center transition-all duration-1000 delay-600 ${
              isVisible ? "animate-bounce-in" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-full shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm text-muted-foreground">
                Usually responds within 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
