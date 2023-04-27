import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import TerminalIcon from '@mui/icons-material/Terminal';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

function HamMenu({ hamOpen }) {

    return (
        <div className={hamOpen ? 'menu active' : 'menu'}>
            <ul>
                <li className='menuItem'>
                    <Button className='menuNavBtn' startIcon={<HomeIcon />}>Home</Button>
                </li>
                <li className='menuItem'>
                    <Button className='menuNavBtn' startIcon={<PersonIcon />}>About Me</Button>
                </li>
                <li className='menuItem'>
                    <Button className='menuNavBtn' startIcon={<TerminalIcon />}>Projects</Button>
                </li>
                <li className='menuItem'>
                    <Button className='menuNavBtn' startIcon={<ConnectWithoutContactIcon />}>Contact</Button>
                </li>
            </ul>
        </div>
    )
}

export default HamMenu;