import Button from '@mui/material/Button';
import './About.css';
import resume from '../files/rg_resume.pdf';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import python from '../images/python.png';
import flask from '../images/flask.png';
import react from '../images/react.png';
import sql from '../images/sql.png';
import java from '../images/java.png'
import cplusplus from '../images/c++.png';


function About() {

    return (
        <div id='about'>
            <h2>ABOUT</h2>
            <div className='horiz_divider'></div>
            <div className='about_container'>
                <div id='about_me'>
                    <h3>Get to Know Me!</h3>
                    <br /><br />
                    <p>
                        I am a <strong>Software Engineer</strong> with a passion for building
                        and designing responsive web applications. Well-versed in front end
                        and back end technologies, I am capable to perform as a <strong>Fullstack Developer</strong>.
                        Take a look at my recent <a href='#projects'>projects</a>!
                    </p>
                    <br />
                    <p>
                        With 5+ years of experience in <strong>Engineering</strong> and
                        <strong> Project Management</strong>, I bring a unique perspective to any team.
                    </p>
                    <br />
                    <p>
                        I am open to job opportunities where I can contribute, learn and grow as a valuable
                        team member. If you are looking for a software engineer with a diverse background and
                        a passion for delivering innovative solutions, I would love to <a href='#contact'>connect</a>!
                    </p>
                    <br />
                    <div>
                        <a href={resume} target='_blank' rel="noreferrer">
                            <Button id='modal_btn' variant='contained'>View Resume</Button>
                        </a>
                    </div>
                </div>
                <div id='spacer'>
                    <div className='about_vert_divider'></div>
                </div>
                <div id='skills'>
                    <h3>Technical Skills</h3>
                    <br /><br />
                    <div id='skill_boxes'>
                        <div className='skill_box'>
                            <img src={react} alt='React.js' className='skill_img' />
                        </div>
                        <div className='skill_box'>
                            <img src={javascript} alt='JavaScript' className='skill_img' />
                        </div>
                        <div className='skill_box'>
                            <img src={html} alt='HTML' className='skill_img' />
                        </div>
                        <div className='skill_box'>
                            <img src={css} alt='CSS' className='skill_img' />
                        </div>
                        <div className='skill_box'>
                            <img src={python} alt='Python' className='skill_img' />
                        </div>
                        <div className='skill_box'>
                            <img src={flask} alt='Flask' className='skill_img' />
                        </div>
                        <div className='skill_box'>
                            <img src={sql} alt='SQL' className='skill_img' />
                        </div>
                        <div className='skill_box'>
                            <img src={cplusplus} alt='C++' className='skill_img' />
                        </div>
                        <div className='skill_box'
                        ><img src={java} alt='Java' className='skill_img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;