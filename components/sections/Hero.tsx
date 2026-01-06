"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CaretRight } from "@phosphor-icons/react";

const Hero = () => {
    const { scrollY } = useScroll();

    // Parallax transforms for the gallery columns
    const yLeft = useTransform(scrollY, [0, 1000], [0, -150]);
    const yRight = useTransform(scrollY, [0, 1000], [0, -250]);

    const leftImages = [
        "/photos/chalet/chalet (1).jpg",
        "/photos/chalet/chalet (30).jpg",
        "/photos/chalet/chalet (10).jpg",
        "/photos/chalet/chalet (40).jpg"
    ];

    const rightImages = [
        "/photos/chalet/chalet (70).jpg",
        "/photos/chalet/chalet (60).jpg",
        "/photos/chalet/chalet (20).jpg",
        "/photos/chalet/chalet (50).jpg"
    ];

    return (
        <section className="relative h-screen min-h-[850px] bg-paper flex flex-col items-center justify-center overflow-hidden">
            {/* Gallery Left */}
            <motion.div
                className="absolute left-0 top-0 bottom-0 w-[20%] z-10 pointer-events-none hidden lg:flex flex-col justify-center gap-12 pl-12"
                style={{
                    WebkitMaskImage: 'linear-gradient(to right, white 60%, transparent)',
                    maskImage: 'linear-gradient(to right, white 60%, transparent)',
                    y: yLeft
                }}>
                {leftImages.map((src, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -100, rotate: -5 }}
                        animate={{ opacity: 1, x: 0, rotate: idx % 2 === 0 ? -2 : 2 }}
                        transition={{
                            delay: 0.5 + idx * 0.2,
                            duration: 1.5,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl first:mt-[-10%] last:mb-[-10%] border-4 border-white"
                        style={{
                            marginLeft: `${idx * 20}px`,
                        }}
                    >
                        <Image
                            src={src}
                            alt={`Gallery Left ${idx}`}
                            fill
                            className="object-cover grayscale-[0.2]"
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Gallery Right */}
            <motion.div
                className="absolute right-0 top-0 bottom-0 w-[20%] z-10 pointer-events-none hidden lg:flex flex-col justify-center gap-12 pr-12"
                style={{
                    WebkitMaskImage: 'linear-gradient(to left, white 60%, transparent)',
                    maskImage: 'linear-gradient(to left, white 60%, transparent)',
                    y: yRight
                }}>
                {rightImages.map((src, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 100, rotate: 5 }}
                        animate={{ opacity: 1, x: 0, rotate: idx % 2 === 0 ? 2 : -2 }}
                        transition={{
                            delay: 0.6 + idx * 0.2,
                            duration: 1.5,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl first:mt-[-10%] last:mb-[-10%] border-4 border-white"
                        style={{
                            marginRight: `${idx * 20}px`,
                        }}
                    >
                        <Image
                            src={src}
                            alt={`Gallery Right ${idx}`}
                            fill
                            className="object-cover grayscale-[0.2]"
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Background Layer with Parallax - Subtle paper grain is in globals.css */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-paper/10 z-10" />
            </div>

            <div className="container mx-auto px-8 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl"
                >
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-24 h-px bg-rolex-gold mx-auto mb-10 origin-center"
                    />

                    <span className="font-sans text-[12px] uppercase tracking-[0.6em] text-rolex-gold font-bold mb-10 block">
                        L'ÉQUILIBRE D'UNE HISTOIRE SÉCULAIRE
                    </span>

                    <h1 className="text-7xl md:text-[110px] font-serif text-ink mb-14 leading-[1.1] tracking-normal">
                        Là où le temps <br />
                        <span className="italic text-rolex-green">cesse de courir.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-ink/60 font-serif font-light max-w-3xl mx-auto mb-20 leading-relaxed italic">
                        "Un écosystème de sérénité où l'énergie des sommets rencontre le souffle de la pierre. Ici, chaque rayon de soleil et chaque silence sculptent votre bien-être."
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-12">
                        <button className="rolex-button flex items-center justify-center gap-5 group uppercase text-[11px] tracking-[0.4em] rounded-full px-12">
                            S'immerger dans le domaine
                            <ArrowRight size={18} weight="thin" className="group-hover:translate-x-2 transition-transform duration-500" />
                        </button>
                        <button className="font-serif italic text-2xl border-b border-ink/10 pb-2 hover:border-rolex-green transition-all duration-700 flex items-center gap-3">
                            Découvrir la maison positive
                            <CaretRight size={20} weight="thin" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Typographic Details */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:flex items-center gap-24"
            >
                <div className="flex flex-col items-center">
                    <span className="text-[9px] font-bold text-rolex-gold tracking-[0.5em] uppercase mb-3 text-center">ÉPOQUE</span>
                    <span className="font-serif italic text-xl text-ink/50">Fondation 1903</span>
                </div>

                <div className="h-10 w-px bg-ink/10"></div>

                <div className="flex flex-col items-center">
                    <span className="text-[9px] font-bold text-rolex-gold tracking-[0.5em] uppercase mb-3 text-center">HORIZON</span>
                    <span className="font-serif italic text-xl text-ink/50">4 Massifs Alpins</span>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
