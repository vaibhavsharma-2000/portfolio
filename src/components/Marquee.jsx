import { useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

/**
 * Smooth infinite-scroll marquee using Framer Motion's useAnimationFrame
 * for buttery-smooth 60fps animation (no CSS keyframes jank).
 *
 * Props:
 *  items       – array of strings
 *  speed       – pixels per second (default 50)
 *  reverse     – reverse direction
 *  separator   – separator character between items
 *  className   – optional wrapper className
 */

const Marquee = ({ items = [], speed = 50, reverse = false, separator = "·", className = "" }) => {
    const trackRef = useRef(null);
    const xRef = useRef(0);
    const [trackWidth, setTrackWidth] = useState(0);

    // Measure half-width of the doubled track for seamless wraparound
    useEffect(() => {
        if (trackRef.current) {
            setTrackWidth(trackRef.current.scrollWidth / 2);
        }
    }, [items]);

    // Animate using rAF for silky-smooth motion
    useAnimationFrame((_, delta) => {
        if (!trackRef.current || trackWidth === 0) return;
        const pxPerFrame = (speed * delta) / 1000;
        xRef.current += reverse ? pxPerFrame : -pxPerFrame;

        // Seamless loop: reset when we've scrolled one full set
        if (Math.abs(xRef.current) >= trackWidth) {
            xRef.current = 0;
        }

        trackRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
    });

    const doubled = [...items, ...items];

    return (
        <div className={`relative overflow-hidden select-none ${className}`}>
            {/* Fade edges */}
            <div
                className="absolute inset-y-0 left-0 w-20 md:w-32 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(90deg, #0a0a0a, transparent)' }}
            />
            <div
                className="absolute inset-y-0 right-0 w-20 md:w-32 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(270deg, #0a0a0a, transparent)' }}
            />

            {/* Scrolling track — using will-change and translate3d for GPU compositing */}
            <div
                ref={trackRef}
                className="flex items-center gap-6 md:gap-8 whitespace-nowrap py-4 will-change-transform"
            >
                {doubled.map((item, i) => (
                    <span key={i} className="flex items-center gap-6 md:gap-8">
                        <span className="text-white/60 text-sm md:text-base font-sans font-medium tracking-wide uppercase">
                            {item}
                        </span>
                        {i < doubled.length - 1 && (
                            <span className="text-brand/40 text-xs">{separator}</span>
                        )}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
