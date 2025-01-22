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
        name: "kiwemedia",
        url: "https://kiwemedia.com/",
    },
    og: {
        url: getAbsoluteURL("/og.webp"),
        width: 1200,
        height: 630,
    },
    links: {
        Facebook: "https://www.facebook.com/share/1EGkUrqncp/?mibextid=wwXIfr",
        Mail: "mailto:djaayansinghbhantu07@gmail.com",
        Instagram:
            "https://www.instagram.com/djaayan.music?igsh=cHUzbDl5YmxjcnNl&utm_source=qr",
        Youtube:
            "https://youtube.com/@djaayanthepasscode6851?si=Pr6no9g5Gtnon9eZ",
    },
    menu: [
        {
            name: "About",
            description: "Learn more about us",
            href: "/about",
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
