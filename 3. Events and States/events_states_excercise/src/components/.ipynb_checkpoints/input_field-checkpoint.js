import { useState } from 'react';

export default function EmailInput() {
    /*
    let errorMessage= '';
    
    function evaluateEmail (event) {
        console.log('Hello');
        const enteredEmail = event.target.value;
        if (enteredEmail.trim() == '' || !enteredEmail.includes('@')) {
            errorMessage = 'The entered email address is invalid.';
        }
        else {
            errorMessage = '';
        }
    };
    
    return (
        <div>
        <input placeholder="Your Email" type="email" onBlur={evaluateEmail} />
        <p>{errorMessage}</p>
        </div>
    );
    */
    const [errorMessage, setErrorMessage] = useState('');
    
    function evaluateEmail (event) {
    const enteredEmail = event.target.value
    if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
            setErrorMessage('The entered email address is invalid.');
        } else {
            setErrorMessage('');
        }
    };
    
    return (
        <div>
        <input placeholder="Your Email" type="email" onBlur={evaluateEmail} />
        <p>{errorMessage}</p>
        </div>
    );
    
};