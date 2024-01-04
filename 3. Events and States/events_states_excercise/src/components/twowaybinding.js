import { useState } from 'react';

export default function NewsletterField() {
    const [email, setEmail] = useState('');
    
    function changeEmailHandler(event) {
        setEmail(event.target.value);
    };

    function clearInputHandler() {
        setEmail(''); // reset email input field
    };
    
    return (
    <>
        <input 
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={changeEmailHandler} />
                
        <button onClick={clearInputHandler}>Reset</button>
    </>
    );
}