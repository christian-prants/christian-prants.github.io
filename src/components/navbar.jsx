import { Link } from "react-router-dom";

import '../styles/components/navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/"><button>Home</button></Link>
      <Link to="/about"><button>About</button></Link>
      <Link to="/project"><button>Projects</button></Link>

      <button>Contact</button> 
    </div>
  );
}
