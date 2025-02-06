"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BioSection() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-20 flex flex-col items-center gap-10 md:flex-row"
        >
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative aspect-square w-full overflow-hidden rounded-lg md:aspect-[4/5] md:w-1/2"
            >
                <Image
                    src="https://utfs.io/a/k28h802xyp/IiQWicq2IWP1Ij5gQG2IWP19mXN5vwlkeM480oEfYpQHsuFC"
                    alt="DJ"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>

            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-full space-y-6 md:w-1/2"
            >
                <h2 className="text-balance text-4xl font-bold uppercase md:text-5xl">
                    <motion.span
                        className="glitch-text font-bold tracking-wider text-[#ADFF2F]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.3 }}
                    >
                        DJ Aayan
                    </motion.span>{" "}
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.3 }}
                    >
                        is a DJ And Producer from India
                    </motion.span>
                </h2>

                <motion.div
                    className="space-y-5 text-balance text-sm md:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <p className="rounded-lg bg-white/5 p-4 backdrop-blur-sm">
                        Among the few from Genx who has been on DJing map
                        spinning across the genres in this learning curve for
                        perfection. He is very hardworking and passionate when
                        it comes to music. Playing music is mainly about
                        bringing people together and to savour the bliss and
                        celebration called life. He is associated with this
                        profession when he was at an early age and started his
                        journey in the year 2008.
                    </p>

                    <p className="rounded-lg bg-white/5 p-4 backdrop-blur-sm">
                        Now, he is touching the limits and extending his reach
                        day by day. He has explored almost every genre of music
                        throughout the journey. His flexibility with different
                        genres makes him stand out from the rest and gives him
                        the edge to his overall EDM sense. A perfect sense to
                        get his crowd on the dance floor and groove them.
                        Regular playing out and parties has broadened his sense
                        of music and has made him a real artist and a true
                        performer. Known as a party starter, this man is loved
                        for his positive vibes, focus and dedication along with
                        his awesome musical talents.
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
