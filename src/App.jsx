import NoiseBg from './components/NoiseBg';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact'; // Import Contact

function App() {
  return (
    <>
      <NoiseBg />
      <Navbar />
      
      <main className="flex flex-col">
        <Hero />
        <About />
        <Portfolio />
        <Contact /> {/* Section Contact yang baru */}
      </main>
    </>
  );
}

export default App;