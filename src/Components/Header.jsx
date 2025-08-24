import React, { useState } from 'react'
import { useEffect } from 'react'

function Header() {
    let [x, setX] = useState(100)
    useEffect(() => {
        let timer = setInterval(() => {
            setX(prev => prev - 3)
        }, 64);
        
        return () => clearInterval(timer)
    }, [])
    return (
        <div className='header' >
            <div className="intro">
                <h1 style={{ transform: `translateX(${x}px)  scaleY(1.2)` }} >WELCOME TO MY PORTFOLIO</h1>
            </div>
        </div>
    )
}

export default Header