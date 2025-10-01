import React, { useEffect, useRef, useState } from 'react'
import Panel from '../Components/Panel'
import Header from '../Components/Header'
import About from '../Components/About'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SkillsBox from '../Components/SkillsBox'
import SkillsTitle from '../Components/SkillsTitle'

function Main() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    window.onresize = function () {
        // if (window.innerWidth > 768) {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        // }
    }
    return (
        <>
            <Panel />
            <main>
                <Header windowSize={windowSize} setWindowSize={setWindowSize} />
                <About />
                <SkillsTitle />
                <SkillsBox />
            </main>
        </>
    )
}

export default Main