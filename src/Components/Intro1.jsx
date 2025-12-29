import gsap from "gsap"
import { useEffect, useLayoutEffect } from "react"
import { useRef } from "react"

// hello

// are
// you
// ready?

// this is not
// just a portfolio

// it’s a
// unique experience

// welcome to my
// mind → portfolio

// giddy up


function Intro({ setAnimEnd }) {
    let ref1 = useRef(null)
    let ref2 = useRef(null)
    let ref3 = useRef(null)
    let ref4 = useRef(null)
    let box3 = useRef(null)
    let bg = useRef(null)

    useLayoutEffect(() => {
        let tl = gsap.timeline()
        const words = gsap.utils.toArray("#anim-box-1 h3");
        const words2 = gsap.utils.toArray("#anim-box-2 .h5-1");
        const words3 = gsap.utils.toArray("#anim-box-2 .h5-2");
        const words4 = gsap.utils.toArray("#anim-box-3 h1");
        const words5 = gsap.utils.toArray("#anim-box-3 .light");

        tl.from(ref1.current, { x: '-400px', duration: .6, ease: 'power3.out', opacity: 0 }, 0)
        tl.to(bg.current, { backgroundColor: 'var(--white)', duration: 0 },)
        tl.to(ref1.current, { color: 'var(--darkbrown)', duration: 0 }, '<')
        tl.to(bg.current, { backgroundColor: 'var(--orange)', duration: 0 }, '+=0.2')
        tl.to(bg.current, { backgroundColor: 'var(--darkbrown)', duration: 0 }, '+=0.2')
        tl.to(ref1.current, { color: 'var(--orange)', duration: 0, }, '<')
        tl.to(ref1.current, { x: 300, duration: .6, ease: 'power3.in', }, '+=.1')
        tl.to(ref1.current, { display: 'none', duration: 0 }, '+=0')
        tl.to(bg.current, { backgroundColor: 'var(--white)', duration: 0 }, '<')
        tl.from(ref2.current, { x: -400, opacity: 0, ease: 'power3.out', duration: .4 })
        tl.to(ref2.current, { fontSize: 80, duration: 0, color: "var(--white)" })
        tl.to(bg.current, { duration: 0, backgroundColor: "var(--orange)" }, '<')
        tl.to(ref2.current, { x: -100, duration: 0.7, ease: "power3.out" })
        tl.from(words, { x: -50, duration: 0.7, opacity: 0, ease: "power3.out", stagger: .2 }, '<')
        tl.to(bg.current, { duration: 0, backgroundColor: "var(--darkbrown)" },)
        tl.to(ref2.current, { duration: 0, color: 'var(--orange)' }, '<')
        tl.to(words, { duration: 0, color: 'var(--white)', }, '<')
        tl.to(bg.current, { duration: 0, backgroundColor: "var(--orange)" }, '+=.2')
        tl.to(ref2.current, { duration: 0, color: 'var(--white)' }, '<')
        tl.to(words, { duration: 0, color: 'var(--darkbrown)', }, '<')
        tl.to(bg.current, { duration: 0, backgroundColor: "var(--darkbrown)" }, '+=.2')
        tl.to(ref2.current, { duration: 0, display: 'none' }, '<')
        tl.to(words, { duration: 0, display: 'none' }, '<')
        tl.to(ref3.current, { x: -200, opacity: 1, })
        tl.from(words2, { x: -50, opacity: 0, stagger: .1, }, "<")
        tl.from(words3, { opacity: 0, }, "<")
        tl.to(ref4.current, { y: '-70%', duration: 2, ease: "power4.out" }, "<+=1")
        tl.to(bg.current, { backgroundColor: 'var(--white)', duration: 0 }, '<+=.3')
        tl.to([words3, words2], { color: 'var(--darkbrown)', }, '<')
        tl.to(bg.current, { backgroundColor: 'var(--darkbrown)', duration: 0 })
        tl.from(words4, { y: '-110%', stagger: 0.08, duration: .7, ease: "power4.out" },)
        tl.to(words5, { color: "var(--white)", stagger: .2 })
        tl.to(words4, { y: '100%', stagger: 0.05, duration: .3, ease: "power4.in",
            onComplete: () => {
                setAnimEnd(true)
            }
        })
        tl.to([bg.current], { backgroundColor: 'var(--white)', duration: 0
        }, )
        tl.to(words3, { color: 'var(--white)', duration: 0
        }, )
        tl.to(bg.current, { display: 'none', duration: 0
        }, '+=.5')
    }, [])


    return (
        <div ref={bg} className="intro-anim">
            <h3 ref={ref1}>HELLO</h3>
            <h4 ref={ref2}>ARE YOU</h4>
            <div id="anim-box-1" >
                <h3>READY?</h3>
                <h3>READY?</h3>
                <h3>READY?</h3>
            </div>
            <div id="anim-box-2">
                <div ref={ref4}>
                    <h2 ref={ref3}>THIS IS NOT</h2>
                    {Array.from({ length: 8 }).map((item,i) =>
                        <h5 key={i} className="h5-1" >JUST A</h5>
                    )}
                    {Array.from({ length: 20 }).map((item,i) =>
                        <h5 key={i} className="h5-2" >PORTFOLIO</h5>
                    )}
                </div>
            </div>
            <div ref={box3} id="anim-box-3">
                <div>
                    <h1>IT'S</h1>
                    <h1>IT'S</h1>
                    <h1 className="light">IT'S A</h1>
                    <h1>IT'S</h1>
                    <h1>IT'S</h1>
                    <h1>IT'S</h1>
                </div>
                <div>
                    <h1>UNIQUE</h1>
                    <h1 className="light">UNIQUE</h1>
                    <h1>UNIQUE</h1>
                </div>
                <div>
                    <h1>EXPERIENCE</h1>
                    <h1 className="light">EXPERIENCE</h1>
                    <h1>EXPERIENCE</h1>
                </div>
            </div>
        </div>
    )
}

export default Intro
