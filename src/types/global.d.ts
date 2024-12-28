import { Icons } from "@/components/icons";
import { HTMLAttributes, ReactNode } from "react";

declare global {
    type ValueOf<T> = T[keyof T];

    type GenericProps = HTMLAttributes<HTMLElement>;
    type LayoutProps = {
        children: ReactNode;
    };

    type SiteConfig = {
        name: string;
        description: string;
        longDescription?: string;
        category: string;
        og: {
            url: string;
            width: number;
            height: number;
        };
        developer: {
            name: string;
            url: string;
        };
        keywords: string[];
        links?: Partial<Record<keyof typeof Icons, string>>;
        menu: {
            name: string;
            description?: string;
            href: string;
            icon: keyof typeof Icons;
            isExternal?: boolean;
            isDisabled?: boolean;
        }[];
    };
}
