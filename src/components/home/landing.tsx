"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function Landing({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn("relative h-screen overflow-hidden", className)}
            {...props}
        >
            <video
                autoPlay
                loop
                muted
                className="fixed left-0 top-0 size-full object-cover"
            >
                <source
                    src="https://utfs.io/a/wgl22isy86/HWQo5hUQqcU5C7heN1jOxqw7glnWhRLDQGbvzc6UEHeuVTiB"
                    type="video/webm"
                />
            </video>

            <div className="pointer-events-none absolute inset-0 bg-black/60 before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] before:bg-[length:100%_4px] before:content-['']" />

            <div className="relative z-10 flex size-full items-center justify-center p-5">
                <div className="w-full max-w-5xl space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glitch-text text-6xl font-bold uppercase text-primary md:text-9xl"
                    >
                        Party
                        <br />
                        All Night
                    </motion.h1>

                    <div className="space-y-2 md:space-y-4">
                        <div className="flex items-center gap-4">
                            <motion.div
                                initial={{ scale: 0, rotate: -360 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                                className="glitch-text text-lg text-primary md:text-2xl"
                            >
                                ✧
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="glitch-text text-lg md:text-xl"
                            >
                                The ultimate music scene
                            </motion.p>
                        </div>

                        <div className="flex items-center gap-4">
                            <motion.div
                                initial={{ scale: 0, rotate: -360 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.8 }}
                                viewport={{ once: true }}
                                className="glitch-text text-lg text-primary md:text-2xl"
                            >
                                ✧
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                                className="glitch-text text-lg md:text-xl"
                            >
                                Get the party started
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
