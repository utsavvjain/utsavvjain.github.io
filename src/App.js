import React from "react";
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from "./components/Projects";
import Skills from './components/Skills';
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
   <main className="text-gray-400 bg-gray-900 body-font scroll-auto"> 
      <Navbar />
      <About />
      <Experience/>
      <Projects/>
      <Skills />
      <Contact/>
      <Footer/>
    </main>  

  );
}
