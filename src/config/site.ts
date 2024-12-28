import { getAbsoluteURL } from "@/lib/utils";
import { BellRing, Cake, Gift, Heart, Music, Users } from "lucide-react";

export const siteConfig: SiteConfig = {
    name: "DJ Aayan",
    description: "The ultimate music scene",
    longDescription:
        "Among the few from Genx who has been on DJing map spinning across the genres in this learning curve for perfection.",
    keywords: [],
    category: "Music",
    developer: {
        name: "DRVGO",
        url: "https://itsdrvgo.me/",
    },
    og: {
        url: getAbsoluteURL("/og.webp"),
        width: 1200,
        height: 630,
    },
    links: {
        Facebook: "#",
        Twitter: "#",
        Instagram: "#",
        Linkedin: "#",
        Youtube: "#",
    },
    menu: [
        {
            name: "Bio",
            description: "Learn more about us",
            href: "/bio",
            icon: "User",
        },
        {
            name: "Services",
            description: "Hire us for your event",
            href: "/services",
            icon: "Music",
        },
        {
            name: "Contact",
            description: "Get in touch with us",
            href: "/contact",
            icon: "BookOpen",
        },
    ],
};

export const services = [
    {
        title: "Club Gig",
        icon: Music,
        description:
            "High-energy club performances with cutting-edge music selection",
    },
    {
        title: "Bachelor's Party",
        icon: Gift,
        description: "Unforgettable party music for your last night of freedom",
    },
    {
        title: "Birthday Party",
        icon: Cake,
        description: "Age-appropriate mixes to make your celebration special",
    },
    {
        title: "Wedding Events",
        icon: BellRing,
        description: "Elegant music curation for your perfect wedding day",
    },
    {
        title: "Anniversary",
        icon: Heart,
        description: "Romantic selections to celebrate your special moments",
    },
    {
        title: "Private Parties",
        icon: Users,
        description: "Customized playlist for your exclusive gatherings",
    },
];
