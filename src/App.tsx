import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoBackground from './components/VideoBackground';
import Destinations from './components/Destinations';
import About from './components/About';
import Journal from './components/Journal';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full bg-background">
      <section id="inicio" className="relative min-h-screen w-full overflow-hidden">
        <VideoBackground />
        <Navbar />
        <Hero />
      </section>

      <Destinations />
      <About />
      <Journal />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
