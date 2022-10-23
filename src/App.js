import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Layout/Header';
import Home from './Components/Links/Home';
import Projects from './Components/Links/Projects';
import Resume from "./Components/Links/Resume";
import Footer from './Components/Layout/Footer';

import classes from './App.module.css';

function App() {
  return (
    <Router>
      <div className={classes.app}>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/resume" element={<Resume/>} />
        </Routes>
        <Footer />   
      </div>
    </Router>
  );
}

export default App;
