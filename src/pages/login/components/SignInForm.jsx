import React, { useState } from 'react';
import { signInWithEmail, signInWithGoogle } from '../../../services/firebase.services';
import { useAuth } from '../../../core/auth/hooks/useAuth';


const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSignInWithEmail = async (event) => {

        event.preventDefault();
        
       const signInResponse = await signInWithEmail(email, password);

        console.log(signInResponse);
        
        

        login({
             email: signInResponse.user.email,
        })

    };

    const handleSignInWithGoogle = async(event) => {

        event.preventDefault();

        // Llamada a la función para iniciar sesión con Google

        const signInWithGoogleRes= await signInWithGoogle();

        console.log(signInWithGoogleRes);

        login({
            email: signInWithGoogleRes.user.displayName,
       })

    };

    return (
        <div>
            <h3>Iniciar Sesión</h3>
            <form>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div>
                    <button onClick={handleSignInWithEmail}>Sign In</button>
                </div>
                <div>
                    <button onClick={handleSignInWithGoogle}>Sign In with Google</button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
