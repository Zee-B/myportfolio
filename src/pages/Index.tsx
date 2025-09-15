import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import BottomNavbar from '@/components/BottomNavbar';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Main Content */}
      <main className="pb-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Bottom Navigation */}
      <BottomNavbar />
    </div>
  );
};

export default Index;
