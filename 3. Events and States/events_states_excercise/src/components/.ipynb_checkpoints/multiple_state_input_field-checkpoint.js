import { useState } from 'react';

export default function LoginForm() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    
    function emailEnteredHandler(event) {
        setEnteredEmail(event.target.value);
    };
    
    function passwordEnteredHandler(event) {
        setEnteredPassword(event.target.value);
    };
    
    return (
        <form>
            <input
                type="email"
                placeholder = "Your email"
                onBlur = {emailEnteredHandler} />
            <input
                type="password"
                placeholder = "Your password"
                onBlur = {passwordEnteredHandler} />
        </form>
    )
}