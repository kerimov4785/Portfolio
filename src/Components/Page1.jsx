import React from 'react'

function Page1() {
    return (
        <div className="page1">
            <div className='page1-column1' >
                <div>
                    <div className='skill-box skill-box1'>
                        <h1>HTML5</h1>
                        <h4>Turning code into structure</h4>
                        <p>"I started my web journey with HTML, and now I use it to craft the solid base for interactive and creative websites."</p>
                    </div>
                </div>
                <div>
                    <div className='skill-box skill-box2'>
                        <p>“With CSS, ’ve learned to shape the look and feel of websites — from colors and layouts to smooth animations. It’s the tool that lets me bring structure to life {window.innerWidth > 768 ? ', and I keep exploring new ways to make designs more dynamic and responsive.”' : ''}</p>
                        <h1>CSS</h1>
                        <h4>The Fashion Designer of the Web</h4>
                    </div>
                </div>
                <div className="mobile-banner">
                    <h4>
                        HTML (HyperText Markup Language) is the backbone of the <span>web — the frontier</span> where every site begins. It builds the structure: <span>headings, paragraphs, images, and links.</span>
                    </h4>
                </div>
                <h2 className='story' >
                    At first, I thought CSS was just a simple tool. But as I kept learning, I discovered it’s one of the most powerful parts of web development — the design that catches the user’s eye.
                </h2>
            </div>
            <div className="page1-column2">
                <div className="page-num">
                    <h1>1/4</h1>
                    <div></div>
                </div>
                <div className="banner">
                    <h4>
                        HTML (HyperText Markup Language) is the backbone of the <span>web — the frontier</span> where every site begins. It builds the structure: <span>headings, paragraphs, images, and links.</span>
                    </h4>
                </div>
            </div>

        </div>
    )
}

export default Page1