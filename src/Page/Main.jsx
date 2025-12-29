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
    // window.onresize = function () {
    //     // if (window.innerWidth > 768) {
    //     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    //     // }
    // }
    useEffect(() => {
        document.fonts.ready.then(() => {
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 100);
        });
    }, []);

    return (
        <>
            <Cursor />
            <Panel />
            <main>
                <Header windowSize={windowSize} />
                <About />
                <SkillsTitle />
                <SkillsBox />
                <ProjectsTitle />
                <Projects />
            </main>
        </>
    )
}

export default Main