"use client";

import gsap from "gsap";

function Navbar() {
    const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const span = e.currentTarget.querySelector("span");
        gsap.killTweensOf(span);
        gsap.to(span, {
            yPercent: -100,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => { gsap.set(span, { yPercent: 0 }) },
        });
    };

    return (
        <nav className="w-[90%] max-w-3xl w-full mx-auto self-end">
            <ul className="flex justify-between gap-4 text-black overflow-hidden">
                <li className="text-sm font-bold uppercase 4k:text-lg">
                    <a href="#" className="overflow-hidden inline-block" onMouseEnter={handleEnter} >
                        <span className="block">Home</span>
                    </a>
                </li>
                <li className="text-sm font-bold uppercase 4k:text-lg">
                    <a href="#" className="overflow-hidden block" onMouseEnter={handleEnter} >
                        <span className="block">About</span>
                    </a>
                </li>
                <li className="text-sm font-bold uppercase 4k:text-lg">
                    <a href="#" className="overflow-hidden block" onMouseEnter={handleEnter} >
                        <span className="block">Services</span>
                    </a>
                </li>
                <li className="text-sm font-bold uppercase 4k:text-lg">
                    <a href="#" className="overflow-hidden block" onMouseEnter={handleEnter} >
                        <span className="block">Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
