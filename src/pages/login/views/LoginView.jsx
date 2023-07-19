import { useState } from 'react';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import { Helmet } from 'react-helmet-async';


const LoginView = () => {

  const [showSignup, setShowSignup] = useState(false);

  const handleShowSignup = () => {
    setShowSignup(true);
  };

  const handleShowSignin = () => {
    setShowSignup(false);
  };


  return (
    <>
      <div>
      <Helmet>
        <title>Login</title>
        <meta name='description' content='Login'/>
      </Helmet>
        <h1>Bienvenido</h1>
        {showSignup ? <SignUpForm setShowSignup={setShowSignup}/> : <SignInForm />}
        {!showSignup ? (
          <p>¿No tienes una cuenta? <button onClick={handleShowSignup}>Regístrate aquí</button></p>
        ) : (
          <p>¿Ya tienes una cuenta? <button onClick={handleShowSignin}>Inicia Sesión acá</button></p>
        )}
      </div>


    </>

  )
}

export default LoginView