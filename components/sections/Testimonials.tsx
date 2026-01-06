"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "@phosphor-icons/react";

const reviews = [
    {
        name: "Sophie & Marc",
        date: "Aout 2023",
        avatar: "/photos/clients/client (4).jpg",
        content: "Un séjour suspendu dans le temps. La vue sur Belledonne au petit-déjeuner est un poème en soi. Le studio est d'une élégance rare.",
    },
    {
        name: "Jean-Pierre",
        date: "Janvier 2024",
        avatar: "/photos/clients/client (12).jpg",
        content: "Une hospitalité qui rappelle les maisons de famille d'antan. La rénovation est un chef-d'œuvre de respect et de modernité.",
    },
    {
        name: "Elena",
        date: "Novembre 2023",
        avatar: "/photos/clients/client (24).jpg",
        content: "Calme absolu à deux pas de l'agitation. Le design mêlant bois brut et touches contemporaines est d'une justesse parfaite.",
    },
];

const Testimonials = () => {
    return (
        <section className="py-40 bg-paper border-t border-ink/5 overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="text-center mb-32">
                    <span className="font-sans text-[11px] uppercase tracking-[0.6em] text-rolex-gold font-bold mb-10 block">PAROLES DE VOYAGEURS</span>
                    <h2 className="text-6xl font-serif text-ink italic leading-[0.9] tracking-tighter">L'Expérience <br /><span className="text-rolex-green">Rozan.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col bg-white p-14 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-ink/5 relative overflow-hidden group"
                        >
                            {/* Subtle top accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rolex-gold/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />

                            <div className="flex items-center justify-between mb-10">
                                <div className="flex text-rolex-gold gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} weight="thin" />
                                    ))}
                                </div>
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-rolex-gold/20 group-hover:border-rolex-gold transition-colors duration-700">
                                    <Image
                                        src={review.avatar}
                                        alt={review.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>
                            <p className="text-2xl font-serif text-ink mb-16 italic leading-relaxed font-light">
                                "{review.content}"
                            </p>
                            <div className="mt-auto pt-10 border-t border-ink/10 flex items-center justify-between">
                                <div>
                                    <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-rolex-green">{review.name}</h4>
                                    <p className="font-serif italic text-ink/30 mt-1">{review.date}</p>
                                </div>
                                <div className="w-8 h-8 rounded-full border border-rolex-gold/30 flex items-center justify-center">
                                    <span className="text-rolex-gold text-[10px] font-bold">R</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
