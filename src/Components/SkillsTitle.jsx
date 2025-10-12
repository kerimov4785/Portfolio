import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../DataContext/Data'
import SkillsBox from './SkillsBox'

function SkillsTitle() {
    gsap.registerPlugin(ScrollTrigger)
    let title2Ref = useRef(null)

    useEffect(() => {
        const headings = gsap.utils.toArray(document.querySelectorAll('.skills-title h1'))
        let tl
        if (window.innerWidth > 768) {
            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: title2Ref.current,
                    scrub: 1,
                    pin: true,
                    start: "top top",
                    anticipatePin: 1,
                    end: `bottom+=1300 bottom`,
                    fastScrollEnd: true,
                }
            })
            tl.from(headings, {
                opacity: 0,
                stagger: 0.2
            })
        }

        return () => {
        if (tl) tl.kill(); 
    }
    }, [])
    return (
        <div ref={title2Ref} className="skills-title">
            <div>
                <div><h1>THEY</h1></div>
                <div><h1>CALL</h1></div>
                <div><h1>ME</h1></div>
            </div>
            <div>
                <div><h1>A</h1></div>
                <div><h1 style={{ color: '#FFEDCC' }}>SKILLS</h1></div>
                <div><h1>MASTER</h1></div>
            </div>
        </div>
    )
}

export default SkillsTitle