import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center scroll-mt-28 relative overflow-hidden select-none group/hero py-24 px-4 bg-[#020806]"
    >
      {/* Premium Keyframe & Typography */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700;900&family=Montserrat:wght@100;300;900&display=swap');

            .premium-luxury-font {
              font-family: 'Cinzel', serif;
            }

            @keyframes customFadeUp {
              0% { opacity: 0; transform: translateY(40px) scale(0.98); filter: blur(10px); }
              100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
            }
            @keyframes customFloat {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-10px) rotate(0.5deg); }
            }
            @keyframes waveStream {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            @keyframes precisionScan {
              0% { top: -5%; opacity: 0; }
              10%, 90% { opacity: 1; }
              100% { top: 105%; opacity: 0; }
            }
            @keyframes infiniteSpin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes pulseGlow {
              0%, 100% { opacity: 0.2; transform: scale(1); }
              50% { opacity: 0.4; transform: scale(1.05); }
            }
            .animate-ultra-fade { animation: customFadeUp 1.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
            .animate-luxury-float { animation: customFloat 8s ease-in-out infinite; }
          `,
        }}
      />

      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98105_1px,transparent_1px),linear-gradient(to_bottom,#10b98105_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0 opacity-80" />

      {/* Gradient Flare Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[850px] h-[500px] sm:h-[850px] bg-gradient-to-tr from-emerald-600/10 via-teal-900/10 to-transparent rounded-full blur-[160px] pointer-events-none z-0 mix-blend-screen transition-all duration-1000 group-hover/hero:scale-105" />
      <div
        className="absolute bottom-1/4 right-1/4 translate-x-1/4 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen opacity-70"
        style={{ animation: "pulseGlow 7s ease-in-out infinite" }}
      />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Floating Status Badge */}
      <div className="relative z-10 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-950/40 via-[#030c08]/90 to-amber-950/20 border border-emerald-500/20 hover:border-emerald-400/40 text-emerald-300 text-[10px] font-bold tracking-[0.25em] uppercase mb-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9),0_0_20px_rgba(16,185,129,0.05)] backdrop-blur-2xl transition-all duration-500 cursor-pointer group/badge animate-ultra-fade animate-luxury-float">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-emerald-400 to-amber-300 shadow-[0_0_12px_#34d399]" />
        </span>
        <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-emerald-200 bg-clip-text text-transparent group-hover/badge:from-white group-hover/badge:to-emerald-200 transition-all duration-300">
          Available for Premium Roles
        </span>
      </div>

      {/* Profile Picture (Enlarged) */}
      <div className="relative z-10 mb-10 animate-ultra-fade [animation-delay:200ms]">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-[6px] bg-gradient-to-tr from-emerald-500 via-stone-800 via-amber-400/60 to-teal-500 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_60px_rgba(16,185,129,0.15),0_0_100px_rgba(245,158,11,0.05)] transition-all duration-1000 overflow-hidden hover:shadow-[0_30px_80px_-10px_rgba(16,185,129,0.25)]">
          <div
            className="absolute inset-0 w-full h-full bg-gradient-to-tr from-emerald-400 via-transparent to-amber-300 opacity-40 mix-blend-screen pointer-events-none"
            style={{ animation: "infiniteSpin 12s linear infinite" }}
          />
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#030c08] border border-emerald-950 z-10">
            <img
              src="/image/sivu.jpeg"
              alt="Sivakami A Portrait"
              className="w-full h-full object-cover scale-100 group-hover/hero:scale-105 transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1)"
            />
            <div
              className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400 via-amber-200 to-transparent pointer-events-none shadow-[0_0_8px_#34d399]"
              style={{ animation: "precisionScan 4s cubic-bezier(0.4, 0, 0.2, 1) infinite" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020806]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-[8px] font-mono font-bold tracking-[0.3em] text-emerald-400/80 bg-[#030c08]/95 px-3 py-1 rounded-md border border-emerald-500/20 shadow-xl backdrop-blur-md">
          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
          <span>SYS.ENG://SIVAKAMI</span>
        </div>
      </div>

      {/* Name Headline */}
      <div className="relative z-10 mb-8 max-w-5xl px-4 animate-ultra-fade [animation-delay:400ms]">
        <h1 className="premium-luxury-font text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.18em] text-white leading-none uppercase select-text">
          <span className="bg-gradient-to-r from-white via-emerald-100 via-amber-100 via-stone-200 to-white bg-[length:200%_auto] bg-clip-text text-transparent hover:bg-right transition-all duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1) cursor-default block filter drop-shadow-[0_0_40px_rgba(52,211,153,0.15)] font-bold">
            Sivakami <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-emerald-300 opacity-90">A</span>
          </span>
        </h1>
      </div>

      {/* Separator */}
      <div className="relative w-28 h-[2px] bg-emerald-950/60 my-6 rounded-full overflow-hidden transition-all duration-[1000ms] ease-out group-hover/hero:w-56 animate-ultra-fade [animation-delay:600ms]">
        <div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-amber-300 via-emerald-400 to-emerald-500 bg-[length:200%_100%]"
          style={{ animation: "waveStream 2.5s linear infinite" }}
        />
      </div>

      {/* Subtext */}
      <p className="relative z-10 text-emerald-100/60 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-14 px-6 hover:text-emerald-100/80 transition-colors duration-500 animate-ultra-fade [animation-delay:800ms]">
        Architecting premium frontend ecosystems. Specializing in high-fidelity design transformation, interactive engineering aesthetics, and fluid computational UI systems.
      </p>

      {/* Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto px-4 animate-ultra-fade [animation-delay:1000ms]">
        <a
          href="#contact"
          className="w-full sm:w-auto px-9 py-4.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-[length:200%_auto] hover:bg-right rounded-xl font-bold text-[11px] tracking-[0.2em] uppercase text-white shadow-[0_20px_45px_-15px_rgba(16,185,129,0.4)] hover:shadow-[0_25px_50px_-5px_rgba(52,211,153,0.5)] hover:-translate-y-1 active:scale-95 transition-all duration-500 text-center border border-white/10"
        >
          Get In Touch
        </a>
        <a
          href="#about"
          className="w-full sm:w-auto relative inline-flex items-center justify-center px-9 py-4.5 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-200/80 hover:text-white rounded-xl overflow-hidden group/btn border border-emerald-900/60 hover:border-emerald-500/40 hover:-translate-y-1 active:scale-95 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-500 text-center bg-white/[0.01]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-amber-500/5 to-emerald-500/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10">Explore Matrix</span>
        </a>
      </div>
    </section>
  );
};

export default Home;