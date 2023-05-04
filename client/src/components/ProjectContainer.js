import { useState, useEffect } from 'react';
import Project from './Project';
import './ProjectContainer.css';

function ProjectContainer() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects')
        .then(r => r.json())
        .then(projData => setProjects(projData))
    }, [])

    const projList = projects.map(project => {
        return (
            <Project project={project} />
        )
    })

    return (
        <div id='projects'>
            <h2>PROJECTS</h2>
            <div className='horiz_divider'></div>
            {projList}
        </div>
    )
}

export default ProjectContainer;