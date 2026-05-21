import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1400);
  };

  return (
    <section id="contact" className="scroll-mt-28 relative group/section py-12">
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative bg-gradient-to-br from-[#13192b]/90 via-[#0c101d]/50 to-[#13192b]/90 border border-gray-800/50 rounded-3xl p-8 md:p-14 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] hover:border-purple-500/20 transition-all duration-500">
        
        <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-purple-500/40 to-transparent" />
        <div className="absolute top-0 right-0 w-[1px] h-16 bg-gradient-to-b from-purple-500/40 to-transparent" />

        <div className="grid md:grid-cols-12 gap-12 items-stretch">
          
          <div className="md:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold tracking-widest text-purple-300 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Let's Build <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Something Real</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                Have an innovative platform opportunity, a creative design challenge, or a complex software system ready to scale? Drop a transmission.
              </p>
            </div>

            {/* Embed Native Vector SVG icons to completely safe-guard package resolution errors */}
            <div className="space-y-4 pt-6 border-t border-gray-800/60">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Direct Channels</h4>
              <div className="flex gap-3">
                {[
                  { svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.06.069-.06 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>, href: "https://github.com" },
                  { svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, href: "https://linkedin.com" }
                ].map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3.5 bg-gray-900/40 border border-gray-800/80 rounded-xl text-gray-400 hover:text-purple-400 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300">
                    {social.svg}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-7 flex flex-col space-y-5 justify-center">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-[#080c16]/70 border border-gray-800/80 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 transition-all duration-300 text-sm font-light"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              required
              className="w-full p-4 rounded-xl bg-[#080c16]/70 border border-gray-800/80 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 transition-all duration-300 text-sm font-light"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project requirements..."
              rows={4}
              required
              className="w-full p-4 rounded-xl bg-[#080c16]/70 border border-gray-800/80 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 transition-all duration-300 text-sm font-light resize-none"
            ></textarea>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] text-white font-semibold p-4 rounded-xl shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 hover:bg-right transition-all duration-500 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:pointer-events-none"
            >
              <span className="flex items-center justify-center gap-2">
                {isSubmitting ? "Dispatching Securely..." : "Transmit Message"}
              </span>
            </button>

            {isSubmitted && (
              <div className="text-emerald-400 text-center font-medium text-xs mt-2 bg-emerald-500/5 border border-emerald-500/10 py-3.5 rounded-xl flex items-center justify-center gap-2 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Transmission verified. I'll get back to you shortly.
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;