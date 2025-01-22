"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BioSection } from "./about";
import { GallerySection } from "./gallery";

export function BioPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen overflow-hidden bg-background py-20 text-white"
        >
            <motion.div
                style={{ y: backgroundY, scale: backgroundScale }}
                className="absolute inset-0 opacity-30"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(173,255,47,0.1),transparent_70%)]" />
                <div className="absolute inset-0 grid grid-cols-8 gap-px">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div
                            key={i}
                            className="border-[0.5px] border-[#ADFF2F]/10 backdrop-blur-sm"
                        />
                    ))}
                </div>
            </motion.div>

            <div className="relative mx-auto max-w-7xl px-4">
                <BioSection />
                <GallerySection />
            </div>

            <div className="absolute right-0 top-20 size-96 rounded-full bg-[#ADFF2F]/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 size-96 rounded-full bg-[#ADFF2F]/10 blur-3xl" />
            <div className="absolute right-0 top-0 size-64 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                    <path
                        d="M0 0L100 0L50 86.6L0 0Z"
                        stroke="#ADFF2F"
                        strokeWidth="0.5"
                        fill="none"
                        className="animate-pulse"
                    />
                </svg>
            </div>
        </section>
    );
}
