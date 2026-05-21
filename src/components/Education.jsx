import React from "react";

const Education = () => {
  const history = [
    { degree: "M.S. in Computer Science", school: "Tech Institute of Engineering", year: "2022 - 2024", description: "Advanced focus on Distributed Systems, Cloud Architecture, and Client-Side Optimization Frameworks." },
    { degree: "B.S. in Information Technology", school: "State University Systems", year: "2018 - 2022", description: "Core emphasis on Data Structures, Client-Side Engineering, and Database Systems." }
  ];

  return (
    <section id="education" className="scroll-mt-28 relative group/section py-12">
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="mb-14 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold tracking-widest text-purple-300 uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
          Qualifications
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Education <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">& Academic Foundation</span>
        </h2>
      </div>

      <div className="relative border-l border-gray-800/60 ml-4 md:ml-6 space-y-10 max-w-4xl">
        <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500/30 to-transparent pointer-events-none" />

        {history.map((item, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12 group/node">
            <div className="absolute -left-[7px] top-[30px] w-3 h-3 rounded-full bg-[#0b0f19] border-2 border-gray-700 transition-all duration-500 group-hover/node:border-purple-400 group-hover/node:bg-purple-500 group-hover/node:scale-125 group-hover/node:shadow-[0_0_15px_#a855f7]" />
            
            <div className="relative bg-gradient-to-br from-[#13192c]/80 via-[#0c101d]/40 to-[#13192b]/80 border border-gray-800/60 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-lg transition-all duration-500 hover:border-purple-500/20 hover:-translate-y-1">
              <div className="absolute top-0 left-16 right-16 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover/node:opacity-100 transition-opacity" />
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover/node:text-purple-300 transition-colors">{item.degree}</h3>
                  <p className="text-sm md:text-base text-gray-400 font-medium mt-1 tracking-wide">{item.school}</p>
                </div>
                <div className="self-start md:self-center font-mono text-xs font-semibold text-purple-400 bg-purple-500/5 border border-purple-500/10 px-3 py-1.5 rounded-xl backdrop-blur-sm">
                  {item.year}
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-400/80 font-light leading-relaxed max-w-3xl border-t border-gray-800/40 pt-4 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;