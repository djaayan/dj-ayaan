"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

export function About({ className, ...props }: GenericProps) {
    const [paths, setPaths] = useState<string[]>([]);
    const numPaths = 3;
    const baseRadius = 100;
    const noiseAmount = 40;

    const numPoints = 12;

    const initialPaths = useMemo(
        () =>
            Array.from({ length: numPaths }, () =>
                generatePoints(numPoints, baseRadius, noiseAmount)
            ),
        [numPaths, numPoints, baseRadius, noiseAmount]
    );

    useEffect(() => {
        setPaths(initialPaths);

        const interval = setInterval(() => {
            setPaths(() =>
                Array.from({ length: numPaths }, () =>
                    generatePoints(numPoints, baseRadius, noiseAmount)
                )
            );
        }, 800);

        return () => clearInterval(interval);
    }, [initialPaths, numPoints, baseRadius, noiseAmount]);

    return (
        <section
            className={cn(
                "z-10 flex items-center justify-center bg-background p-5 py-20 md:h-screen md:py-5",
                className
            )}
            {...props}
        >
            <div className="w-full max-w-5xl space-y-10 md:space-y-20">
                <motion.h2 className="text-4xl font-bold uppercase leading-5 md:text-7xl md:leading-10">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glitch-text font-bold tracking-wider text-primary"
                    >
                        {siteConfig.name}
                    </motion.div>
                    <br />
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        is a DJ
                    </motion.div>
                    <br />
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        And Producer
                    </motion.div>
                    <br />
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        from India
                    </motion.div>
                </motion.h2>

                <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                    <motion.svg
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        viewport={{ once: true }}
                        className="hidden md:inline-block"
                        width="400"
                        height="400"
                        viewBox="-150 -150 300 300"
                    >
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur
                                    stdDeviation="3"
                                    result="blur"
                                />
                                <feComposite
                                    in="blur"
                                    in2="SourceGraphic"
                                    operator="over"
                                />
                            </filter>
                        </defs>

                        {paths.map((path, i) => (
                            <motion.path
                                key={i}
                                d={path}
                                fill="none"
                                stroke="hsl(84, 100%, 59%)"
                                strokeWidth="2"
                                initial={{ opacity: 1 }}
                                animate={{
                                    d: paths[(i + 1) % paths.length] || path,
                                }}
                                transition={{
                                    duration: 0.8,
                                    type: "spring",
                                    stiffness: 60,
                                    damping: 12,
                                    opacity: {
                                        duration: 0.4, // Reduced from 1s to 0.4s
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    },
                                }}
                                filter="url(#glow)"
                            />
                        ))}
                    </motion.svg>

                    <motion.div className="max-w-sm basis-1/2 space-y-5 text-balance text-sm md:text-base">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Among the few from Genx who has been on DJing map
                            spinning across the genres in this learning curve
                            for perfection. He is very hardworking and
                            passionate when it comes to music. Playing music is
                            mainly about bringing people together and to savour
                            the bliss and celebration called life. He is
                            associated with this profession when he was at an
                            early age and started his journey in the year 2008.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Now, he is touching the limits and extending his
                            reach day by day. He has explored almost every genre
                            of music throughout the journey. His flexibility
                            with different genres makes him stand out from the
                            rest and gives him the edge to his overall EDM
                            sense. A perfect sense to get his crowd on the dance
                            floor and groove them. Regular playing out and
                            parties has broadened his sense of music and has
                            made him a real artist and a true performer. Known
                            as a party starter, this man is loved for his
                            positive vibes, focus and dedication along with his
                            awesome musical talents.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function generatePoints(
    numPoints: number,
    radius: number,
    noise: number
): string {
    const points: [number, number][] = [];
    const angleStep = (Math.PI * 2) / numPoints;

    for (let i = 0; i < numPoints; i++) {
        const angle = i * angleStep;
        const noisyRadius = radius + (Math.random() - 0.5) * noise;
        points.push([
            Math.cos(angle) * noisyRadius,
            Math.sin(angle) * noisyRadius,
        ]);
    }

    return (
        points
            .map((point, i) => `${i === 0 ? "M" : "L"} ${point[0]},${point[1]}`)
            .join(" ") + "Z"
    );
}
