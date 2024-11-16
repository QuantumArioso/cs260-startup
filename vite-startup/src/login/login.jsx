import React from 'react';
import '../app.css';
import { useNavigate } from 'react-router-dom';

export function Login( userName ) {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Perform any login logic here (e.g., authentication)
        navigate('/meetings'); // Navigate to the meetings route
    };

  return (
    <main>
        <section>
            <h2>Login</h2>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Username" required></input>
                <input type="password" placeholder="Password" required></input>
                <button type="submit">Login</button>
            </form>
            <a href="#" className="create-account">Create a new account</a>
        </section>
    </main>
  );
}