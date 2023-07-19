import React from 'react'
import { useAuth } from '../../../core/auth/hooks/useAuth';
import { Container } from '@nextui-org/react';

const LoginForm = () => {

  const {login} = useAuth();

  const handleSubmit = async (event) => {

    event.preventDefault();

    //   const handleSubmit = async (event) => {
    //   event.preventDefault();
  
      const form = new FormData(event.target);
      const data = Object.fromEntries(form.entries());

    login({
      email: data.email.toString(),
    });


    
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm