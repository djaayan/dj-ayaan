"use client";

import { services } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function Services({ className, ...props }: GenericProps) {
    return (
        <div
            className={cn("w-full max-w-5xl space-y-20", className)}
            {...props}
        >
            <div className="flex flex-col items-center gap-4 text-center">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="glitch-text text-4xl font-bold uppercase tracking-wider text-primary md:text-7xl"
                >
                    Services
                </motion.h2>

                <div className="flex items-center gap-1 md:gap-2">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="glitch-text text-lg text-primary md:text-2xl"
                    >
                        ✧
                    </motion.div>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="max-w-md text-balance text-sm md:text-base"
                    >
                        Searching for the real entertainer for your event? Look
                        no further! Book now for a power-packed performance
                    </motion.p>

                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="glitch-text text-lg text-primary md:text-2xl"
                    >
                        ✧
                    </motion.div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden bg-foreground/5 backdrop-blur-sm"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative z-10 p-6">
                            <div className="mb-4 text-primary">
                                <service.icon className="size-8" />
                            </div>

                            <h3 className="mb-2 text-xl font-bold text-primary">
                                {service.title}
                            </h3>

                            <p className="text-sm text-gray-300">
                                {service.description}
                            </p>
                        </div>
                        <div className="absolute bottom-0 left-0 h-1 w-full scale-x-0 bg-gradient-to-r from-primary/50 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                    </motion.div>
                ))}
            </div>

            <div className="pointer-events-none absolute right-0 top-20 size-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 size-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
    );
}
