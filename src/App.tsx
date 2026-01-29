import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MyServices from './pages/MyServices';
import WorkExperience from './pages/WorkExperience';
import PastWork from './pages/PastWork';
import Contact from './pages/Contact';
import Education from './pages/Education';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<MyServices />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/past-work" element={<PastWork />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
