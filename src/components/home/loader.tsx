"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const loaderConfig = {
    duration: 0.8, // duration in seconds
    incrementStep: 2, // progress increment step
    initialDelay: 100, // initial delay in milliseconds
};

export function Loader() {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Lock scroll when component mounts
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";

        const timer = setTimeout(() => {
            const interval = setInterval(
                () => {
                    setProgress((prev) => {
                        if (prev >= 100) {
                            clearInterval(interval);
                            setIsComplete(true);
                            // Restore scroll when complete
                            document.body.style.overflow = "";
                            document.body.style.height = "";
                            return 100;
                        }
                        return prev + loaderConfig.incrementStep;
                    });
                },
                (loaderConfig.duration * 1000) /
                    (100 / loaderConfig.incrementStep)
            );

            return () => clearInterval(interval);
        }, loaderConfig.initialDelay);

        return () => {
            clearTimeout(timer);
            // Cleanup styles when component unmounts
            document.body.style.overflow = "";
            document.body.style.height = "";
        };
    }, []);

    if (isComplete) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isComplete ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
            <div className="flex flex-col items-center gap-8">
                <div className="w-32 md:w-40">
                    <Image
                        src="https://utfs.io/a/k28h802xyp/IiQWicq2IWP1oWr9xlV8rOnGIJ5elT6NLQyhiUkXH7fMjcEv"
                        alt="Logo"
                        width={500}
                        height={500}
                        className="size-full object-cover"
                    />
                </div>
                <div className="h-1 w-48 overflow-hidden rounded-full bg-white/20">
                    <motion.div
                        className="h-full bg-foreground"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.05 }}
                    />
                </div>
            </div>
        </motion.div>
    );
}
