import React from "react";

const About = () => {
  return (
    <section id="about" className="scroll-mt-28 relative group select-none py-12 bg-black">
      {/* Background flare */}
      <div className="absolute -top-16 -left-12 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative overflow-hidden bg-black border border-gray-800/50 rounded-3xl p-8 md:p-14 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] hover:border-purple-500/20 transition-all duration-500">
        
        {/* Structural Framing Lines */}
        <div className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-purple-500/30 to-transparent" />
        <div className="absolute top-0 left-0 w-[1px] h-16 bg-gradient-to-b from-purple-500/30 to-transparent" />

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          
          {/* Left Column: Title */}
          <div className="md:col-span-5 flex flex-col justify-start md:sticky md:top-36">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 text-xs font-semibold tracking-[0.2em] uppercase text-purple-300 mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
              Identity
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              About <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">My Craft</span>
            </h2>
            <div className="w-14 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 mt-6 rounded-full group-hover:w-24 transition-all duration-700" />
          </div>
          
          {/* Right Column: Text */}
          <div className="md:col-span-7 space-y-6 text-gray-400 font-light leading-relaxed text-base md:text-lg">
            <p className="text-gray-200 font-normal md:text-xl border-l-2 border-purple-500/40 pl-4 md:pl-6 italic my-6 py-2 bg-purple-500/[0.01]">
              "Turning abstract algorithmic density into highly fluid layout frameworks that retain continuous functional performance."
            </p>
            <p className="hover:text-gray-300 transition-colors duration-300">
              Hello! I am a software engineer deeply driven by architectural layout systems. I focus intensely on client-side compilation trees, performance scoring modules, and asset optimization parameters to scale software securely.
            </p>
            
            {/* Metric Score Panels */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800/40 mt-10">
              <div className="p-5 rounded-2xl bg-black/40 border border-gray-800/60 transition-all duration-300 hover:border-purple-500/20 hover:-translate-y-1 group/stat">
                <p className="text-3xl md:text-4xl font-black text-white font-mono bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover/stat:from-purple-300 group-hover/stat:to-purple-500">
                  03+
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-medium mt-1.5">
                  Years Experience
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-black/40 border border-gray-800/60 transition-all duration-300 hover:border-purple-500/20 hover:-translate-y-1 group/stat">
                <p className="text-3xl md:text-4xl font-black text-white font-mono bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover/stat:from-indigo-300 group-hover/stat:to-indigo-500">
                  40+
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-medium mt-1.5">
                  Systems Delivered
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;