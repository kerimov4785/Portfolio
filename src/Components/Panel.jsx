import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

function Panel() {
  gsap.registerPlugin(ScrollTrigger)
  let panelRef = useRef(null)
  let text = 'Send me a message, write me a line, drop a note, or ping me on socials. I check every message. Your idea, your question, your project — it all matters. Don’t hesitate, just reach out. Whether it’s collaboration, feedback, or a simple hello — I’m here'.split(' ')
  useEffect(() => {
    const headings = gsap.utils.toArray(document.querySelectorAll('.panel span'))
    const headings2 = gsap.utils.toArray(document.querySelectorAll('.panel a'))
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: panelRef.current,
        start: "top top",
        end: '+10000',
        scrub: true,
      }
    })

    tl.to(headings, {
      color: '#E82E06',
      stagger: 0.3
    })
    tl.to(headings2, {
      color: '#E82E06',
      stagger: 0.3
    })
  }, [])
  return (
    <div ref={panelRef} className='panel' >
      <p>
        {
          text.map((item, i) => <span key={i} >{item} </span>)
        }
      </p>
      <div >
        <a className='contact' href="https://mail.google.com/mail/?view=cm&fs=1&to=nihatkerimov4785@gmail.com" target='_blank'>email</a>
        <a className='contact' href="https://github.com/kerimov4785" target='_blank' >github</a>
        <a className='contact' href="https://www.instagram.com/kerrimovn/" target='_blank'>instagram</a>
        <a className='contact' href="https://wa.me/994503303445" target='_blank'  >whatsapp</a>
        <a className='contact' href="https://t.me/Kerimov4785" target='_blank'>telegram</a>
        <a className='contact' href="https://www.linkedin.com/in/%D0%BD%D0%B8%D1%85%D0%B0%D1%82-%D0%BA%D0%B5%D1%80%D0%B8%D0%BC%D0%BE%D0%B2-32b60333a/" target='_blank'>LinkedIn</a>
      </div>
    </div>
  )
}

export default Panel