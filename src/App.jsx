import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";

import Footer from "./components/footer";
import ThemeToggle from "./components/themeToggle";
import Navbar from "./components/navbar";

import './styles/main.scss';


export default function App() {
  return (
    <Router>
      <Navbar />
      <ThemeToggle />
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
}