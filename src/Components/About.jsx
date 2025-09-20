import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useContext, useRef } from 'react'
import { useEffect } from 'react'
import { DataContext } from '../DataContext/Data'

function About() {
    gsap.registerPlugin(ScrollTrigger)
    let { skills, projects } = useContext(DataContext)
    let aboutRef = useRef(null)
    let titleRef = useRef(null)
    let fact1 = useRef(null)
    let fact2 = useRef(null)
    let fact3 = useRef(null)
    let fact4 = useRef(null)
    let fact5 = useRef(null)
    let title1 = useRef(null)
    let title2 = useRef(null)
    let title3 = useRef(null)
    let title4 = useRef(null)
    let title5 = useRef(null)
    let text1 = 'From High School No.177 in Baku (2012–2023) to a Bachelor’s in Information Technology at the Azerbaijan State University of Economics (2023–present), and after completing Frontend & Backend Development training at Div Academy (2024–2025) — my journey is all about growth, code, and creating the future.'.split("")
    let text2 = 'I don’t just build static websites — I create dynamic experiences: animations, smooth transitions, bold visuals. Every project should shout: “Scroll further, it only gets better.'.split("")
    let text3 = 'My motivation comes from myself: I always strive to be better than my past self and challenge myself, while also aiming to inspire others to grow and explore new opportunities.'.split("")
    let text4 = `I work with ${skills.map(item => ` ${item.name},`).join('')} and continuously explore new technologies to bring projects to life.`.split("")
    let text5 = `I transform ideas into interactive experiences, blending design, code, and imagination to bring each concept to life. Here are some of the worlds I’ve built so far:${projects.slice(0, 5).map(item => ` ${item.name},`).join('')}`.split("")
    useEffect(() => {
        const triggers = [];

        const headings = gsap.utils.toArray(document.querySelectorAll('.about-title-box h1'))
        const letters1 = gsap.utils.toArray(document.querySelectorAll('#text1 span'))
        const letters2 = gsap.utils.toArray(document.querySelectorAll('#text2 span'))
        const letters3 = gsap.utils.toArray(document.querySelectorAll('#text3 span'))
        const letters4 = gsap.utils.toArray(document.querySelectorAll('#text4 span'))
        const letters5 = gsap.utils.toArray(document.querySelectorAll('#text5 span'))
        let aboutArray = [
            { obj: fact1, letters: letters1, title: title1 },
            { obj: fact2, letters: letters2, title: title2 },
            { obj: fact3, letters: letters3, title: title3 },
            { obj: fact4, letters: letters4, title: title4 },
            { obj: fact5, letters: letters5, title: title5 },
        ]

        if (window.innerWidth >= 768) {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.about-title-box',
                    scrub: 1,
                    pin: true,
                    start: "top top",
                    anticipatePin: 1,
                    // markers:true,
                    end: `bottom+=1300 bottom `,
                    fastScrollEnd: true,
                }
            })
            tl.from(headings, {
                opacity: 0,
                stagger: 0.2
            })
        }
        aboutArray.forEach(item => {
            let tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: item.obj.current,
                    start: "top 70%",
                    end: "bottom bottom",
                    toggleActions: "restart none reverse none"
                }
            })
            tl2.to(item.letters, {
                opacity: 1,
                duration: 0,
                stagger: 0.005,
            })
            tl2.from(item.title.current, {
                x: '-100%',
                duration: 1,
                ease: 'power4.out'
            }, '<')
        })
    }, [])
    return (
        <section ref={aboutRef} id='about'>
            <div ref={titleRef} className='about-title-box'>
                <div>
                    <h1>WHO</h1>
                    <h1>ELSE</h1>
                </div>
                <div>
                    <h1>IF</h1>
                    <h1>NOT</h1>
                    <h1 style={{ color: 'white' }}>ME?</h1>
                </div>
            </div>
            <div id='about-text'>
                <div ref={fact1}>
                    <div>
                        <h4>01.</h4>
                        <div>
                            <h2 ref={title1}>education</h2>
                        </div>
                    </div>
                    <p id='text1'>
                        {
                            text1.map((letter, i) => <span key={i} >{letter}</span>)
                        }
                    </p>
                </div>
                <div ref={fact2}>
                    <div>
                        <h4>02.</h4>
                        <div>
                            <h2 ref={title2}>DESIGN THAT MOVES</h2>
                        </div>
                    </div>
                    <p id='text2' className='long-p'>
                        {
                            text2.map((letter, i) => <span key={i} >{letter}</span>)
                        }
                    </p>
                </div>
                <div ref={fact3}>
                    <div>
                        <h4>03.</h4>
                        <div>
                            <h2 ref={title3}>Motivation</h2>
                        </div>
                    </div>
                    <p id='text3'>
                        {
                            text3.map((letter, i) => <span key={i} >{letter}</span>)
                        }
                    </p>
                </div>
                <div ref={fact4}>
                    <div>
                        <h4>04.</h4>
                        <div>
                            <h2 ref={title4}>Skills</h2>
                        </div>
                    </div>
                    <p id='text4'>
                        {
                            text4.map((letter, i) => <span key={i} >{letter}</span>)
                        }
                    </p>
                </div>
                <div ref={fact5}>
                    <div>
                        <h4>05.</h4>
                        <div>
                            <h2 ref={title5}>CREATIONS</h2>
                        </div>
                    </div>
                    <p id='text5'>
                        {
                            text5.map((letter, i) => <span key={i} >{letter}</span>)
                        }
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About