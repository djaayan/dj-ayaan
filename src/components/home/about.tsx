"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { Icons } from "../icons";

export function About({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn(
                "z-10 flex items-center justify-center bg-background p-5 py-20 md:min-h-screen md:py-20",
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
                    <div className="size-full md:basis-1/2">
                        <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                            <video
                                src="https://utfs.io/a/k28h802xyp/IiQWicq2IWP1luZhanyohM4KO9kj80PIVrfQXFRvJUilYLdZ"
                                autoPlay
                                loop
                                muted
                                className="absolute inset-0 z-10 size-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                <Icons.Loader2 className="size-5 animate-spin text-white" />
                            </div>
                        </div>
                    </div>

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

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                        >
                            <Link
                                href="/about"
                                className="glitch-button flex items-center gap-2 border border-primary px-4 py-2 text-sm text-primary md:text-base"
                            >
                                Take to bio
                                <Icons.ArrowRight className="size-4" />
                            </Link>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
