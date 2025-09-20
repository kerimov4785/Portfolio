import React, { useEffect, useRef } from 'react'
import Panel from '../Components/Panel'
import Header from '../Components/Header'
import About from '../Components/About'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Skills from '../Components/Skills'

function Main() {
    return (
        <>
            <Panel />
            <main>
                <Header />
                <About />
                <Skills />
                <div style={{height:'700px'}} ></div>
            </main>
        </>
    )
}

export default Main