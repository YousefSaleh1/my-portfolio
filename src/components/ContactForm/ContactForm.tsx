import React, { useState } from 'react';
import './ContactForm.css';
const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form data:', { name, email, subject, message });

  };

  return (
    <div className='contact-form'>
      <h1>Contact</h1>

      <form onSubmit={handleSubmit}>

        <input type="text" name="name" id="Name" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />

        <input type="email" name="email" id="Email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} required />

        <input type="text" name="subject" id="Subject" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} required />

        <textarea placeholder="Message" rows={5} value={message} onChange={e => setMessage(e.target.value)} required></textarea>

        <button type="submit" className=" rounded-3 w-50 mx-auto d-block">Send Message</button>

      </form>

    </div>
  );
};

export default ContactForm;