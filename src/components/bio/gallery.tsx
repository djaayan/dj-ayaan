"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { galleryItems } from "../home";
import { Icons } from "../icons";

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
                        onClick={() => setSelectedItem(index)}
                        className={cn(
                            "relative cursor-pointer overflow-hidden rounded-lg",
                            item.span
                        )}
                    >
                        <Image
                            src={
                                item.type === "image"
                                    ? item.src
                                    : item.thumbnail!
                            }
                            alt={item.alt}
                            fill
                            className="z-10 object-cover transition-transform duration-300 hover:scale-110"
                        />

                        <div
                            className="absolute inset-0 flex items-center justify-center bg-black/50"
                            aria-label="View Item"
                        >
                            <Icons.Loader2 className="size-5 animate-spin text-white" />
                        </div>

                        {item.type === "video" && (
                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50">
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
