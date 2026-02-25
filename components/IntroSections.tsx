"use client";
import { useEffect, useRef } from "react";
function IntroSections() {
    const interactiveRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("interactiveRef", interactiveRef.current);
        if (!interactiveRef.current) return;

        const interBubble = interactiveRef.current as HTMLDivElement;
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;
        let animationFrameId: number | null = null;
        let isActive = true;

        function move() {
            if (!isActive) return;
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            animationFrameId = requestAnimationFrame(move);
        }

        const handleMouseMove = (event: MouseEvent) => {
            tgX = event.clientX;
            tgY = event.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        move();

        return () => {
            isActive = false;
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);
    return (
        <div className="h-screen w-full overflow-hidden gradient-bg relative">

            <svg className="hidden" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="blob-effect">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className="w-full h-full blur-2xl filter-[url(#blob-effect)]">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive" ref={interactiveRef}></div>
            </div>
            <div className="w-1/2 h-full p-13 flex flex-col justify-end z-10 absolute bottom-0 right-0">
                <h1 className="text-4xl font-bold uppercase text-white indent-13 leading-none bg-white/10 max-w-[80%] 4k:text-6xl">RELEVANT IDEAS AND BOLD ACTIONS TO GENERATE THE MOMENTUM THAT PROPELS YOUR BRAND FORWARD.</h1>
            </div>
        </div>
    );
}

export default IntroSections;