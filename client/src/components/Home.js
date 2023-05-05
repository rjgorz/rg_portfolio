import { useState } from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import EastIcon from '@mui/icons-material/East';
import NorthIcon from '@mui/icons-material/North';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import medium from '../images/medium.png';

function Home() {
    const [hover, setHover] = useState(false);

    return (
        <div id='home'>
            <div className='social_links'>
                <a href='https://github.com/rjgorz' target='_blank' rel="noreferrer"><GitHubIcon sx={{ color: 'black' }} fontSize="large" /></a>
                <a href='https://linkedin.com/in/rjgorz/' target='_blank' rel="noreferrer"><LinkedInIcon sx={{ color: 'black' }} fontSize="large" /></a>
                <a href='https://medium.com/@rjgorz' target='_blank' rel="noreferrer"><img src={medium} height='26px' width='26px' alt='medium blog' /></a>
            </div>
            <h1>HEY, I'M ROBERT GORZ</h1>
            <Typewriter
                options={{
                    strings: ['Software Engineer', 'Problem Solver', 'Lego Enthusiast', 'Fullstack Developer', 'Project Manager', 'Coder', 'Traveler'],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 40
                }}
            />
            <div id='project_btn'>
                <Button className='home_option_button' variant='contained' startIcon={<EastIcon />} href='#projects'>See my projects</Button>
            </div>
            <IconButton id='backToTop' href='#home'>
                <NorthIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Home;