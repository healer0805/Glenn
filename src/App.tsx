import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MyServices from './pages/MyServices';
import Branding from './pages/Branding';
import Gaming from './pages/Gaming';
import PastWork from './pages/PastWork';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<MyServices />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/past-work" element={<PastWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
