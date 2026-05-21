import React, { useEffect } from 'react';

function Showdata({ user, onClose }) {
    // Safe escape gate guarding against missing component bindings
    if (!user) return null;

    // Accessibility feature: Pressing escape key closes overlay modal automatically
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-all duration-300"
            onClick={onClose} // Clicking backdrop container triggers close routine
        >
            {/* Modal Core Frame */}
            <div 
                className="relative w-full max-w-lg bg-[#0F1626] border border-slate-800 rounded-3xl p-8 shadow-[0_25px_70px_-10px_rgba(0,0,0,0.7)] text-slate-200 overflow-hidden"
                onClick={(e) => e.stopPropagation()} // Halts event bubble so clicking inside window doesn't close it
            >
                
                {/* Laser light aesthetic accent beam */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-cyan-400" />

                {/* Close Button X Layout */}
                <button 
                    onClick={onClose}
                    className="absolute top-5 right-5 text-slate-500 hover:text-slate-200 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 rounded-full w-8 h-8 flex items-center justify-center transition-all outline-none"
                    aria-label="Close profile modal"
                >
                    ✕
                </button>

                {/* Main Profile Monogram Layout block */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white font-black text-xl mb-3 shadow-lg shadow-indigo-500/10">
                        {user.name ? user.name.charAt(0).toUpperCase() : "?"}
                    </div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">{user.name || "Anonymous Member"}</h3>
                    <p className="text-xs text-indigo-400 uppercase tracking-widest mt-1">
                        {user.username ? `@${user.username}` : "@unknown"}
                    </p>
                </div>

                {/* Metadata Grid Fields mapping safely */}
                <div className="space-y-4 bg-[#141E33]/40 border border-slate-800/60 p-5 rounded-2xl text-sm">
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800/40">
                        <span className="text-slate-500 font-medium">Corporate Node:</span>
                        <span className="font-semibold text-slate-200 truncate max-w-[60%]">
                            {user.company?.name || "Unassigned"}
                        </span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800/40">
                        <span className="text-slate-500 font-medium">Suite Location:</span>
                        <span className="font-semibold text-slate-200 truncate max-w-[60%]">
                            {user.address?.suite || ""} {user.address?.street || "No Address Listing"}
                        </span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800/40">
                        <span className="text-slate-500 font-medium">Metro City:</span>
                        <span className="font-semibold text-slate-200">
                            {user.address?.city || "Unknown Location"}
                        </span>
                    </div>
                    <div className="flex justify-between items-start py-1.5">
                        <span className="text-slate-500 font-medium min-w-[30%]">Catchphrase:</span>
                        <span className="font-medium text-slate-400 italic text-right max-w-[70%] leading-relaxed">
                            {user.company?.catchPhrase ? `"${user.company.catchPhrase}"` : "None declared"}
                        </span>
                    </div>
                </div>

                {/* Final Control Close button element */}
                <button 
                    onClick={onClose}
                    className="w-full mt-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-sm shadow-md outline-none"
                >
                    Dismiss Console
                </button>
            </div>
        </div>
    );
}

export default Showdata;