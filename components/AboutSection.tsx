"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const ctx = gsap.context(() => {
            const splitHeading = new SplitText(headingRef.current, {
                type: "lines",
                mask: "lines",
            });
            const splitParagraph = new SplitText(paragraphRef.current, {
                type: "lines",
                mask: "lines",
            });

            const allLines = [...splitHeading.lines, ...splitParagraph.lines];

            gsap.fromTo(
                allLines,
                { yPercent: 110 },
                {
                    yPercent: 0,
                    stagger: 0.15,
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
            <div className="w-1/2 h-full bg-black text-white p-13">
                <h2 ref={headingRef} className="text-4xl font-bold uppercase leading-none mt-14 4k:text-6xl">
                    WE PUT STRATEGIC RELEVANCE IN SERVICE OF CREATIVE INSPIRATION.
                </h2>
                <p ref={paragraphRef} className="text-2xl mt-14 max-w-[70%] mx-auto 4k:text-4xl">
                    We believe that thinking with clarity and relevance is what enables bold action — and builds brands that truly resonate. Whether in brand strategy or communication, we craft strategic foundations built on relevant insights and distinctive ideas.
                    The result: strategies that spark action, stimulate reflection, and generate real impact aligned with your business ambitions.
                </p>
            </div>
        </div>
    );
}

export default AboutSection;
