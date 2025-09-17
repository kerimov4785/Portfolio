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

    useEffect(() => {
        const headings = gsap.utils.toArray(titleRef.current.querySelectorAll('.about-title-box h1'))
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                scrub: true,
                markers: true,
                pin: true,
                start: "top top",
                anticipatePin: 1,
                end: `${titleRef.current.offsetHeight + 1100}`,
                fastScrollEnd: true
            }
        })
        tl.from(headings, {
            opacity: 0,
            stagger: 0.2
        })
        tl.to(titleRef.current, {
            height: 440
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
            <div id='about-text'>
                <div>
                    <div>
                        <h4>01.</h4>
                        <h2>education</h2>
                    </div>
                    <p>From High School No.177 in Baku (2012–2023) to a Bachelor’s in Information Technology at the Azerbaijan State University of Economics (2023–present), and after completing Frontend & Backend Development training at Div Academy (2024–2025) — my journey is all about growth, code, and creating the future.</p>
                </div>
                <div>
                    <div>
                        <h4>02.</h4>
                        <h2>DESIGN THAT MOVES</h2>
                    </div>
                    <p className='long-p' >I don’t just build static websites — I create dynamic experiences: animations, smooth transitions, bold visuals. Every project should shout: “Scroll further, it only gets better.</p>
                </div>
                <div>
                    <div>
                        <h4>03.</h4>
                        <h2>Motivation</h2>
                    </div>
                    <p>My motivation comes from myself: I always strive to be better than my past self and challenge myself, while also aiming to inspire others to grow and explore new opportunities.</p>
                </div>
                <div>
                    <div>
                        <h4>04.</h4>
                        <h2>Skills</h2>
                    </div>
                    <p>I work with
                        {
                            skills.map(item => ` ${item.name},`)
                        }
                        and continuously explore new technologies to bring projects to life.</p>
                </div>
                <div>
                    <div>
                        <h4>05.</h4>
                        <h2>CREATIONS</h2>
                    </div>
                    <p>I transform ideas into interactive experiences, blending design, code, and imagination to bring each concept to life. Here are some of the worlds I’ve built so far:
                        {
                            projects.slice(0, 5).map(item => ` ${item.name},`)
                        }</p>
                </div>
            </div>
        </section>
    )
}

export default About