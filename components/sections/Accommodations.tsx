"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Browser, CaretLeft, CaretRight } from "@phosphor-icons/react";

const accommodations = [
    {
        title: "Le Studio",
        subtitle: "Éco-chalet Indépendant",
        images: [
            "/photos/chalet/chalet (1).jpg",
            "/photos/chalet/chalet (24).jpg",
            "/photos/chalet/chalet (20).jpg",
            "/photos/chalet/chalet (30).jpg"
        ],
        price: "95",
        link: "/studio",
        tag: "AUTONOMIE & VUE"
    },
    {
        title: "La Suite",
        subtitle: "Chambre Belledonne",
        images: [
            "/photos/chalet/chalet (3).jpg",
            "/photos/chalet/chalet (4).jpg",
            "/photos/chalet/chalet (60).jpg",
            "/photos/chalet/chalet (70).jpg"
        ],
        price: "75",
        link: "/chambre",
        tag: "HÉRITAGE & ÉLÉGANCE"
    },
];

const AutoImageSlider = ({ images, alt }: { images: string[], alt: string }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-full bg-ink overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1] // Apple-style custom cubic bezier
                    }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={alt}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/40 to-transparent z-10 pointer-events-none" />

            {/* Pagination Dots */}
            <div className="absolute bottom-10 left-10 flex gap-2 z-20">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1 transition-all duration-700 rounded-full ${idx === currentIndex ? "w-8 bg-paper" : "w-1.5 bg-paper/20"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

const Accommodations = () => {
    return (
        <section className="py-40 bg-paper border-t border-ink/5 overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-40 gap-12">
                    <div className="max-w-4xl">
                        <span className="font-sans text-[11px] uppercase tracking-[0.6em] text-rolex-gold font-bold mb-10 block">LES HÉBERGEMENTS</span>
                        <h2 className="text-7xl md:text-[100px] font-serif text-ink italic leading-[0.85] tracking-tighter">Éloge de <br /><span className="text-rolex-green">la quiétude.</span></h2>
                    </div>
                    <p className="text-2xl font-serif italic text-ink/30 hidden lg:block max-w-sm mb-6 leading-relaxed">
                        "Deux espaces singuliers, façonnés dans la matière brute pour offrir une nuit sans nuages."
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-48">
                    {accommodations.map((room, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col group"
                        >
                            <div className="relative aspect-[3/4] mb-16 overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.3)] border-[12px] border-white group-hover:shadow-[0_80px_150px_-40px_rgba(0,61,36,0.25)] transition-all duration-[1s] rounded-sm">
                                <AutoImageSlider images={room.images} alt={room.title} />

                                <div className="absolute top-10 right-10 apple-glass py-2 px-6 border border-white/20 rounded-full shadow-xl z-20">
                                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-rolex-green font-bold italic">{room.tag}</span>
                                </div>
                                <div className="absolute inset-0 bg-rolex-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none"></div>
                            </div>

                            <div className="flex justify-between items-end mb-12">
                                <div>
                                    <h3 className="text-6xl font-serif text-ink mb-6 tracking-tight italic">{room.title}</h3>
                                    <div className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 bg-rolex-gold rounded-full" />
                                        <p className="font-sans text-[12px] uppercase tracking-[0.4em] text-rolex-gold font-bold">{room.subtitle}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="font-serif text-4xl italic text-ink">dès {room.price}€</span>
                                    <p className="text-[10px] uppercase tracking-[0.6em] text-ink/20 mt-3 font-bold">PAR NUITÉE</p>
                                </div>
                            </div>

                            <Link
                                href={room.link}
                                className="inline-block py-10 border-y border-ink/5 text-center font-serif text-3xl italic text-rolex-green hover:text-rolex-gold hover:border-rolex-gold transition-all duration-700 relative group/link"
                            >
                                L'Univers du Domaine —
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-rolex-gold transition-all duration-700 group-hover/link:w-full"></span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accommodations;
