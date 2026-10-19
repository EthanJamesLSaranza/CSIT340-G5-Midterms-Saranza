import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Stats from './components/Stats'
import Features from './components/Features'
import Footer from './components/Footer'


function App() {

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F2] text-[#800020]">
      <Navbar />
      <Hero />
      <Intro author="Ethan James L. Saranza" />
      <Stats stars={0} downloads={0} issues={5} />
      <Features />

      <Footer />
    </div>
  );
}

export default App;