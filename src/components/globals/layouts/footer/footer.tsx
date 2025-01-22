"use client";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GeneralShell } from "../shells";

export function Footer({ className, ...props }: GenericProps) {
    return (
        <footer
            className={cn(
                "z-50 flex items-center justify-center border-t bg-gradient-to-b from-background to-accent",
                className
            )}
            {...props}
        >
            <GeneralShell>
                <div className="flex flex-col-reverse items-center justify-between gap-5 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        <span>&copy; {new Date().getFullYear()}</span>{" "}
                        <Link
                            href={siteConfig.developer.url}
                            className="text-sm hover:underline"
                        >
                            {siteConfig.developer.name}.
                        </Link>{" "}
                        <span>All rights reserved.</span>
                    </p>

                    {siteConfig.links &&
                        !!Object.entries(siteConfig.links).length && (
                            <div className="flex gap-4">
                                {Object.entries(siteConfig.links).map(
                                    ([name, href]) => {
                                        const Icon =
                                            Icons[name as keyof typeof Icons];

                                        return (
                                            <Link
                                                key={name}
                                                href={href}
                                                className="text-muted-foreground"
                                            >
                                                <Icon className="size-5" />
                                            </Link>
                                        );
                                    }
                                )}
                            </div>
                        )}
                </div>
            </GeneralShell>
        </footer>
    );
}
