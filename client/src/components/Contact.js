import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    function submit() {
        if (name && email && message) {
            const serviceId = 'service_29ndi4f';
            const templateId = 'template_nnar97e';
            const publicKey = '34uSbdzefZ2EmbDlr';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, publicKey)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
            setTimeout(() => setEmailSent(false), 5000);
        } else {
            alert('Please fill in all fields.');
        }
    }

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    return (
        <div id='contact'>
            <h2>CONTACT</h2>
            <div className='horiz_divider'></div>
            <h4>Feel free to send me a message using the form below and I will get back to you as soon as I can!</h4>
            <Card className='contact_card' variant="outlined">
                <TextField
                    className='form_field'
                    required
                    id="outlined-required"
                    label="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <br />
                <TextField
                    className='form_field'
                    required
                    id="outlined-required"
                    label="Email Address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <br />
                <TextField
                    className='form_field'
                    required
                    id="outlined-required"
                    label="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    multiline
                    rows={8}
                />
                <br />
                <Button /*onClick={submit}*/ variant='contained' >Send Message</Button>
                <br />
                <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
            </Card>
        </div>
    )
}

export default Contact;




// templateID : template_nnar97e