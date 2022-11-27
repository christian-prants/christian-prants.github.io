import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './screens/header';
import About from './screens/about';
import Projects from './screens/projects';
import Footer from './screens/footer';

import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element = { <About /> } />
        <Route path = "/projects" element = { <Projects /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
