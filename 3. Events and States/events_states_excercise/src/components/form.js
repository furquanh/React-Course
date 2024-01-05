import { useState } from 'react';

export default function NewsletterSignup() {
    
    const [email, setEmail] = useState('')
    const [agreed, setAgreed] = useState(false);
    const [confirmation, setConfirmation] = useState('');
    const [showForm, setShowForm] = useState(true);
    
    function updateEmailHandler(event) {
        setEmail(event.target.value);
    };
    
    function updateAgreementHandler(event) {
        setAgreed(event.target.checked); // checked is a default JS boolean property
    };
    
    function signupHandler(event) {
        event.preventDefault(); // prevent browser default of sending a Http request
        const userData = {userEmail: email, userAgrees: agreed};
        setConfirmation(`Thank you! We will send you weekly newsletters at ${email}`);
        setShowForm(!showForm);
    };
    
    return (
        <>
        {showForm &&  <form onSubmit={signupHandler}>
            <div>
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" onChange={updateEmailHandler} />
            </div>
            <div>
                  <input type="checkbox" id="agree" onChange={updateAgreementHandler} />  
                  <label htmlFor="agree">Agree to terms and conditions</label>
            </div>
        </form>}
        <p>{confirmation}</p>
        </>
    );
};