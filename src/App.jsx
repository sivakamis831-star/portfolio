import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0b0f19] text-gray-100 min-h-screen font-sans selection:bg-purple-500/30 selection:text-purple-300 antialiased overflow-x-hidden relative">
      
      {/* Fixed Core Ambient Background Mesh Lighting */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/15 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Navigation Layer */}
      <Navbar />
      
      {/* Content Layout Column */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pt-28 pb-16">
        <Home />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Terminal Footer Anchor */}
      <Footer />
    </div>
  );
}

export default App;