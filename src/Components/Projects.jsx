import React, { useContext } from 'react'
import { DataContext } from '../DataContext/Data'
import ProjectCard from './ProjectCard'

function Projects() {
    let { projects } = useContext(DataContext)
    return (
        <section className='projects' >
            {
                projects.map((item, i) =>
                    <ProjectCard  key={i}  item={item} />
                )
            }
        </section>
    )
}

export default Projects