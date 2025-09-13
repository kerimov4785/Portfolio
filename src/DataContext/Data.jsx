import React, { createContext } from 'react'
import { useContext } from 'react'

export let DataContext = createContext()
function Data({ children }) {
    let skills = [
        { name: 'Html5', percent: 90 },
        { name: 'Css', percent: 90 },
        { name: 'JavaScript', percent: 85 },
        { name: 'React', percent: 80 },
        { name: 'Tailwind', percent: 70 },
        { name: 'Bootstrap', percent: 70 },
        { name: 'Gsap', percent: 55 },
        { name: 'jQuerry', percent: 60 },
        { name: 'Photoshop', percent: 60 },
        { name: 'Python', percent: 70 },
    ]
    let projects = [
        { name: 'SkyScanner', url: 'https://skyscanner-tau.vercel.app/' },
        { name: 'Park Cinema', url: 'https://cinema-seven-sandy.vercel.app/' },
        { name: 'Papa Johns', url: 'https://papa-johns-nine.vercel.app/' },
        { name: 'Puzzle', url: 'https://puzzle-gamma-sage.vercel.app/' },
        { name: 'Turbo.az', url: 'https://turbo-brown.vercel.app/' },
        { name: 'Burger house', url: 'https://burger-sigma-sage.vercel.app/' },
        { name: 'Home Agency', url: 'https://home-agency.vercel.app/' },
        { name: 'Passport', url: 'https://passport-ten-theta.vercel.app/' },
        { name: 'Unwind Hotel', url: 'https://unwind-hotel-two.vercel.app/' },
        { name: 'Oneder', url: 'https://oneder-chi.vercel.app/' },
        { name: 'Shapely Demo', url: 'https://shapely-demo-wine.vercel.app/' }
    ]
    let obj = {
        skills,
        projects
    }
    return (
        <DataContext.Provider value={obj} >
            {children}
        </DataContext.Provider>
    )
}

export default Data