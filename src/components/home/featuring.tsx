"use client";

import { cn } from "@/lib/utils";
import { Performances } from "./performances";
import { Services } from "./services";

export function Featuring({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn(
                "relative z-10 flex min-h-screen flex-col items-center justify-center gap-20 overflow-hidden bg-background p-5 py-20 md:gap-40 md:py-40",
                className
            )}
            {...props}
        >
            <Services />
            <Performances />
        </section>
    );
}
