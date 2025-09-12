import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import { useEffect } from 'react'

function About() {
    gsap.registerPlugin(ScrollTrigger)
    let aboutRef = useRef(null)
    let titleRef = useRef(null)
    useEffect(() => {
        const headings = gsap.utils.toArray(titleRef.current.querySelectorAll('h1'))
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                scrub: true,
                markers: true,
                pin: true,
                start: "top top",
                end: `${titleRef.current.offsetHeight + 1300}`
            }
        })
        tl.from(headings, {
            opacity: 0,
            stagger: 0.2
        })
            .to(titleRef.current, {
                height: 430
        })
    })
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
        </section>
    )
}

export default About