import React from "react";
import '../App.css'
import Success from "./success";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            subscribed: false, //tracks if the form has been submitted
            emailErrorMessage: '', //error message for email validation
        };
    }
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
            emailErrorMessage: '',
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Check for a valid email pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const { email } = this.state;

        if (!email || !emailPattern.test(email)) {
            this.setState({ emailErrorMessage: 'Valid email required' });
        } else {
            window.location.href = '/success';
        }
    }
    render() {
        const { subscribed, email, emailErrorMessage } = this.state;
        // If the form was successfully submitted, show a success message
        if (subscribed) {
            return <Success email={email} />;
        }
        return(
            <>
                <form onSubmit={this.handleSubmit} className="form" role="form">
                    
                    <div className="msg-label">
                    <label htmlFor="email">Email address</label>
                    { emailErrorMessage && <span className="error-message">{emailErrorMessage}</span> }
                    </div>
                    <input type="email" id="email" name="email" placeholder="email@company.com" aria-required="true"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                     required className="email-input"/>
                    <button type="submit" onClick={this.handleSubmit} className="subscribe-btn">Subscribe to monthly newsletter</button>
                </form>
            </>
        );

    }
    
}

export default Form;