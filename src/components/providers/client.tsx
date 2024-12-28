"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ClientProvider({ children }: LayoutProps) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="dark">
            {children}
        </NextThemesProvider>
    );
}
