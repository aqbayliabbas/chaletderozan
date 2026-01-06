"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import { List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "L'Histoire", href: "/histoire" },
        { name: "Activités", href: "/activites" },
        { name: "Studio", href: "/studio" },
        { name: "Chambre", href: "/chambre" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? "py-4 bg-paper/90 backdrop-blur-xl shadow-sm" : "py-10 bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-8 flex justify-between lg:justify-center items-center relative">
                    {/* Desktop Navigation Left */}
                    <div className="hidden lg:flex items-center gap-12 absolute left-8">
                        {navLinks.slice(0, 2).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-serif italic text-lg transition-colors duration-700 ${isScrolled ? "text-ink/60 hover:text-rolex-green" : "text-paper/60 hover:text-paper"}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Centered Logo */}
                    <Logo light={!isScrolled} />

                    {/* Desktop Navigation Right */}
                    <div className="hidden lg:flex items-center gap-12 absolute right-8">
                        {navLinks.slice(2).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-serif italic text-lg transition-colors duration-700 ${isScrolled ? "text-ink/60 hover:text-rolex-green" : "text-paper/60 hover:text-paper"}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className={`lg:hidden p-2 transition-colors duration-700 ${isScrolled ? "text-ink" : "text-paper"}`}
                    >
                        <List size={32} weight="thin" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-10 right-8 text-paper p-2"
                        >
                            <X size={40} weight="thin" />
                        </button>

                        <div className="mb-20">
                            <Logo light />
                        </div>

                        <div className="flex flex-col items-center gap-12">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="font-serif text-5xl italic text-paper hover:text-rolex-gold transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute bottom-20 flex flex-col items-center gap-6">
                            <div className="w-12 h-px bg-rolex-gold/30" />
                            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-paper/40 italic">Expérience Alpine // Rozan</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
