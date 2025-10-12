import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

function ProjectsTitle() {
  let titleRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)


  useEffect(() => {
    const headings = gsap.utils.toArray(document.querySelectorAll('.projects-title h1'))
    if (window.innerWidth > 768) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.projects-title',
          scrub: 1,
          pin: true,
          start: "top top",
          anticipatePin: 1,
          end: `bottom+=1300 bottom `,
          fastScrollEnd: true,
        }
      })
      tl.from(headings, {
        opacity: 0,
        stagger: 0.2
      })
    }
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [])
  return (
    <div ref={titleRef} className='projects-title'>
      <div>
        <h1>STEP</h1>
        <h1>INTO</h1>
      </div>
      <div>
        <h1>MY</h1>
        <h1><span>CREATIONS</span></h1>
      </div>
    </div>
  )
}

export default ProjectsTitle