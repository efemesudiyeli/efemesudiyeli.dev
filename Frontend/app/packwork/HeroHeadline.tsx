"use client";

import { useState, useEffect } from "react";

const phrases = [
    "Pack Smarter.",
    "Travel Lighter.",
    "Never Forget.",
    "Avoid Fees."
];

export default function HeroHeadline() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % phrases.length);
                setFade(true);
            }, 500); // fade out duration
        }, 2500); // cycle duration

        return () => clearInterval(interval);
    }, []);

    return (
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-black min-h-[4rem] md:min-h-[5rem] flex items-center justify-center overflow-hidden">
            <span className={`transition-all duration-500 ease-in-out transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                {phrases[index]}
            </span>
        </h1>
    );
}
