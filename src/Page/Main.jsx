import React, { useEffect, useRef } from 'react'
import Panel from '../Components/Panel'
import Header from '../Components/Header'
import About from '../Components/About'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function Main() {
    return (
        <>
            <Panel />
            <main>
                <Header />
                <About />
                <div style={{height:'500px'}} ></div>
            </main>
        </>
    )
}

export default Main