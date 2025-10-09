import React from 'react'

function Page4() {
    return (
        <div className="page4">
            <div className="page-num">
                <h1>4/4</h1>
                <div></div>
            </div>
            <div>
                <div className='skill-box skill-box7'>
                    <h1>GSAP</h1>
                    <h4>Where Code Meets Cinematic Flow</h4>
                    <p>With GSAP, I’ve explored the art of smooth, cinematic animations that bring websites to life. It’s more than just movement — it’s about crafting an experience where every scroll, hover, or click feels alive and intentional.</p>
                </div>
                <div className='mini-banner'>
                    <div>
                        <h4>UNIQUE EXPERIENCE</h4>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div>
                <div className='mini-banner2' >
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <h4>THIS AIN’T JUST CODE</h4>
                    </div>
                </div>
                <div className="skill-box skill-box8">
                    <h1>GIT&</h1>
                    <h1>GITHUB</h1>
                    <p>Version control is the backbone of collaboration. With Git and GitHub, I track changes, experiment safely, and share my work seamlessly. These tools let me grow as a developer while working the way professionals do — structured, reliable, and connected.</p>
                    <h4>The Backbone of Modern Development</h4>
                </div>
            </div>
            <div>
                <h3>Extra! Extra! {window.innerWidth > 550 ? 'More skills inside' : 'Extra!'}</h3>
                <h3>click to {window.innerWidth > 550 ? 'read the full story.' : 'more skills'}</h3>
            </div>
        </div>
    )
}

export default Page4