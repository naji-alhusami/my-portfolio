// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from './components/Skills/Skills';
import Projects from "./components/Projects/Projects";
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="bg-gradient-to-r from-green-300 via-white to-white text-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
