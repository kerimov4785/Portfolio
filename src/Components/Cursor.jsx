import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

function Cursor() {
    // const [position, setPosition] = useState({ x: 0, y: 0 });
    const [cursorClass, setCursorClass] = useState()
    const [cursorInner, setCursorInner] = useState()

    const cursorRef = useRef(null);
    useEffect(() => {
        gsap.to(cursorRef.current, {
            opacity:0.6,
            duration:.4,
            ease:'linear',
            yoyo:true,
            repeat:-1
        })

        const handleMouseMove = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                xPercent: -50,
                yPercent: -50,
                duration: 0.7,
                ease: "power3.out"
            });
            if (e.target.className == 'project') {
                setCursorClass('projects-cursor')
                setCursorInner(
                    <h4  >Open Project</h4>
                )
            }
            else {
                setCursorClass('')
                setCursorInner()
            }

        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    return (
        <div ref={cursorRef} className={`custom-cursor ${cursorClass}`}>
            {cursorInner}
        </div>
    )
}

export default Cursor