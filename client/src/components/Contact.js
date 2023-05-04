import { useState } from 'react';
import './Contact.css';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    return (
        <div id='contact'>
            <h2>CONTACT ME</h2>
            <div className='horiz_divider'></div>
            <Card className='contact_card'>
                <TextField
                    className='form_field'
                    required
                    id="outlined-required"
                    label="Name"
                />
                <br />
                <TextField
                    className='form_field'
                    required
                    id="outlined-required"
                    label="Email Address"
                />
                <br />
                <TextField
                    className='form_field'
                    required
                    id="outlined-required"
                    label="Message"
                    multiline
                    rows={8}
                />
            </Card>
        </div>
    )
}

export default Contact;