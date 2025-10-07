import React from 'react'

function ProjectCard({ getColor, item }) {
    return (
        <a style={getColor(item.colorType)} href={item.url} target='_blank' className='project'>
            <h2>{item.name}</h2>
        </a>
    )
}

export default ProjectCard