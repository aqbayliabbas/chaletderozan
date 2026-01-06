"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Camera,
    Quotes,
    ArrowsOutSimple,
    MapPin,
    Waves,
    Mountains
} from "@phosphor-icons/react";

const galleryImages = [
    {
        src: "/photos/chalet/chalet (10).jpg",
        caption: "Le bassin biologique : une eau vivante filtrée par les roseaux.",
        tag: "Bassin Bio",
        icon: <Waves size={24} weight="thin" />,
        size: "large"
    },
    {
        src: "/photos/chalet/chalet (70).jpg",
        caption: "Vue panoramique sur la chaîne de Belledonne au petit matin.",
        tag: "Panorama",
        icon: <Mountains size={24} weight="thin" />,
        size: "small"
    },
    {
        src: "/photos/chalet/chalet (20).jpg",
        caption: "L'art de vivre alpin : entre bois blond et pierre de taille.",
        tag: "Art de Vivre",
        icon: <Quotes size={24} weight="thin" />,
        size: "medium"
    },
    {
        src: "/photos/chalet/chalet (1).jpg",
        caption: "Éco-conception : quand la technologie s'efface devant le paysage.",
        tag: "Vision",
        icon: <ArrowsOutSimple size={24} weight="thin" />,
        size: "small"
    },
];

const CreativeGallery = () => {
    return (
        <section className="py-40 bg-paper overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
                    <div className="max-w-3xl">
                        <span className="font-sans text-[11px] uppercase tracking-[0.6em] text-rolex-gold font-bold mb-10 block">INSTANTS SUSPENDUS</span>
                        <h2 className="text-7xl font-serif text-ink italic leading-[0.9] tracking-tighter italic">L'Âme <br /><span className="text-rolex-green">en images.</span></h2>
                    </div>
                    <div className="flex items-center gap-6 group cursor-pointer">
                        <div className="w-12 h-12 bg-rolex-green/5 border border-rolex-gold/30 rounded-full flex items-center justify-center text-rolex-gold group-hover:bg-rolex-green group-hover:text-paper transition-all duration-700">
                            <Camera size={24} weight="thin" />
                        </div>
                        <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-ink/40 group-hover:text-rolex-green transition-colors">Explorer l'album complet</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
                    {galleryImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative group cursor-pointer ${img.size === "large" ? "lg:mt-0" :
                                img.size === "medium" ? "lg:mt-24" :
                                    "lg:mt-48"
                                }`}
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border-[10px] border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group-hover:shadow-[0_60px_100px_-25px_rgba(0,61,36,0.2)] transition-all duration-1000">
                                <Image
                                    src={img.src}
                                    alt={img.tag}
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                                />

                                {/* Apple-style Blur Overlay on Hover */}
                                <div className="absolute inset-x-4 bottom-4 apple-glass p-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 rounded-sm border border-white/20">
                                    <div className="text-rolex-gold mb-6">{img.icon}</div>
                                    <p className="font-serif italic text-xl text-rolex-green mb-0 leading-relaxed font-light">
                                        {img.caption}
                                    </p>
                                </div>

                                <div className="absolute top-6 left-6 py-2 px-5 apple-glass rounded-full border border-white/20">
                                    <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-rolex-green font-bold italic">{img.tag}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CreativeGallery;
