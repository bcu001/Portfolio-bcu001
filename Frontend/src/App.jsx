import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="transition-all duration-500 relative">
        <Navbar />
        <Home />
        <Skill />
        <Project />
        <Contact />
        <div>
          <a
            href="#top"
            className="fixed bottom-3 right-4 border border-black rounded-full bg-green-400 p-2 hover:bg-green-500"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
