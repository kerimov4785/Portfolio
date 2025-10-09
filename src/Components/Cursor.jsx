import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

function Cursor() {
    const [cursorType, setCursorType] = useState('basic')
    const cursorRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            gsap.to(dotRef.current, {
                x: e.clientX,
                y: e.clientY,
                xPercent: -50,
                yPercent: -50,
                duration: 0, // без задержки
            });
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                xPercent: -50,
                yPercent: -50,
                duration: 1,
                ease: "power4.out"
            });
            if (e.target.className == 'project') {
                setCursorType('projects')
            }
            else {
                setCursorType('basic')
            }

        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    return (
        <>
            {cursorType === 'basic' && <div ref={dotRef} className="cursor-dot"></div>}
            <div ref={cursorRef} className={`custom-cursor ${cursorType}-cursor`}>
                {cursorType === "projects" && <h4>Open Project</h4>}
            </div>
        </>
    )
}

export default Cursor