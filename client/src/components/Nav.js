import { useState } from 'react';
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

    return (
        <>
            <div className='header'>
                <div className='headerName'>
                    <img src={headshot} alt='Robert Gorz' id='headshot' />
                    <h1 id='name'>ROBERT GORZ</h1>
                </div>
                <div className='navButtons'>
                    <Button className='navBtn' startIcon={<HomeIcon />}>Home</Button>
                    <Button className='navBtn' startIcon={<PersonIcon />}>About Me</Button>
                    <Button className='navBtn' startIcon={<TerminalIcon />}>Projects</Button>
                    <Button className='navBtn' startIcon={<ConnectWithoutContactIcon />}>Contact</Button>
                </div>
                <div className='hamMenu'>
                    <div className='hamBtn'>
                        <IconButton area-label='close' onClick={() => setHamOpen(hamOpen ? false : true)}>
                            {hamOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </div>
                </div>
            </div>
            <HamMenu hamOpen={hamOpen} setHamOpen={setHamOpen} />
        </>
    )
}

export default Nav;