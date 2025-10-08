import React, { useEffect, useRef, useState } from 'react'
import Panel from '../Components/Panel'
import Header from '../Components/Header'
import About from '../Components/About'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SkillsBox from '../Components/SkillsBox'
import SkillsTitle from '../Components/SkillsTitle'
import Projects from '../Components/Projects'
import ProjectsTitle from '../Components/ProjectsTitle'
import Cursor from '../Components/Cursor'

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
            {/* <Cursor /> */}
            <Panel />
            <main>
                <Header windowSize={windowSize} setWindowSize={setWindowSize} />
                <About />
                <SkillsTitle />
                <SkillsBox />
                <ProjectsTitle />
                <Projects />
                <div style={{ height: "200px" }} ></div>
            </main>
        </>
    )
}

export default Main