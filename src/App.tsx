import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundOverlay from './components/BackgroundOverlay';

export default function App() {
  return (
    <div className="relative min-h-screen bg-navy-900 text-slate-text">
      <BackgroundOverlay />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <About />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <Research />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <Projects />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <Skills />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <Education />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
