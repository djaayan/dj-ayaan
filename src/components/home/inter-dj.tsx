"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface PageProps extends GenericProps {
    videoUrl?: string;
    imageUrl?: string;
    overlayColor?: string;
}

export function InterDJ({
    className,
    videoUrl,
    imageUrl,
    overlayColor,
    ...props
}: PageProps) {
    return (
        <section
            className={cn(
                "relative h-72 overflow-hidden md:h-[50vh]",
                className
            )}
            {...props}
        >
            {videoUrl && (
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute bottom-0 left-0 size-full object-cover"
                >
                    <source src={videoUrl} type="video/webm" />
                </video>
            )}

            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="InterDJ"
                    fill
                    className="absolute bottom-0 left-0 size-full object-cover"
                />
            )}

            <div
                className={cn(
                    "pointer-events-none absolute inset-0 bg-black/10 before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] before:bg-[length:100%_4px] before:content-['']",
                    overlayColor
                )}
            />
        </section>
    );
}
