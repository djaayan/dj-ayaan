"use client";

import { IframeHTMLAttributes } from "react";

type MapIframeProps = IframeHTMLAttributes<HTMLIFrameElement>;

export function Iframe({ ...props }: MapIframeProps) {
    return (
        <iframe
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            {...props}
        />
    );
}
