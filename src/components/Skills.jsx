import React from "react";

const Skills = () => {
  const categories = [
    { name: "Frontend Core", items: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5 / CSS3"], accent: "from-purple-500 to-pink-500" },
    { name: "Styling Frameworks", items: ["Tailwind CSS", "SASS / SCSS", "Framer Motion", "Material UI"], accent: "from-indigo-500 to-purple-500" },
    { name: "Tooling & Ecosystem", items: ["Node.js", "Git / GitHub", "Vite / Webpack", "REST APIs"], accent: "from-cyan-400 to-indigo-500" }
  ];

  return (
    <section id="skills" className="scroll-mt-28 relative group/section select-none py-12">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="mb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 text-xs font-semibold tracking-[0.15em] text-purple-300 uppercase mb-4 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
          Expertise Matrix
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Technical <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Stack & Architecture</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {categories.map((cat, i) => (
          <div key={i} className="relative overflow-hidden bg-gradient-to-br from-[#121626]/90 via-[#0a0d16]/40 to-[#121625]/90 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/20 hover:-translate-y-1.5 group/card">
            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cat.accent} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`} />
            
            <h3 className="text-xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
              <span className={`w-1 h-4 rounded-full bg-gradient-to-b ${cat.accent} group-hover/card:scale-y-125 transition-transform duration-500`} />
              {cat.name}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {cat.items.map((skill, idx) => (
                <div key={idx} className="relative group/badge px-4 py-2.5 rounded-xl bg-[#070b13]/80 border border-gray-800/80 hover:border-purple-500/30 overflow-hidden transition-all duration-300">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/[0.01] to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity" />
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-purple-400 to-indigo-500 rounded-r-full transition-all duration-300 group-hover/badge:h-1/2" />
                  <span className="relative z-10 text-xs text-gray-400 group-hover/badge:text-white font-mono tracking-wide transition-colors duration-300 block pl-1">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            <div className="absolute -right-4 -bottom-6 text-[120px] font-black text-white/[0.01] select-none font-mono pointer-events-none group-hover/card:text-white/[0.02] group-hover/card:-translate-y-2 transition-all duration-700">
              0{i + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;