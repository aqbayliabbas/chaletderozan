"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../ui/Logo";
import { motion } from "framer-motion";
import { ArrowRight, CaretRight, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";

const Footer = () => {
    return (
        <footer className="bg-ink text-paper py-40 border-t border-paper/10 selection:bg-rolex-gold selection:text-paper">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 mb-40">
                    {/* Brand Pillar */}
                    <div className="lg:col-span-5">
                        <div className="mb-12 flex justify-start">
                            <Logo light className="!items-start !text-left" />
                        </div>
                        <p className="text-3xl font-serif italic text-paper/40 leading-relaxed max-w-md mb-16 font-light">
                            "Une escale où l'histoire centenaire de la pierre rencontre la pureté de l'énergie positive."
                        </p>
                        <div className="flex gap-10">
                            <Link href="#" className="hover:text-rolex-gold transition-colors">
                                <InstagramLogo size={24} weight="thin" />
                            </Link>
                            <Link href="#" className="hover:text-rolex-gold transition-colors">
                                <FacebookLogo size={24} weight="thin" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-1"></div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3">
                        <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-rolex-gold font-bold mb-14 block">NAVIGATION</span>
                        <ul className="space-y-8">
                            {["Le Domaine", "Studio Éco-chalet", "Chambre Belledonne", "Activités", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="font-serif italic text-2xl text-paper/60 hover:text-rolex-gold hover:translate-x-2 transition-all inline-block group">
                                        {item}
                                        <CaretRight size={16} weight="thin" className="inline-block ml-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-3">
                        <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-rolex-gold font-bold mb-14 block">CONVERSER</span>
                        <p className="font-serif italic text-2xl text-paper/60 leading-relaxed mb-4">
                            38700 La Tronche<br />Alpes Françaises
                        </p>
                        <p className="font-serif italic text-2xl text-rolex-green brightness-150 mb-16">+33 (0)6 XX XX XX XX</p>

                        <Link href="/contact" className="rolex-button flex items-center justify-center gap-5 group uppercase text-[10px] tracking-[0.4em] rounded-full !py-6">
                            PRENDRE ATTACHE
                            <ArrowRight size={16} weight="thin" className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="pt-20 border-t border-paper/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-paper/20">© 2024 DOMAINE DE ROZAN — TOUS DROITS RÉSERVÉS</span>
                    <div className="flex gap-12 font-sans text-[10px] uppercase tracking-[0.4em] text-paper/20 italic">
                        <Link href="#" className="hover:text-paper transition-colors">MENTIONS LÉGALES</Link>
                        <Link href="#" className="hover:text-paper transition-colors">CONFIDENTIALITÉ</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
