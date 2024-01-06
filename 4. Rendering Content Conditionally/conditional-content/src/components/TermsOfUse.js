import { useState } from 'react';

export default function TermsOfUse() {
    const [showTerms, setShowTerms] = useState(false);
    
    function showTermsSummaryHandler() {
        setShowTerms(true)
    }
    
    return (<section>
                <button onClick={showTermsSummaryHandler}>Show Terms of Use Summary</button>
                {showTerms ? <p>By continuing, you accept that we will not indemnify you for any damage or harm caused by our products.</p> : null}
            </section>);
}