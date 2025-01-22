"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const galleryItems = [
    {
        type: "image",
        src: "https://utfs.io/a/wgl22isy86/HWQo5hUQqcU5mkckfOuv7CH4WbU8MjrSlJZRBX6T3sgfdmDt",
        alt: "DJ Performance 1",
        span: "col-span-2 row-span-2",
    },
    {
        type: "video",
        src: "https://utfs.io/a/wgl22isy86/HWQo5hUQqcU5psMYA7ZiSJENHd3nUavsbQxwKAzmXZMrk5tc",
        alt: "DJ Video 1",
        span: "col-span-1 row-span-1",
        thumbnail:
            "https://utfs.io/a/wgl22isy86/HWQo5hUQqcU5pNBc2nZiSJENHd3nUavsbQxwKAzmXZMrk5tc",
    },
    {
        type: "image",
        src: "https://utfs.io/a/wgl22isy86/HWQo5hUQqcU5CfWB5rjOxqw7glnWhRLDQGbvzc6UEHeuVTiB",
        alt: "DJ Performance 2",
        span: "col-span-1 row-span-1",
    },
    {
        type: "image",
        src: "https://utfs.io/a/wgl22isy86/HWQo5hUQqcU5x5ijnxp8RHvntJDLVwoBjpPIrdXm3fQi0s1S",
        alt: "DJ Performance 3",
        span: "col-span-2 row-span-1",
    },
    {
        type: "video",
        src: "https://utfs.io/a/wgl22isy86/HWQo5hUQqcU5joJGWV8Htq2XrwMu5Ym4c7ToQbRnGyOhZeFz",
        alt: "DJ Video 2",
        span: "col-span-1 row-span-2",
        thumbnail:
            "https://utfs.io/a/wgl22isy86/HWQo5hUQqcU5vaLxDgHGJlj1zo3dSfgh7R09wCDYNuLXyxZP",
    },
    {
        type: "image",
        src: "https://utfs.io/a/wgl22isy86/HWQo5hUQqcU504fS9wEdabJUh3sCN6X4uO2qy0PLpW18VwQf",
        alt: "DJ Performance 4",
        span: "col-span-1 row-span-1",
    },
    {
        type: "image",
        src: "https://utfs.io/a/wgl22isy86/HWQo5hUQqcU53XJE6pOo5atMZ7PNIvj1q2nKO8XWFTrp0DdA",
        alt: "DJ Performance 5",
        span: "col-span-1 row-span-1",
    },
];

export function GallerySection() {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="glitch-text mb-10 text-4xl font-bold text-[#ADFF2F]"
            >
                Gallery
            </motion.h2>

            <div className="grid auto-rows-[200px] grid-cols-3 gap-4">
                {galleryItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className={`relative cursor-pointer overflow-hidden rounded-lg ${item.span}`}
                        onClick={() => setSelectedItem(index)}
                    >
                        <Image
                            src={
                                item.type === "image"
                                    ? item.src
                                    : item.thumbnail!
                            }
                            alt={item.alt}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 hover:scale-110"
                        />

                        {item.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                <Play className="size-12 text-white" />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {selectedItem !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
                    onClick={() => setSelectedItem(null)}
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="relative max-h-full max-w-4xl"
                    >
                        {galleryItems[selectedItem].type === "image" ? (
                            <Image
                                src={
                                    galleryItems[selectedItem].src ||
                                    "/placeholder.svg"
                                }
                                alt={galleryItems[selectedItem].alt}
                                width={1200}
                                height={800}
                                className="max-h-[80vh] object-contain"
                            />
                        ) : (
                            <video
                                src={galleryItems[selectedItem].src}
                                controls
                                className="max-h-[80vh]"
                            />
                        )}
                    </motion.div>
                </motion.div>
            )}
        </motion.section>
    );
}
