"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

const genres = {
    "DJ AAYAN": ["BOLLYWOOD", "UK PUNJABI", "HIP-HOP", "COMMERCIAL"],
    PASSCODE: [
        "HOUSE",
        "TECHNO",
        "MINIMAL",
        "PROGRESSIVE",
        "TRANCE",
        "ELECTRO",
    ],
};

const equipment = [
    "PIONEER DJM 2000 MIXER",
    "PIONEER NEXUS 2000 CDJ PLAYERS",
    "PIONEER NEXUS 3000 CDJ PLAYERS",
    "PIONEER DJM 900 MIXER",
    "PIONEER NEXUS 900 CDJ PLAYERS",
    "2 BOOTH MONITOR SPEAKERS",
];

export function Genre({ className, ...props }: GenericProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const [hoveredGenre, setHoveredGenre] = useState<string | null>(null);
    const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20]);
    const rotateY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    return (
        <div
            ref={containerRef}
            className={cn("relative flex w-full justify-center", className)}
            {...props}
        >
            <div className="relative w-full max-w-5xl space-y-10 md:space-y-20">
                <div className="space-y-6 md:space-y-12">
                    {Object.entries(genres).map(([category, genreList], i) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-3 md:space-y-6"
                        >
                            <h2 className="glitch-text text-2xl font-bold tracking-wider text-primary md:text-6xl">
                                {category}
                            </h2>

                            <div className="flex flex-wrap gap-4">
                                {genreList.map((genre) => (
                                    <motion.span
                                        key={genre}
                                        whileHover={{ scale: 1.05 }}
                                        onHoverStart={() =>
                                            setHoveredGenre(genre)
                                        }
                                        onHoverEnd={() => setHoveredGenre(null)}
                                        className="relative cursor-pointer leading-4 md:text-xl md:leading-normal"
                                    >
                                        {genre}
                                        {hoveredGenre === genre && (
                                            <motion.div
                                                layoutId="genre-highlight"
                                                className="absolute -inset-2 -z-10 rounded-lg bg-foreground/10"
                                            />
                                        )}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div className="relative space-y-4 md:space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                    >
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            viewport={{ once: true }}
                            className="glitch-text text-lg text-primary md:text-2xl"
                        >
                            ✧
                        </motion.div>

                        <h2 className="glitch-text text-2xl font-bold uppercase tracking-wider text-primary md:text-6xl">
                            Tech Rider
                        </h2>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            viewport={{ once: true }}
                            className="glitch-text text-lg text-primary md:text-2xl"
                        >
                            ✧
                        </motion.div>
                    </motion.div>

                    <motion.div
                        style={{ rotateX, rotateY }}
                        className="perspective-1000 grid gap-4"
                    >
                        {equipment.map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + index * 0.1 }}
                                whileHover={{ scale: 1.02, x: 20 }}
                                viewport={{ once: true }}
                                className="group relative border border-foreground/10 bg-foreground/5 p-6 py-4 backdrop-blur-sm md:py-6"
                            >
                                <span className="mr-4 font-mono text-primary">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="transition-colors group-hover:text-primary md:text-xl">
                                    {item}
                                </span>

                                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 transition-all duration-300 group-hover:from-primary/5 group-hover:to-transparent" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
