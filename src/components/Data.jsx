import React, { useEffect, useState } from "react";
import axios from "axios";
import Showdata from "./Showdata";

function UserCard({ user, onOpenProfile }) {
    // Generates fallback initials safely even if name is structured strangely
    const getInitials = (name) => {
        if (!name) return "U";
        const parts = name.trim().split(/\s+/);
        if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    };

    return (
        <div className="group relative bg-gradient-to-b from-[#1E293B]/40 to-[#0F172A]/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 hover:border-slate-700/70 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_50px_-12px_rgba(99,102,241,0.25)] transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
            
            {/* Ambient Animated Hover Glow */}
            <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl blur-sm" />
            
            <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                    {/* Premium Profile Avatar Frame */}
                    <div className="relative p-[2px] rounded-full bg-slate-800 group-hover:bg-gradient-to-tr group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-cyan-400 transition-all duration-700 shadow-lg">
                        <div className="w-14 h-14 bg-[#0B0F19] text-indigo-200 group-hover:text-white rounded-full flex items-center justify-center font-bold text-lg shadow-inner tracking-wider transition-colors duration-300">
                            {getInitials(user?.name)}
                        </div>
                    </div>
                    
                    {/* Status Pill */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-widest uppercase">
                        <span className="w-1.5 h-1.5 mr-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]"></span>
                        Active Node
                    </span>
                </div>
                
                {/* Identity Block */}
                <h2 className="text-xl font-bold text-slate-100 tracking-tight mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 transition-colors duration-300 truncate">
                    {user?.name || "Anonymous User"}
                </h2>
                <p className="text-[11px] font-bold text-indigo-400/80 tracking-widest uppercase mb-6 flex items-center gap-1.5">
                    <span className="w-1 h-3 bg-indigo-500 rounded-full inline-block"></span>
                    {user?.company?.name || "Independent Consultant"}
                </p>
                
                {/* Meta Directory Information Grid */}
                <div className="space-y-4 pt-4 border-t border-slate-800/80 text-sm text-slate-400">
                    <div className="flex items-center space-x-3.5 group/item">
                        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-800/50 text-slate-400 group-hover/item:text-indigo-400 group-hover/item:bg-indigo-500/10 transition-colors duration-300">
                            ✉️
                        </div>
                        <span className="truncate text-slate-300 group-hover/item:text-white transition-colors duration-200">{user?.email || "N/A"}</span>
                    </div>

                    <div className="flex items-center space-x-3.5 group/item">
                        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-800/50 text-slate-400 group-hover/item:text-indigo-400 group-hover/item:bg-indigo-500/10 transition-colors duration-300">
                            📞
                        </div>
                        <span className="text-slate-300 group-hover/item:text-white transition-colors duration-200">
                            {user?.phone ? user.phone.split(" ")[0] : "N/A"}
                        </span> 
                    </div>

                    <div className="flex items-center space-x-3.5 group/item">
                        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-800/50 text-slate-400 group-hover/item:text-cyan-400 group-hover/item:bg-cyan-500/10 transition-colors duration-300">
                            🌐
                        </div>
                        <a 
                            href={user?.website ? `https://${user.website}` : "#"} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 truncate underline decoration-transparent hover:decoration-cyan-500/40"
                        >
                            {user?.website || "N/A"}
                        </a>
                    </div>
                </div>
            </div>

            {/* Premium Call to Action */}
            <div className="mt-7 relative z-10">
                <button 
                    onClick={() => onOpenProfile(user)}
                    className="w-full relative group/btn overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700/60 hover:border-indigo-500/50 text-slate-200 hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-xs tracking-widest uppercase shadow-md"
                >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 -z-10" />
                    Access Profile
                </button>
            </div>
        </div>
    );
}

function Data() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        let isMounted = true;

        async function fetchUsers() {
            try {
                // FIXED: Changed endpoint to match User Schema
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                if (isMounted) {
                    setUsers(Array.isArray(response.data) ? response.data : []);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError("The directory data pipeline secure connection timed out.");
                    setLoading(false);
                }
            }
        }

        fetchUsers();
        return () => { isMounted = false; };
    }, []);

    const handleOpenProfile = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleCloseProfile = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    const filteredUsers = users.filter((user) =>
        (user?.name || "").toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#080B11] text-slate-100 py-20 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
            
            {/* Deep space ambient grid & soft neon multi-layers */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                
                {/* Header Module */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-indigo-400 uppercase bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-4 py-2 rounded-full border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                        <span className="w-1 h-1 bg-indigo-400 rounded-full animate-ping"></span>
                        Secure Registry Core
                    </span>
                    <h1 className="mt-6 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 tracking-tight sm:text-5xl lg:text-6xl">
                        Executive Directory
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm text-slate-400 font-medium tracking-wide leading-relaxed">
                        Decentralized ledger containing verified platform authority nodes, corporate assignments, and digital connection routes.
                    </p>
                </div>

                {/* Filter Input with Interactive Premium Glow */}
                <div className="max-w-md mx-auto mb-20">
                    <div className="relative rounded-2xl group/search shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl opacity-70 group-focus-within/search:opacity-100 group-hover/search:from-indigo-500/40 group-hover/search:to-purple-500/40 transition duration-500 blur-sm" />
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-500 text-sm">
                                🔍
                            </span>
                            <input
                                type="text"
                                placeholder="Search system nodes..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-11 pr-12 py-4.5 bg-[#0F1422]/95 border border-slate-800/80 rounded-2xl focus:border-indigo-500/50 block transition duration-300 outline-none placeholder-slate-600 text-sm tracking-wide text-slate-200"
                            />
                            {searchTerm && (
                                <button 
                                    onClick={() => setSearchTerm("")}
                                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-xs font-bold text-slate-500 hover:text-indigo-400 transition-colors"
                                >
                                    CLEAR
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Dynamic Status Elements */}
                {loading && (
                    <div className="flex flex-col justify-center items-center h-72 space-y-5">
                        <div className="relative w-12 h-12">
                            <div className="absolute inset-0 rounded-full border-2 border-slate-800/60"></div>
                            <div className="absolute inset-0 rounded-full border-2 border-t-indigo-400 border-r-purple-400 animate-spin"></div>
                        </div>
                        <p className="text-slate-500 text-[10px] font-bold tracking-[0.25em] uppercase animate-pulse">Decrypting Directory Core...</p>
                    </div>
                )}

                {error && (
                    <div className="max-w-md mx-auto bg-gradient-to-b from-[#1E1114] to-[#12090B] border border-red-900/30 p-6 rounded-2xl text-center shadow-2xl">
                        <div className="w-10 h-10 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center mx-auto mb-3 text-sm">⚠️</div>
                        <p className="text-xs font-semibold tracking-wider uppercase text-red-400/90">{error}</p>
                    </div>
                )}

                {!loading && !error && (
                    <>
                        {filteredUsers.length === 0 ? (
                            <div className="text-center py-20 bg-[#0E1320]/30 border border-dashed border-slate-800/60 rounded-3xl max-w-xl mx-auto">
                                <p className="text-slate-500 text-sm font-medium">No encrypted system nodes match "{searchTerm}"</p>
                            </div>
                        ) : (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredUsers.map((user) => (
                                    <UserCard 
                                        key={user.id} 
                                        user={user} 
                                        onOpenProfile={handleOpenProfile} 
                                    />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Modal portal rendering */}
            {isModalOpen && selectedUser && (
                <Showdata user={selectedUser} onClose={handleCloseProfile} />
            )}
        </div>
    );
}

export default Data;