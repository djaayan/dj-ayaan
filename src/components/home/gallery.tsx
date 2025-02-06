"use client";

import { useVideoLoad } from "@/hooks/use-video-load";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { Icons } from "../icons";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

export const galleryItems = [
    {
        type: "image",
        src: "https://utfs.io/a/k28h802xyp/IiQWicq2IWP1kovvzEuHj5WxbGOLDqvBh7uZCzp3lewor6kH",
        alt: "DJ Performance 1",
        span: "col-span-2 row-span-2",
    },
    {
        type: "video",
        src: "https://utfs.io/a/k28h802xyp/IiQWicq2IWP1luZhanyohM4KO9kj80PIVrfQXFRvJUilYLdZ",
        alt: "DJ Video 1",
        span: "col-span-1 row-span-1",
        thumbnail:
            "https://utfs.io/a/k28h802xyp/IiQWicq2IWP1Ij5gQG2IWP19mXN5vwlkeM480oEfYpQHsuFC",
    },
    {
        type: "image",
        src: "https://utfs.io/a/k28h802xyp/IiQWicq2IWP1Iy1m152IWP19mXN5vwlkeM480oEfYpQHsuFC",
        alt: "DJ Performance 2",
        span: "col-span-1 row-span-1",
    },
    {
        type: "image",
        src: "https://utfs.io/a/k28h802xyp/IiQWicq2IWP1d7cd9FQsuq2le8Aj1sydfJx6PFSBVYt7k9oM",
        alt: "DJ Performance 3",
        span: "col-span-2 row-span-1",
    },
    {
        type: "video",
        src: "https://utfs.io/a/k28h802xyp/IiQWicq2IWP1DrI6NX8SF4OKzZq3ILJHka2R8hj6X1YmTNQo",
        alt: "DJ Video 2",
        span: "col-span-1 row-span-2",
        thumbnail:
            "https://utfs.io/a/k28h802xyp/IiQWicq2IWP1gGXbGixzSCQ4xRusPE8hWtOvndF5YV3wmlMJ",
    },
    {
        type: "image",
        src: "https://utfs.io/a/k28h802xyp/IiQWicq2IWP1XUcZli7qBbSE1dhTRLx9cepazGYJIl042wFy",
        alt: "DJ Performance 4",
        span: "col-span-1 row-span-1",
    },
    {
        type: "image",
        src: "https://utfs.io/a/k28h802xyp/IiQWicq2IWP1S4elvdxR296opniZlUN8wGEsKdI5OPC10tgH",
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
                                        <DialogVideoContent src={item.src} />
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

function DialogVideoContent({ src }: { src: string }) {
    const { isLoading, handleLoadStart, handleCanPlay } = useVideoLoad();

    return (
        <div className="relative">
            <video
                src={src}
                controls
                className="max-h-[80vh]"
                onLoadStart={handleLoadStart}
                onCanPlay={handleCanPlay}
            />
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <Icons.Loader2 className="size-5 animate-spin text-white" />
                </div>
            )}
        </div>
    );
}
