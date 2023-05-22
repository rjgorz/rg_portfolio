import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import medium from '../images/medium.png';

function Footer() {

    return (
        <>
            <div id='footer'>
                <div id='footer_conclusion'>
                    <h4>Robert Gorz</h4>
                </div>
                <div id='footer_socials'>
                    <h4>Socials</h4>
                    <br />
                    <div id='footer_social_links'>
                        <a href='https://github.com/rjgorz' target='_blank' rel="noreferrer"><GitHubIcon sx={{ color: 'black' }} fontSize="large" /></a>
                        <a href='https://linkedin.com/in/rjgorz/' target='_blank' rel="noreferrer"><LinkedInIcon sx={{ color: 'black' }} fontSize="large" /></a>
                        <a href='https://medium.com/@rjgorz' target='_blank' rel="noreferrer"><img src={medium} height='26px' width='26px' alt='medium blog' /></a>
                    </div>
                </div>
            </div>
            <div>
                <p style={{ backgroundColor: 'rgb(211, 211, 211)', textAlign: 'center', padding: '0.5rem' }}><em>© Copyright 2023. Made by Robert Gorz.</em></p>
            </div>
        </>
    )
}

export default Footer;