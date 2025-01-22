"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

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

export function Gallery({ className, ...props }: GenericProps) {
    return (
        <div
            className={cn("relative flex w-full justify-center", className)}
            {...props}
        >
            <div className="relative w-full max-w-5xl">
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative space-y-8 md:space-y-16"
                >
                    <div className="relative space-y-4">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="glitch-text text-4xl font-bold uppercase tracking-wider text-primary md:text-7xl"
                        >
                            Gallery
                        </motion.h2>

                        <div className="absolute -bottom-4 left-0 h-1 w-32 bg-gradient-to-r from-primary to-transparent md:w-64" />
                    </div>

                    <div className="grid auto-rows-[200px] grid-cols-3 gap-4">
                        {galleryItems.map((item, index) => (
                            <Dialog key={index}>
                                <DialogTrigger asChild>
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.1 * index,
                                        }}
                                        className={`relative cursor-pointer overflow-hidden rounded-lg ${item.span}`}
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
                                </DialogTrigger>

                                <DialogContent className="p-0 md:w-auto">
                                    <DialogHeader className="sr-only">
                                        <DialogTitle>{item.alt}</DialogTitle>
                                    </DialogHeader>

                                    {item.type === "image" ? (
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={1200}
                                            height={800}
                                            className="max-h-[80vh] object-contain"
                                        />
                                    ) : (
                                        <video
                                            src={item.src}
                                            controls
                                            className="max-h-[80vh]"
                                        />
                                    )}
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
