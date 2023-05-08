import './ProjectContainer.css';
import { motion } from "framer-motion"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import wander from '../images/Wander1.jpg';
import beatbazaar from '../images/BB1.jpg';
import ufc from '../images/UFC1.jpg';
import wc from '../images/WhatsCookin1.jpg';

function ProjectContainer() {
    const projects = [
        {
            id: 1,
            title: 'Wander',
            description: 'Wander is a simple but elegant travel journaling application featuring an interactive map of the United States, state specific journal entry system, and photo gallery.',
            tech: 'JavaScript, React, Python, Flask, CSS',
            imagePath: wander,
            githubLink: 'https://github.com/rjgorz/wander'
        },
        {
            id: 2,
            title: 'Beat Bazaar',
            description: 'Create and modify customized playlists from a vast collection of songs with Beat Bazaar, or add new songs.',
            tech: 'JavaScript, React, Python, Flask, CSS',
            imagePath: beatbazaar,
            githubLink: 'https://github.com/rjgorz/beat-bazaar'
        },
        {
            id: 3,
            title: 'UFC Social',
            description: 'UFC Social is a retro style social app for UFC lovers. Browse fighter details, watch highlights, vote on polls and leave comments.',
            tech: 'JavaScript, React, CSS',
            imagePath: ufc,
            githubLink: 'https://github.com/rjgorz/UFC-social'
        },
        {
            id: 4,
            title: "What's Cookin'",
            description: "Take the decision making process out of making meals, let What's Cookin' bring the recipe ideas to you.",
            tech: 'JavaScript, HTML, CSS',
            imagePath: wc,
            githubLink: 'https://github.com/rjgorz/whats-cookin'
        }
    ]

    const projList = projects.map(project => {
        return (
            <motion.Card
                key={project.id}
                className='project_card'
                variant="outlined"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <CardMedia
                    sx={{ height: 500 }}
                    image={project.imagePath}
                    title={project.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <strong>{project.title}</strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {project.description}
                    </Typography>
                    <br />
                    <Typography variant="body2" color="text.secondary">
                        Featured Tech: <em>{project.tech}</em>
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href={project.githubLink} target='_blank' rel="noreferrer"><GitHubIcon sx={{ color: 'black' }} fontSize="small" />GitHub</a>
                </CardActions>
            </motion.Card>
        )
    })

    return (
        <div id='projects'>
            <h2>PROJECTS</h2>
            <div className='horiz_divider'></div>
            <div id='project_container'>
                {projList}
            </div>
        </div>
    )
}

export default ProjectContainer;