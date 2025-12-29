import { useState } from "react";
import "./App.css";
import Home from "./compopnents/Home";
import About from "./compopnents/About";
import Projects from "./compopnents/Projects";
import Navbar from "./compopnents/Navbar";
import Footer from "./compopnents/Footer";
import Experience from "./compopnents/Experience";
import DefaultTransition from "./compopnents/DefaultTransition";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-mono text-gray-800">
      <DefaultTransition duration={1500} />
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
