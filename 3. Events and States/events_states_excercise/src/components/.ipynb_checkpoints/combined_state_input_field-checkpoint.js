import { useState } from 'react';

export default function LoginFormCombinedState() {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    }) 
    
    function emailEnteredHandler(event) {
        setUserData({
            email: event.target.value,
            password: userData.password
        })
    };
    
    function passwordEnteredHandler(event) {
        setUserData({
            email: userData.email,
            password: event.target.value
        })
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