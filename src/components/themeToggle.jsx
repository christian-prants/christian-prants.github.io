import { useEffect, useState } from "react";

import '../styles/components/themetoggle.scss';


export default function themeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";

    setTheme(savedTheme);
    document.body.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button className="btn-thm-toggle" onClick={toggleTheme}>
      { theme === "light" ? "Modo Escuro" : "Modo Claro" }
    </button>
  );
}
