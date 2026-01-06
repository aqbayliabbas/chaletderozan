"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
    light?: boolean;
    className?: string;
}

const Logo = ({ light = false, className = "items-center justify-center text-center" }: LogoProps) => {
    return (
        <Link
            href="/"
            className={`group flex flex-col ${className}`}
        >
            <div className={`relative px-8 py-3 border-y transition-all duration-700 inline-block ${light
                ? "border-paper/20 group-hover:border-paper"
                : "border-ink/10 group-hover:border-rolex-gold"
                }`}>
                {/* Horizontal line details top/bottom like a plaque */}
                <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l transition-all duration-700 ${light ? "border-rolex-gold" : "border-rolex-gold"
                    }`} />
                <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r transition-all duration-700 ${light ? "border-rolex-gold" : "border-rolex-gold"
                    }`} />
                <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-all duration-700 ${light ? "border-rolex-gold" : "border-rolex-gold"
                    }`} />
                <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r transition-all duration-700 ${light ? "border-rolex-gold" : "border-rolex-gold"
                    }`} />

                <span className={`font-serif text-[10px] uppercase tracking-[0.8em] font-bold block mb-1 transition-colors duration-700 ${light ? "text-paper/40 group-hover:text-paper" : "text-ink/60 group-hover:text-rolex-gold"
                    }`}>
                    CHALET
                </span>

                <div className="flex items-center gap-4">
                    <div className={`h-[1px] w-4 transition-all duration-700 ${light ? "bg-rolex-gold/30" : "bg-rolex-gold/30"}`} />
                    <span className={`font-serif italic text-[11px] transition-colors duration-700 ${light ? "text-rolex-gold" : "text-rolex-gold"
                        }`}>
                        DE
                    </span>
                    <div className={`h-[1px] w-4 transition-all duration-700 ${light ? "bg-rolex-gold/30" : "bg-rolex-gold/30"}`} />
                </div>

                <span className={`font-serif text-3xl uppercase tracking-[0.3em] transition-all duration-700 ${light ? "text-paper" : "text-ink group-hover:text-rolex-green"
                    }`}>
                    ROZAN
                </span>
            </div>
        </Link>
    );
};

export default Logo;
