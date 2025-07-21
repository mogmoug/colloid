import "./App.css";
import { navItems } from "./navData";
import { useEffect } from "react";
import NavLink from './components/NavLink';


function App() {
  useEffect(() => {
    const cursorLight = document.getElementById("cursor-light");

    const moveLight = (e) => {
      cursorLight.style.transform = `translate(${e.clientX-150}px, ${e.clientY-150}px)`;
    };

    window.addEventListener("mousemove", moveLight);

    return () => {
      window.removeEventListener("mousemove", moveLight);
    };
  }, []);

  return (
    <div className="nav-container">
      <h1>Colloid 导航站</h1>
      {navItems.map((category) => (
        <div key={category.title} className="nav-category">
          <h2>{category.title}</h2>
          <div className="nav-links">
            {category.links.map((link) => (
              <NavLink key={link.name} link={link} />
            ))}
          </div>
        </div>
      ))}
      <div id="cursor-light"></div>
    </div>
  );
}

export default App;
