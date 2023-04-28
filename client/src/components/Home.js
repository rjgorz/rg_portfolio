import './Home.css';
import Typewriter from 'typewriter-effect';
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';

function Home() {

    return (
        <div id='home'>
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
            <div className='home_options'>
                <div id='project_btn'>
                    <Button className='home_option_button' variant='outlined' startIcon={<EastIcon />}>See my projects</Button>
                </div>
                <div id='learn_btn'>
                    <Button className='home_option_button' variant='outlined' startIcon={<EastIcon />}>Learn more</Button>
                </div>
            </div>
        </div>
    )
}

export default Home;