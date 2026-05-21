import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 select-none ${
      scrolled 
        ? "bg-[#030c08]/80 backdrop-blur-2xl border-b border-emerald-950/40 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.8)]" 
        : "bg-transparent py-6"
    }`}>
      {/* Laser Top Accent Line (Tuned to Luxury Emerald & Champagne Gold) */}
      <div className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-500/30 via-amber-400/20 to-transparent transition-opacity duration-700 ${scrolled ? "opacity-100" : "opacity-0"}`} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Elite Brand Signature (Portfolio text removed, replaced with premium initials) */}
        <a href="#home" className="group flex items-center gap-1 text-xl font-black tracking-[0.2em] text-white font-serif">
          <span className="bg-gradient-to-r from-white via-emerald-200 to-amber-200 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            Sivakami
          </span>
          <span className="text-emerald-400 text-xl transition-transform duration-500 group-hover:translate-x-1">A</span>
        </a>

        {/* Directory Floating Capsule */}
        <div className={`hidden md:flex items-center gap-1 px-2 py-1 rounded-full transition-all duration-500 ${
          scrolled ? "bg-[#020806]/60 border border-emerald-900/40 backdrop-blur-md" : "bg-transparent"
        }`}>
          {["home", "about", "skills", "education", "contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="text-emerald-100/50 hover:text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-300 relative group"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-emerald-400 to-amber-300 transition-all duration-300 group-hover:w-1/3" />
              <span className="absolute inset-0 rounded-full bg-emerald-500/[0.02] opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Premium Neon Matte Border Call to Action */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white rounded-xl overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-[length:200%_auto] bg-left group-hover:bg-right transition-all duration-500 rounded-xl" />
            <span className="absolute inset-[1px] bg-[#020806] rounded-[11px] transition-colors duration-300 group-hover:bg-transparent" />
            <span className="relative z-10 bg-gradient-to-r from-emerald-300 to-amber-200 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
              Hire Me
            </span>
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;