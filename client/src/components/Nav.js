import headshot from '../images/rg_headshot.jpg';
import Button from '@mui/material/Button';

function Nav() {

    return (
        <div className='header'>
            <div className='headerName'>
                <img src={headshot} alt='Robert Gorz' id='headshot' />
                <h1>Robert Gorz</h1>
            </div>
            <div className='navButtons'>
                <Button>Home</Button>
                <Button>About Me</Button>
                <Button>Projects</Button>
                <Button>Contact</Button>
            </div>
        </div>
    )
}

export default Nav;