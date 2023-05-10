import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../styles/cards.css';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Message, setMessage] = useState('');
  const [ErrorMessage, setError] = useState('');

  const handleInputChange = (e) => {
    setError('');
    const { target } = e;
    const inputType = target.name;
      if (email || Name || Message === '') {
        setError('Required Fields are Empty');
      }
      if (inputType === 'email') {
        setEmail(e.value);
        if (!validateEmail(email)) {
          setError('Email is invalid');
        }
      } else if (inputType === 'Name') {
        setName(e.value);
      } else if (inputType === 'Message') {
        setMessage(e.value);
      }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
      setError('Form submitted!');
      setEmail('');
      setName('');
      setMessage('');
    }

  return (
    <div id="contact-me">
      <h1>Contact Page</h1>
      <form className="form">
      <h2>Email</h2>
        <input
          id="email"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <h2>Your name</h2>
        <input
          id="name"
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <h2>Your message</h2>
        <input
          id="message"
          value={Message}
          name="Message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {ErrorMessage && (
        <div>
          <p className="error-text">{ErrorMessage}</p>
        </div>
      )}
    </div>
  );
}
