import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

function Page3() {
    let lineH3 = useRef(null)
    useEffect(() => {
        gsap.to(lineH3.current, {
            x: -lineH3.current.offsetWidth / 3 - 50,
            duration: 10,
            repeat: -1,
            ease: 'linear'
        })
    }, [])
    return (
        <div className='page3' >
            <div>
                <div className='skill-box skill-box5'>
                    <p>With Tailwind, I’ve learned to craft modern and responsive designs faster, using utility classes to bring my ideas to life. It helps me focus on creativity while keeping code clean and efficient.</p>
                    <h1>TAILWIND</h1>
                    <h4>The Tailor of Digital Styles</h4>
                </div>
                <div className="page-num">
                    <h1>3/4</h1>
                    <div></div>
                </div>
            </div>
            <div>
                <h2 className="story story3">
                    Of course, after CSS, using Tailwind felt unusual — especially trying to remember all those class names and apply them in the right place. What I don’t really like is that you can’t use just any media query you want for responsiveness
                </h2>
            </div>
            <div>
                <div ref={lineH3} >
                    <h3><span>Breaking News </span><span className='star' ></span> Ditching Bootstrap, embracing pure CSS!</h3>
                    <h3><span>Breaking News </span><span className='star' ></span> Ditching Bootstrap, embracing pure CSS!</h3>
                    <h3><span>Breaking News </span><span className='star' ></span> Ditching Bootstrap, embracing pure CSS!</h3>
                </div>
            </div>
            <div>
                <h2 className="story story4">
                    Honestly, I’m not the biggest fan of Bootstrap — when it’s overused, websites often look too similar and lack originality. Still, whenever I need to create something quickly, it proves to be a reliable tool that gets the job done.
                </h2>
                <div className="skill-box skill-box6">
                    <h1>{window.innerWidth > 500 ?  'BOOTSTRAP' : 'BSTRAP'}</h1>
                    <p>With Bootstrap, I’ve built strong and responsive layouts, taking advantage of its grid system and components. It allows me to speed up development while maintaining structure and consistency.</p>
                    <h4>The Architect of Ready-Made Designs</h4>
                </div>
            </div>
        </div>
    )
}

export default Page3