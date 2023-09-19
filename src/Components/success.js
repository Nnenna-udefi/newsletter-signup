import React from "react";
import iconSuccess from '../images/icon-success.svg'
import '../App.css';



const Success = ({ email }) => {
    const handleDismiss = () => {
        // navigate back to the main page
        window.location.href = '/';
    }
    return (
        <>
        <div className="success-msg">
            <img src={iconSuccess} alt="success-icon" />
            <h1> Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <span className="email-msg">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
            <button className="dismiss-btn" onClick={handleDismiss}>Dismiss message</button>
        </div>
        </>
    );
}

export default Success