import React, { useRef, useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { DataContext } from '../DataContext/Data'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Page1 from './Page1'

function SkillsBox() {
    gsap.registerPlugin(ScrollTrigger)
    let skillsRef = useRef(null)
    let panelsRef = useRef(null)
    return (
        <section ref={skillsRef} className="all-skills">
            <Page1 />
        </section>
    )
}

export default SkillsBox