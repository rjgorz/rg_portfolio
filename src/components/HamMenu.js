import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import TerminalIcon from '@mui/icons-material/Terminal';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Divider from '@mui/material/Divider';

function HamMenu({ hamOpen, setHamOpen }) {

    return (
        <div className={hamOpen ? 'menu active' : 'menu'}>
            <ul>
                <Divider role='presentation' />
                <li className='menuItem'>
                    <Button className='menuNavBtn' href='#home' onClick={() => setHamOpen(false)} startIcon={<HomeIcon />}>Home</Button>
                </li>
                <Divider role='presentation' />
                <li className='menuItem'>
                    <Button className='menuNavBtn' href='#about' onClick={() => setHamOpen(false)} startIcon={<PersonIcon />}>About</Button>
                </li>
                <Divider role='presentation' />
                <li className='menuItem'>
                    <Button className='menuNavBtn' href='#projects' onClick={() => setHamOpen(false)} startIcon={<TerminalIcon />}>Projects</Button>
                </li>
                <Divider role='presentation' />
                <li className='menuItem'>
                    <Button className='menuNavBtn' href='#contact' onClick={() => setHamOpen(false)} startIcon={<ConnectWithoutContactIcon />}>Contact</Button>
                </li>
                <Divider role='presentation' />
            </ul>
        </div>
    )
}

export default HamMenu;