import { useState, useEffect } from 'react';
import { Home, User, Code, FolderOpen, Mail } from 'lucide-react';

const BottomNavbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'about', label: 'About', icon: <User className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-t border-border shadow-lg">
      <div className="max-w-md mx-auto px-4 py-2">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 hover:scale-110 group ${
                  isActive 
                    ? 'bg-primary text-white shadow-lg scale-110' 
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                }`}
                aria-label={`Navigate to ${item.label} section`}
              >
                <div className={`transition-transform duration-300 ${
                  isActive ? 'scale-110' : 'group-hover:scale-110'
                }`}>
                  {item.icon}
                </div>
                
                <span className={`text-xs mt-1 font-medium transition-all duration-300 ${
                  isActive 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-70 transform translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'
                }`}>
                  {item.label}
                </span>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -top-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Navigation Background */}
        <div className="absolute inset-x-0 -top-4 h-1 bg-primary opacity-30 blur-sm"></div>
      </div>
    </nav>
  );
};

export default BottomNavbar;