import React, { useEffect, useState } from 'react'

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    return (
        <div style={{
            left: `${position.x}px`,
            top: `${position.y}px`
        }}
            className="custom-cursor">
            <h4>Open Project</h4>
        </div>
    )
}

export default Cursor