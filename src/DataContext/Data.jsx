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
        { name: 'Shapely Demo', url: 'https://shapely-demo-wine.vercel.app/', colorType: 1, instruments: 'html / css / Responsive', rating: 4 },
        { name: 'Oneder', url: 'https://oneder-chi.vercel.app/', colorType: 2, instruments: 'html / css', rating: 3 },
        { name: 'Unwind Hotel', url: 'https://unwind-hotel-two.vercel.app/', colorType: 3, instruments: 'html / css / Responsive', rating: 4 },
        { name: 'Passport', url: 'https://passport-ten-theta.vercel.app/', colorType: 4, instruments: 'html / css', rating: 3 },
        { name: 'Home Agency', url: 'https://home-agency.vercel.app/', colorType: 1, instruments: 'html / css', rating: 3 },
        { name: 'Burger house', url: 'https://burger-sigma-sage.vercel.app/', colorType: 2, instruments: 'html / css', rating: 3 },
        { name: 'Turbo.az', url: 'https://turbo-brown.vercel.app/', colorType: 3, instruments: 'html / css / js', rating: 5 },
        { name: 'Puzzle', url: 'https://puzzle-gamma-sage.vercel.app/', colorType: 4, instruments: 'html / js / jquery', rating: 5 },
        { name: 'Papa Johns', url: 'https://papa-johns-nine.vercel.app/', colorType: 1, instruments: 'html / css / js', rating: 5 },
        { name: 'Park Cinema', url: 'https://cinema-seven-sandy.vercel.app/', colorType: 2, instruments: 'react / tailwind / API', rating: 5 },
        { name: 'Country', url: 'https://country-seven-liard.vercel.app/', colorType: 3, instruments: 'react / tailwind / API', rating: 5 },
        { name: 'SkyScanner', url: 'https://skyscanner-tau.vercel.app/', colorType: 4, instruments: 'react / css / API', rating: 5 },
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