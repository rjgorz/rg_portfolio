import { useState } from 'react';
import { motion, useScroll, useSpring } from "framer-motion"
import './Nav.css';
import HamMenu from './HamMenu';
import headshot from '../images/rg_headshot.jpg';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import TerminalIcon from '@mui/icons-material/Terminal';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Nav() {
    const [hamOpen, setHamOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <div className='header'>
                <div className='headerName'>
                    <img src={headshot} alt='Robert Gorz' id='headshot' />
                    <h1 id='name'>ROBERT GORZ</h1>
                </div>
                <div className='navButtons'>
                    <Button className='navBtn' href='#home' startIcon={<HomeIcon />}>Home</Button>
                    <Button className='navBtn' href='#about' startIcon={<PersonIcon />}>About</Button>
                    <Button className='navBtn' href='#projects' startIcon={<TerminalIcon />}>Projects</Button>
                    <Button className='navBtn' href='#contact' startIcon={<ConnectWithoutContactIcon />}>Contact</Button>
                </div>
                <div className='hamMenu'>
                    <div className='hamBtn'>
                        <IconButton area-label='close' onClick={() => setHamOpen(hamOpen ? false : true)}>
                            {hamOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </div>
                </div>
                <motion.div className='progress_bar' style={{ scaleX }} />
            </div>
            <HamMenu hamOpen={hamOpen} setHamOpen={setHamOpen} />
        </>
    )
}

export default Nav;