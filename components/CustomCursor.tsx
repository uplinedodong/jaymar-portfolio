"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [scrollPct, setScrollPct] = useState(0);

    useEffect(() => {
        let dotX = 0, dotY = 0;
        let ringX = 0, ringY = 0;
        let raf: number;

        const move = (e: MouseEvent) => {
            dotX = e.clientX;
            dotY = e.clientY;
        };

        const loop = () => {
            // Dot: instant
            if (dotRef.current) {
                dotRef.current.style.left = `${dotX}px`;
                dotRef.current.style.top = `${dotY}px`;
            }
            // Ring: lerp for smooth lag
            ringX += (dotX - ringX) * 0.14;
            ringY += (dotY - ringY) * 0.14;
            if (ringRef.current) {
                ringRef.current.style.left = `${ringX}px`;
                ringRef.current.style.top = `${ringY}px`;
            }
            raf = requestAnimationFrame(loop);
        };

        const onHoverIn = () => {
            dotRef.current?.classList.add("hovering");
            ringRef.current?.classList.add("hovering");
        };
        const onHoverOut = () => {
            dotRef.current?.classList.remove("hovering");
            ringRef.current?.classList.remove("hovering");
        };

        const addHoverListeners = () => {
            document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
                el.addEventListener("mouseenter", onHoverIn);
                el.addEventListener("mouseleave", onHoverOut);
            });
        };

        const onScroll = () => {
            const el = document.documentElement;
            const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
            setScrollPct(pct);
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("scroll", onScroll, { passive: true });
        raf = requestAnimationFrame(loop);
        addHoverListeners();

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            {/* Scroll Progress */}
            <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />

            {/* Cursor */}
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
}
