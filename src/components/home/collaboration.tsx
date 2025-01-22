"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Genre } from "./genre";
import { OpenedFor } from "./opened-for";

export function Collaboration({ className, ...props }: GenericProps) {
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
            className={cn(
                "relative z-10 flex flex-col items-center justify-center gap-20 overflow-hidden bg-background p-5 py-20 md:gap-40 md:py-40",
                className
            )}
            {...props}
        >
            <OpenedFor />
            <Genre />

            <motion.div
                style={{ y: backgroundY, scale: backgroundScale }}
                className="pointer-events-none absolute inset-0 opacity-30"
            >
                <div className="absolute inset-0 grid grid-cols-8 gap-px">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div
                            key={i}
                            className="border-[0.5px] border-primary/10 backdrop-blur-sm"
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
        </section>
    );
}
