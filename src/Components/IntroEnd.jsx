import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CUBE_SIZE = 40; // размер кубика в px

export default function IntroEnd({ setAnimEnd2 }) {
    const gridRef = useRef(null);
    const [cells, setCells] = useState([]);

    // 1️⃣ считаем сетку
    useLayoutEffect(() => {
        const cols = Math.ceil(window.innerWidth / CUBE_SIZE);
        const rows = Math.ceil(window.innerHeight / CUBE_SIZE);
        const total = cols * rows;

        setCells(new Array(total).fill(0));

        if (gridRef.current) {
            gridRef.current.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
            gridRef.current.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        }
    }, []);

    // 2️⃣ анимация исчезновения
    useLayoutEffect(() => {
        if (!cells.length) return;

        const ctx = gsap.context(() => {
            gsap.to(".cube", {
                opacity: 0,
                scale: 0,
                duration: 0.8,
                stagger: {
                    each: .09,
                    from: "center",
                    grid:"auto"
                     // 🔥 можешь менять
                },
                ease: "power3.inOut",
                onComplete: () => {
                    setAnimEnd2(false)
                },
            });
        }, gridRef);

        return () => ctx.revert();
    }, [cells]);

    return (
        <div ref={gridRef} className="intro-grid">
            {cells.map((_, i) => (
                <div className="cube" key={i} />
            ))}
        </div>
    );
}
