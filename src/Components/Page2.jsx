import React from 'react'

function Page2() {
    return (
        <div className='page2' >
            <div>
                <div className="page-num">
                    <h1>2/4</h1>
                    <div></div>
                </div>
                <h2 className='story' >
                    When I first started learning React after JavaScript, I was hesitant. Seeing other projects with countless files felt overwhelming, and I doubted I could manage it. Over time, I discovered the true priorities of React.
                </h2>
            </div>
            <div className='mobile-banner'>
                <h4>
                    <span>JavaScript</span> is not only about visuals — it’s about <span>communication</span> between users and data. Through <span>fetch</span> and <span>Axios</span>, I connect front-end interfaces with <span>external APIs</span>, transforming static layouts into <span>data-driven experiences.</span>
                </h4>
            </div>
            <div className='content' >
                <div className="page2-column1">
                    <div className="banner">
                        <h4>
                            <span>JavaScript</span> is not only about visuals — it’s about <span>communication</span> between users and data. Through <span>fetch</span> and <span>Axios</span>, I connect front-end interfaces with <span>external APIs</span>, transforming static layouts into <span>data-driven experiences.</span>
                        </h4>
                    </div>
                </div>
                <div className="page2-column2">
                    <div className='skill-box skill-box3' >
                        <p>With JavaScript, I’ve learned to bring websites to life — from handling user interactions to creating dynamic content. I keep exploring new ways to make web experiences more engaging.</p>
                        <h1>JAVA</h1>
                        <h1>SCRIPT</h1>
                        <h4>The Web’s Secret Engine</h4>
                    </div>
                    <div className='skill-box skill-box4'>
                        <h1>REACT</h1>
                        <p>"With React, I’ve learned to build modern, component-based interfaces {window.innerWidth > 768 ? `— from reusable UI blocks to interactive applications` : ''}. It’s the library that helps me structure code efficiently, and I keep discovering new techniques{window.innerWidth > 768 ? `to create seamless user experiences` : ''}."</p>
                        <h4>The Web’s Lego Builder</h4>
                    </div>
                </div>
                <h2 className='story'>
                    When I first started learning React after JavaScript, I was hesitant. Seeing other projects with countless files felt overwhelming, and I doubted I could manage it. Over time, I discovered the true priorities of React, and now I write cleaner, more efficient code. I’m proud to use React in my projects and enjoy building with it every day.
                </h2>
            </div>
        </div>
    )
}

export default Page2