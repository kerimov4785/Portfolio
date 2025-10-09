import gsap from 'gsap'
import React, { useEffect, useReducer, useRef, useState } from 'react'

function ProjectCard({ item }) {
    let [color1, setColor1] = useState()
    let [color2, setColor2] = useState()
    useEffect(() => {
        if (item.colorType == 1) {
            setColor1('#E82E06')
            setColor2("#140B0B")
        }
        if (item.colorType == 2) {
            setColor1('#FFEDCC')
            setColor2("#1E1E1E")
        }
        if (item.colorType == 3) {
            setColor1('#140B0B')
            setColor2("#FFEDCC")
        }
        if (item.colorType == 4) {
            setColor1('#FFEDCC')
            setColor2("#E82E06")
        }
    }, [])
    let titleRef = useRef(null)
    let ratingRef = useRef(null)
    let detRef = useRef(null)
    function mouseEnter() {
        if (window.innerWidth > 768) {
            gsap.killTweensOf([titleRef.current, ratingRef.current, detRef.current])
            gsap.to(titleRef.current, {
                left: 20,
                x: 0,
                duration: 2,
                ease: 'power4.out'
            })
            gsap.to(ratingRef.current, {
                right: 10,
                x: 0,
                duration: 1,
                ease: 'power4.out'
            })
            gsap.to(detRef.current, {
                right: 10,
                x: 0,
                duration: 1,
                ease: 'power4.out'
            })
        }
    }
    function mouseLeave() {
        if (window.innerWidth > 768) {
            gsap.killTweensOf([titleRef.current, ratingRef.current, detRef.current])
            gsap.to(titleRef.current, {
                left: '50%',
                x: '-50%',
                duration: 2,
                ease: 'power4.out'
            })
            gsap.to(ratingRef.current, {
                right: 0,
                x: '100%',
                duration: 2,
                ease: 'power4.out'
            })
            gsap.to(detRef.current, {
                right: 0,
                x: '102%',
                duration: 2,
                ease: 'power4.out'
            })
        }
    }
    return (
        <a style={{ color: color1, backgroundColor: color2 }} onMouseLeave={() => mouseLeave()} onMouseEnter={() => mouseEnter()} href={item.url} target='_blank' className='project'>
            <h2 ref={titleRef}>{item.name}</h2>
            <div ref={ratingRef} className='rating'>
                {
                    Array.from({ length: item.rating }).map((_, index) =>
                        (<div style={{ backgroundColor: color1 }} key={index}>a</div>)
                    )
                }
            </div>
            <h5 ref={detRef} className='details' style={{ backgroundColor: color1, color: color2 }} >{item.instruments}</h5>
        </a>
    )
}

export default ProjectCard