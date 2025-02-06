"use client";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { useNavbarStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavbarHome() {
    const pathname = usePathname();

    const [isMenuHidden, setIsMenuHidden] = useState(false);

    const isMenuOpen = useNavbarStore((state) => state.isOpen);
    const setIsMenuOpen = useNavbarStore((state) => state.setIsOpen);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        if (isMenuOpen) return;
        if (latest > previous && latest > 150) setIsMenuHidden(true);
        else setIsMenuHidden(false);
    });

    return (
        <motion.header
            variants={{
                visible: {
                    y: 0,
                },
                hidden: {
                    y: "-100%",
                },
            }}
            animate={isMenuHidden ? "hidden" : "visible"}
            transition={{
                duration: 0.35,
                ease: "easeInOut",
            }}
            className={cn(
                "absolute inset-x-0 top-0 z-50 flex h-auto w-full items-center justify-center",
                pathname !== "/" && "sticky backdrop-blur-sm"
            )}
            data-menu-open={isMenuOpen}
        >
            <nav
                className={cn(
                    "relative z-10 flex w-full max-w-5xl items-center justify-between gap-5 overflow-hidden p-5 md:p-10 md:px-8 xl:max-w-[100rem]",
                    isMenuOpen && "border-b"
                )}
            >
                <button
                    aria-label="Mobile Menu Toggle Button"
                    aria-pressed={isMenuOpen}
                    className="sm:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Icons.Menu className="size-6" />
                </button>

                <Link
                    href="/"
                    title="Home"
                    className="flex items-center gap-1 text-2xl font-bold hover:opacity-100 active:opacity-100"
                >
                    <div className="w-16 md:w-28">
                        <Image
                            src="https://utfs.io/a/k28h802xyp/IiQWicq2IWP1oWr9xlV8rOnGIJ5elT6NLQyhiUkXH7fMjcEv"
                            alt="Logo"
                            width={500}
                            height={500}
                            className="size-full object-cover"
                        />
                        <h4 className="sr-only text-xl font-bold uppercase md:text-4xl">
                            {siteConfig.name}
                        </h4>
                    </div>
                </Link>

                <ul className="hidden items-center sm:flex">
                    {!!siteConfig.menu.length &&
                        siteConfig.menu.map((item, index, items) => (
                            <li key={index}>
                                <Link
                                    className={cn(
                                        "border border-foreground p-4 px-10 font-semibold uppercase transition-all duration-500 ease-in-out hover:bg-primary hover:text-primary-foreground",
                                        item.isDisabled &&
                                            "cursor-not-allowed opacity-50",
                                        index !== items.length - 1 &&
                                            "border-r-0"
                                    )}
                                    prefetch
                                    href={item.href}
                                    target={
                                        item.isExternal ? "_blank" : "_self"
                                    }
                                    onClick={(e) =>
                                        item.isDisabled && e.preventDefault()
                                    }
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                </ul>
            </nav>
        </motion.header>
    );
}
