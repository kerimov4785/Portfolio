import React, { useEffect, useRef } from 'react'
import Panel from '../Components/Panel'
import Header from '../Components/Header'
import About from '../Components/About'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SkillsBox from '../Components/SkillsBox'
import SkillsTitle from '../Components/SkillsTitle'

function Main() {
    return (
        <>
            <Panel />
            <main>
                <Header />
                {/* <About /> */}
                {/* <SkillsTitle /> */}
                <SkillsBox />
            </main>
        </>
    )
}

export default Main