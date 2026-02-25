"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

function PlanSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);
        const ctx = gsap.context(() => {
            const split = new SplitText(headingRef.current, {
                type: "chars",
            });
            gsap.fromTo(
                split.chars,
                { filter: "blur(12px)", opacity: 0.3 },
                {
                    filter: "blur(0px)",
                    opacity: 1,
                    stagger: 0.04,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        end: "center center",
                        scrub: 1,
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-full h-[100vh] bg-white flex">
            <div className="w-1/2 h-full bg-black"></div>
            <div className="w-1/2 h-full bg-white text-black p-13 flex flex-col justify-between">
                <h2 ref={headingRef} className="text-[100px] font-bold uppercase leading-none mt-14 text-center">
                    Bespoke strategy support
                </h2>
                <div>
                    <h3 className="text-2xl font-bold uppercase mt-14">A simple game plan — but never simplistic.</h3>
                    <p className="text-md mt-14">No buzzwords. No 300-slide decks. We build a clear, structured strategic framework tailored to your reality, with creative solutions that are smart — and doable.</p>
                </div>
            </div>
        </div>
    );
}

export default PlanSection;
