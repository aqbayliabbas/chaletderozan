"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play, SpeakerHigh, ArrowRight, CursorClick } from "@phosphor-icons/react";

const steps = [
    {
        year: "1903",
        title: "LA FONDATION",
        desc: "Édification du chalet originel. Une architecture bioclimatique avant l'heure, bâtie avec le bon sens des anciens pour traverser les siècles.",
        image: "/photos/chalet/chalet (40).jpg"
    },
    {
        year: "2014",
        title: "LE RENOUVEAU",
        desc: "Le coup de foudre de Céline et Denis. Début d'une transformation titanesque pour ramener la vie au cœur de cette pierre endormie.",
        image: "/photos/chalet/chalet (1).jpg"
    },
    {
        year: "2018",
        title: "L'INDÉPENDANCE",
        desc: "Consécration du projet. Le chalet devient une maison à énergie positive, prouvant que patrimoine et futur peuvent ne faire qu'un.",
        image: "/photos/chalet/chalet (24).jpg"
    },
];

const VideoSection = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="bg-ink text-paper selection:bg-rolex-gold selection:text-paper">

            {/* PART 1: CINEMATIC SURVOL */}
            <div className="py-40 border-b border-paper/5">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
                        <div className="max-w-3xl">
                            <span className="font-sans text-[11px] uppercase tracking-[0.6em] text-rolex-gold font-bold mb-10 block">EXPÉRIENCE VISUELLE</span>
                            <h2 className="text-6xl md:text-[100px] font-serif italic leading-[0.8] tracking-tighter">
                                Un survol <br /><span className="text-rolex-green brightness-150">de l'âme.</span>
                            </h2>
                        </div>
                        <p className="font-serif text-2xl italic text-paper/40 max-w-sm mb-4 leading-relaxed">
                            "Là où le drone embrasse la cime, on perçoit enfin la solitude sacrée de notre refuge."
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative rounded-sm overflow-hidden aspect-[21/9] group cursor-pointer shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 bg-ink"
                    >
                        <video
                            src="/video.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[2s] group-hover:scale-105"
                        />


                        {/* Cinematic HUD Overlay */}
                        <div className="absolute top-10 left-10 flex items-center gap-4">
                            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                            <span className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">4K // CINEMATIC LOG</span>
                        </div>
                        <div className="absolute bottom-10 right-10 flex items-center gap-6">
                            <SpeakerHigh size={18} weight="thin" className="opacity-20" />
                            <div className="h-px w-20 bg-paper/10" />
                            <span className="font-serif italic text-lg opacity-40">02:45</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* PART 2: THE INTERACTIVE CHRONICLE */}
            <div className="py-40 bg-[#0A0A0A]">
                <div className="container mx-auto px-8">
                    <div className="max-w-4xl mb-32">
                        <span className="font-sans text-[11px] uppercase tracking-[0.6em] text-rolex-gold font-bold mb-10 block">LES CHAPITRES</span>
                        <h2 className="text-5xl md:text-7xl font-serif italic mb-8">L'Épopée du Domaine</h2>
                        <div className="flex items-center gap-6 text-rolex-gold/40">
                            <CursorClick size={16} weight="thin" />
                            <span className="font-serif italic text-lg tracking-wide uppercase text-[12px]">Explorez les étapes clés de notre transformation</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

                        {/* Steps Navigation */}
                        <div className="lg:col-span-5 relative">
                            {/* Vertical line connector */}
                            <div className="absolute left-0 top-0 w-px h-full bg-paper/5 ml-[23px]" />

                            <div className="space-y-24 relative z-10">
                                {steps.map((step, idx) => (
                                    <motion.div
                                        key={idx}
                                        onClick={() => setActiveStep(idx)}
                                        onMouseEnter={() => setActiveStep(idx)}
                                        className="flex items-start gap-12 cursor-pointer group"
                                    >
                                        {/* Step Circle Marker */}
                                        <div className="relative mt-2">
                                            <div className={`w-12 h-12 rounded-full border transition-all duration-700 flex items-center justify-center
                          ${activeStep === idx
                                                    ? "bg-rolex-green border-rolex-gold shadow-[0_0_30px_rgba(163,142,61,0.2)]"
                                                    : "bg-ink border-paper/10 group-hover:border-paper/30"}`}
                                            >
                                                <span className={`font-serif italic transition-colors duration-700 ${activeStep === idx ? "text-rolex-gold" : "text-paper/20"}`}>
                                                    {idx + 1}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex-1 border-b border-paper/5 pb-12 transition-all duration-700 group-hover:border-paper/20">
                                            <span className={`font-serif text-3xl mb-4 block transition-all duration-700 ${activeStep === idx ? "text-rolex-gold translate-x-2" : "text-paper/20"}`}>
                                                {step.year}
                                            </span>
                                            <h4 className={`font-sans text-[11px] uppercase tracking-[0.4em] font-bold mb-6 transition-colors duration-700 ${activeStep === idx ? "text-paper" : "text-paper/20"}`}>
                                                {step.title}
                                            </h4>

                                            <AnimatePresence mode="wait">
                                                {activeStep === idx && (
                                                    <motion.p
                                                        initial={{ opacity: 0, height: 0, y: 10 }}
                                                        animate={{ opacity: 1, height: "auto", y: 0 }}
                                                        exit={{ opacity: 0, height: 0, y: 10 }}
                                                        className="font-serif text-xl italic leading-relaxed text-paper/60"
                                                    >
                                                        {step.desc}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="relative aspect-square rounded-sm overflow-hidden border-[15px] border-paper/5 shadow-2xl">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeStep}
                                        initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={steps[activeStep].image}
                                            alt={steps[activeStep].title}
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Premium Overlay Filter */}
                                        <div className="absolute inset-0 bg-rolex-green/10" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute bottom-12 left-12"
                                        >
                                            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-rolex-gold font-bold block mb-4">ARCHIVES DOMAINE</span>
                                            <h5 className="text-3xl font-serif text-paper italic">{steps[activeStep].title}</h5>
                                        </motion.div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Decorative Frame */}
                                <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Call to action to continue the journey */}
                    <div className="mt-40 flex justify-center">
                        <Link href="/histoire" className="flex items-center gap-6 group hover:text-rolex-gold transition-colors duration-700">
                            <span className="font-serif italic text-2xl">Découvrir l'histoire complète</span>
                            <div className="w-16 h-px bg-rolex-gold group-hover:w-24 transition-all duration-700" />
                            <ArrowRight size={20} weight="thin" className="text-rolex-gold" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
