import React from 'react'
import Panel from '../Components/Panel'
import Header from '../Components/Header'
import About from '../Components/About'

function Main() {
    
    return (
        <>
            <Panel />
            <main>
                <Header />
                <About />
                {/* <div style={{height:'600px'}} ></div> */}
            </main>
        </>
    )
}

export default Main