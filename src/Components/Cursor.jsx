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
            duration: 0,
        });
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            xPercent: -50,
            yPercent: -50,
            duration: 1,
            ease: "power4.out"
        });
        setCursorType(prevType => {
            const isProject = e.target.classList.contains('project');
            const isPanel = e.target.classList.contains('panel');
            const isContact = e.target.classList.contains('contact');

            if (isProject && prevType !== 'projects') {
                gsap.to(cursorRef.current, { width: 75, height: 75, duration: 0.5 });
                return 'projects';
            } else if (isPanel && prevType !== 'panel') {
                gsap.to(cursorRef.current, { width: 100, height: 100, duration: 0.5 });
                return 'panel';
            } else if (isContact && prevType !== 'contact') {
                gsap.to(cursorRef.current, { width: 60, height: 60, duration: 0.5 });
                return 'contact'
            } else if (!isProject && !isPanel && !isContact && prevType !== 'basic') {
                gsap.to(cursorRef.current, { width: 100, height: 100, duration: 0.5 });
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
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            gsap.killTweensOf(dotRef.current);
            gsap.killTweensOf(cursorRef.current);
        }
    }, []);
    return (
        <>
            <div ref={dotRef} style={{ display: (cursorType === 'basic' || cursorType === 'panel') ? 'block' : 'none' }} className="cursor-dot">
                <div></div>
                <div></div>
            </div>
            <div ref={cursorRef} className={`custom-cursor ${cursorType}-cursor`}>
                {cursorType === "projects" && <h4>Open Project</h4>}
                {cursorType === "contact" && <h4>Tap</h4>}
            </div>
        </>
    )
}

export default Cursor