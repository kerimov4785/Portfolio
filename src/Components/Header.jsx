import gsap from 'gsap'
import React, { useLayoutEffect, useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

function Header() {
    let introRef = useRef(null);
    let introH1 = useRef(null)
    let headerAboutRef = useRef(null)
    let headerLineRef = useRef(null)
    let star1 = useRef(null)
    let star2 = useRef(null)
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });


    const [aboutHeight, setAboutHeight] = useState({});
    window.onresize = function () {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    useEffect(() => {
        gsap.to(introH1.current, {
            x: -introH1.current.offsetWidth / 2 - 20,
            duration: 22,
            repeat: -1,
            ease: 'linear'
        })
        gsap.to([star1.current, star2.current], {
            rotation: 360,
            duration: 2,
            repeat: -1,
            ease: "linear"
        })
    }, [])
    useLayoutEffect(() => {
        if (introRef.current && headerLineRef.current) {
            const h =
                windowSize.height -
                introRef.current.offsetHeight -
                headerLineRef.current.offsetHeight;
            setAboutHeight(h);
        }
    }, [windowSize])
    return (
        <div className='header' >
            <div ref={introRef} className="intro">
                <h1 ref={introH1} >WELCOME TO MY PORTFOLIO WELCOME TO MY PORTFOLIO</h1>
            </div>
            <div ref={headerAboutRef} style={{ height: aboutHeight }} >
                <p className='header-mini-title'>HE AIN’T NO REGULAR CODER</p>
                <p className='header-mini-title'>COME SEE WHAT I’VE BEEN BUILDING</p>
                <div ref={star1} className='star star1'>
                    <div className='line1' ></div>
                    <div className='line2' ></div>
                </div>
                <div ref={star2} className='star star2'>
                    <div className='line1' ></div>
                    <div className='line2' ></div>
                </div>
                <h1>My name is Nihat</h1>
                <h1>I'm a web developer .</h1>
            </div>
            <div ref={headerLineRef} id='header-line' >
                <h5>This is not my portfolio, it is a journey that reveals my deep passion for my work, showcases the extent of my creativity, reflecting both who I am as a professional and the unique perspective I bring to every project, with innovation and determination.</h5>
                <h5>where creativity meets results</h5>
            </div>
        </div>
    )
}

export default Header