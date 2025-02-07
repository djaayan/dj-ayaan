"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Icons } from "../icons";

const residencies = [
    "CUPPA JAVA",
    "THE LION BREW PUB",
    "NOVUS TANZANITE",
    "THE SWEDISH CAFE & PUB",
    "BANG-ONN",
    "ANAVRIN",
    "ERROR BREW & PUB",
];

const guestPerformances = [
    "HASHTAG",
    "OPENHOUSE",
    "LORDS OF THE DRINKS",
    "SILIGURI PUB EXCHANGE",
    "BARCODE",
    "DUGOUT",
    "JANNAAT (KOL)",
    "CATWALK (NEPAL)",
    "OMNIA (NEPAL)",
    "CLUB500 (NEPAL)",
    "BEER REPUBLIC",
    "CLUB NO 17",
    "ROXBERRY PUB & CAFE",
    "WALKER'S VILLAGE",
    "PITCHERS TEMPERATLINE",
    "NOVUS TANZANITE BLUE",
    "MOUNTAIN",
    "ROCK'C",
    "INDIANA BLUEZ",
];

export function Performances({ className, ...props }: GenericProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <div
            className={cn("relative flex w-full justify-center", className)}
            ref={containerRef}
            {...props}
        >
            <div className="relative w-full max-w-5xl space-y-8 md:space-y-16">
                <div className="flex flex-col items-center gap-4 text-center">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glitch-text text-4xl font-bold uppercase tracking-wider text-primary md:text-7xl"
                    >
                        Performances
                    </motion.h2>

                    <div className="flex items-center gap-2">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                            className="glitch-text text-lg text-primary md:text-2xl"
                        >
                            ✧
                        </motion.div>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="max-w-md text-balance text-sm md:text-base"
                        >
                            Explore the venues where I have performed and
                            entertained the audience with my music.
                        </motion.p>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                            className="glitch-text text-lg text-primary md:text-2xl"
                        >
                            ✧
                        </motion.div>
                    </div>
                </div>

                <div className="space-y-4 md:space-y-8">
                    <PerformanceCard
                        index={0}
                        title="Residencies"
                        venues={residencies}
                    />
                    <PerformanceCard
                        index={1}
                        title="Guest Performances"
                        venues={guestPerformances}
                    />
                </div>
            </div>

            <motion.div
                style={{ y: backgroundY, scale: backgroundScale }}
                className="pointer-events-none absolute inset-0 opacity-30"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(173,255,47,0.1),transparent_70%)]" />
                <div className="absolute inset-0 grid grid-cols-8 gap-px">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div
                            key={i}
                            className="border-[0.5px] backdrop-blur-sm"
                        />
                    ))}
                </div>
            </motion.div>

            <div className="pointer-events-none absolute right-0 top-0 size-64 opacity-20">
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

            <div className="pointer-events-none absolute bottom-0 left-0 size-64 rotate-180 opacity-20">
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
        </div>
    );
}

function PerformanceCard({
    title,
    venues,
    index,
}: {
    title: string;
    venues: string[];
    index: number;
}) {
    const [isOpen, setIsOpen] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20]);
    const rotateY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    return (
        <motion.div
            ref={containerRef}
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.2 }}
            viewport={{ once: true }}
            className="perspective-1000 space-y-5 overflow-hidden border bg-background/50 backdrop-blur-md"
        >
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-6 text-left"
                whileHover={{ backgroundColor: "rgba(173, 255, 47, 0.1)" }}
            >
                <h3 className="glitch-text text-xl font-bold uppercase text-primary md:text-3xl">
                    {title}
                </h3>

                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Icons.ChevronDown className="size-6 text-primary" />
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                    >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {venues.map((venue, index) => (
                                <motion.div
                                    key={venue}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative"
                                >
                                    <div className="border bg-foreground/5 p-4 backdrop-blur-sm">
                                        <p className="text-lg font-semibold transition-colors group-hover:text-primary">
                                            {venue}
                                        </p>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 transition-all duration-300 group-hover:from-primary/10 group-hover:to-transparent" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
