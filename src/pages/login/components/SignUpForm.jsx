import React from 'react'
import { useState } from 'react';
import { signUpWithEmail } from '../../../services/firebase.services';
import { Navigate } from 'react-router-dom'; 

const SignUpForm = ({setShowSignup}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSignUp = async (event) => {

        event.preventDefault();

        const signUpresponse= await signUpWithEmail(email, password);

        console.log(signUpresponse)

        setShowSignup(false);

    };

    return (
        <div>
            <h3>Registrarse</h3>
            <form>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div>
                    <button onClick={handleSignUp}>Registrarse</button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
