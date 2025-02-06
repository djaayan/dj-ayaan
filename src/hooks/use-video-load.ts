import { useState } from "react";

export function useVideoLoad() {
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    return {
        isLoading,
        handleLoadStart,
        handleCanPlay,
    };
}
