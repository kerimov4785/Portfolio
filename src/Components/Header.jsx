import gsap from 'gsap'
import React, { useLayoutEffect, useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

function Header({ windowSize }) {
    let introRef = useRef(null);
    let introH1 = useRef(null)
    let headerAboutRef = useRef(null)
    let headerLineRef = useRef(null)
    let star1 = useRef(null)
    let star2 = useRef(null)


    const [aboutHeight, setAboutHeight] = useState({});
    useEffect(() => {
        const words = gsap.utils.toArray(".header-mini-title span");
        const words2 = gsap.utils.toArray(".header-large-title span");

        const runAnimation = () => {
            gsap.to(introH1.current, {
                x: -introH1.current.offsetWidth / 2 - 20,
                duration: 22,
                repeat: -1,
                ease: 'linear',
                delay: 1.7
            })
            gsap.to([star1.current, star2.current], {
                rotation: 360,
                duration: 2,
                repeat: -1,
                ease: "linear"
            })
        }

        // Ждём загрузки всех шрифтов
        document.fonts.ready.then(runAnimation)

        let tl = gsap.timeline()
        if (windowSize.width >= 1024) {
            tl.from(introRef.current, {
                y: '-100%',
                duration: 1.3,
                ease: 'power3.out'
            }, '.7')
            tl.from(headerLineRef.current, {
                y: '100%',
                duration: 1.3,
                ease: 'power3.out'
            }, "<")
            tl.from([words, words2], {
                y: "100%",
                duration: 1.3,
                ease: 'power3.out'
            }, '<')
            tl.from([star1.current, star2.current], {
                opacity: 0,
                duration: 1.3,
                ease: 'power3.out'
            }, '<')
        }


        return () => {
            gsap.killTweensOf(introH1.current);
            gsap.killTweensOf([star1.current, star2.current]);
        };
    }, [])
    useLayoutEffect(() => {
        const updateHeight = () => {
            const h =
                window.innerHeight -
                introRef.current.offsetHeight -
                headerLineRef.current.offsetHeight;
            setAboutHeight(h);
        };

        document.fonts.ready.then(updateHeight);

        // window.addEventListener('resize', updateHeight);
        // return () => window.removeEventListener('resize', updateHeight);
    }, []);
    return (
        <div className='header' >
            <div ref={introRef} className="intro">
                <h1 ref={introH1} >WELCOME TO MY PORTFOLIO WELCOME TO MY PORTFOLIO</h1>
            </div>
            <div ref={headerAboutRef} style={{ height: aboutHeight }} >
                <p className='header-mini-title'><span>HE AIN’T NO REGULAR CODER</span></p>
                <p className='header-mini-title'><span>COME SEE WHAT I’VE BEEN BUILDING</span></p>
                <div ref={star1} className='star star1'>
                    <div className='line1' ></div>
                    <div className='line2' ></div>
                </div>
                <div ref={star2} className='star star2'>
                    <div className='line1' ></div>
                    <div className='line2' ></div>
                </div>
                <h1 className='header-large-title' ><span>My name is Nihat</span></h1>
                <h1 className='header-large-title' ><span>I'm a web developer .</span></h1>
            </div>
            <div ref={headerLineRef} id='header-line' >
                <h5>{`This is not my portfolio, it is a journey that reveals my deep passion for my work, showcases the extent of my creativity, reflecting both who I am as a professional  ${windowSize.width > 540 ? 'and the unique perspective I bring to every project, with innovation and determination.' : ''}`}</h5>
                <h5>where creativity meets results</h5>
            </div>
        </div>
    )
}

export default Header