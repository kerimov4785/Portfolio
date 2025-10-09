import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

function Cursor() {
    const [cursorType, setCursorType] = useState('basic')
    const cursorRef = useRef(null);
    const dotRef = useRef(null);
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
            ease: "power2.out"
        });
        setCursorType(prevType => {
            const isProject = e.target.classList.contains('project');
            if (isProject && prevType !== 'projects') {
                gsap.to(cursorRef.current, { width: 75, height: 75, duration: .5 });
                return 'projects';
            } else if (!isProject && prevType !== 'basic') {
                gsap.to(cursorRef.current, { width: 100, height: 100, duration: .5 });
                return 'basic';
            }

            return prevType;
        });
    };
    useEffect(() => {
        gsap.to(dotRef.current, {
            rotate: 360,
            duration: 1.5,
            repeat: -1,
            ease: 'linear'
        })

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    return (
        <>
            <div ref={dotRef} style={{ display: cursorType === 'basic' ? 'block' : 'none' }} className="cursor-dot">
                <div></div>
                <div></div>
            </div>
            <div ref={cursorRef} className={`custom-cursor ${cursorType}-cursor`}>
                {cursorType === "projects" && <h4>Open Project</h4>}
            </div>
        </>
    )
}

export default Cursor