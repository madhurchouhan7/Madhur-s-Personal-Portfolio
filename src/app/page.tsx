import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Education from '@/components/Education';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 md:px-6">
        <Hero />
        <TechStack />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
