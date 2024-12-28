"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

const artists = [
    "GOOMGUM",
    "ALEXANDER ALAR",
    "BROWNCOAT",
    "NIKHIL CHINAPA",
    "ANYASA",
    "ARJUN VAGALE",
    "ANKYTRIXX",
    "ALMOST HUMAN",
    "BLOT",
    "IVAN",
    "BULLZEYE",
    "DJ SHAAN",
    "SARTEK",
    "ANA LILIA",
    "TERI MIKO",
    "LOSTSTORIES",
    "PROGRESSIVE BROTHER",
    "FAKE TATTOOS",
    "SHAUN MOSES",
];

export function OpenedFor({ className, ...props }: GenericProps) {
    const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);

    return (
        <div
            className={cn("relative flex w-full justify-center", className)}
            {...props}
        >
            <div className="relative w-full max-w-5xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative space-y-8 md:space-y-16"
                >
                    <div className="relative space-y-4">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="glitch-text text-4xl font-bold uppercase tracking-wider text-primary md:text-7xl"
                        >
                            Opened For
                        </motion.h2>

                        <div className="absolute -bottom-4 left-0 h-1 w-32 bg-gradient-to-r from-primary to-transparent md:w-64" />
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {artists.map((artist, index) => (
                            <motion.div
                                key={artist}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.4 + index * 0.05,
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 8,
                                }}
                                viewport={{ once: true }}
                                onHoverStart={() => setHoveredArtist(artist)}
                                onHoverEnd={() => setHoveredArtist(null)}
                                className="group relative"
                            >
                                <div className="relative h-full overflow-hidden">
                                    <motion.div
                                        className="flex h-full items-center border bg-foreground/5 p-6 py-4 backdrop-blur-sm md:p-6"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <h3 className="relative w-full text-lg font-bold tracking-wide transition-colors group-hover:text-primary md:text-2xl">
                                            {artist}
                                            {hoveredArtist === artist && (
                                                <motion.div
                                                    layoutId="artist-highlight"
                                                    className="absolute -inset-2 -z-10 bg-primary/5"
                                                />
                                            )}
                                        </h3>

                                        <div className="pointer-events-none absolute left-0 top-0 size-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <div className="absolute left-0 top-0 size-2 border-l border-t border-primary" />
                                            <div className="absolute right-0 top-0 size-2 border-r border-t border-primary" />
                                            <div className="absolute bottom-0 left-0 size-2 border-b border-l border-primary" />
                                            <div className="absolute bottom-0 right-0 size-2 border-b border-r border-primary" />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={false}
                                        animate={{
                                            opacity:
                                                hoveredArtist === artist
                                                    ? 1
                                                    : 0,
                                            scale:
                                                hoveredArtist === artist
                                                    ? 1
                                                    : 0.8,
                                        }}
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                                    />
                                </div>

                                <div className="absolute -left-4 top-1/2 -translate-y-1/2 opacity-20 transition-opacity group-hover:opacity-100">
                                    <span className="font-mono text-sm text-primary">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
