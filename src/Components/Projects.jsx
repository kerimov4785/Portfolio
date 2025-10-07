import React, { useContext } from 'react'
import { DataContext } from '../DataContext/Data'
import ProjectCard from './ProjectCard'

function Projects() {
    let { projects } = useContext(DataContext)
    function getColor(id) {
        if (id == 1) {
            return { color: '#E82E06', backgroundColor: "#140B0B" }
        }
        if (id == 2) {
            return { color: '#FFEDCC', backgroundColor: "#1E1E1E" }
        }
        if (id == 3) {
            return { color: '#140B0B', backgroundColor: "#FFEDCC" }
        }
        if (id == 4) {
            return { color: '#FFEDCC', backgroundColor: "#E82E06" }
        }
    }

    return (
        <section className='projects' >
            {
                projects.map((item, i) =>
                    <ProjectCard  key={i} getColor={getColor} item={item} />
                )
            }
        </section>
    )
}

export default Projects