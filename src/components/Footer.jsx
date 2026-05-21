import React from "react";

const Footer = () => {
  return (
    <footer className="relative border-t border-gray-800/40 bg-[#060913]/90 backdrop-blur-xl mt-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 items-center border-b border-gray-800/40">
          
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent inline-block">
              PORTFOLIO<span className="text-purple-500">.</span>
            </a>
            <p className="text-xs text-gray-500 font-light tracking-wide mt-1">
              Designing interfaces with structural precision.
            </p>
          </div>

          <div className="flex justify-center space-x-6 text-xs font-medium tracking-wider text-gray-400">
            {["home", "about", "skills", "education", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="capitalize hover:text-purple-400 transition-colors relative group">
                {item}
                <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-purple-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <a href="#home" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-400 border border-gray-800/80 rounded-xl hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 group">
              Back to Top
              <svg className="w-3 h-3 transform group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              </svg>
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono tracking-wider text-gray-600 space-y-4 sm:space-y-0">
          <div>&copy; {new Date().getFullYear()} PORTFOLIO. DESIGNED WITH STRUCTURAL ELEGANCE.</div>
          <div className="flex space-x-4 items-center">
            <a href="#privacy" className="hover:text-gray-400 transition-colors">PRIVACY_POLICY</a>
            <span className="text-gray-800">/</span>
            <a href="#terms" className="hover:text-gray-400 transition-colors">TERMS_OF_SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;