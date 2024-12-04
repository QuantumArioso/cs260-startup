import React from 'react';
import '../app.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Perform any login logic here (e.g., authentication)
        navigate('/meetings'); // Navigate to the meetings route
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        const usernameElement = document.getElementById('username');
        const passwordElement = document.getElementById('password');

        if (usernameElement && passwordElement) {
        setUsername(usernameElement.value);
        setPassword(passwordElement.value);
        console.log(usernameElement.value);
        }
        console.log(username);
    }, []);
    const login = () => {
        console.log("In login function");

        try {
            fetch('/api/auth/login', {headers: { email: username, password: password }})
            .then((response) => response.json())
            .then((login) => {
                console.log(login);
            });
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    // create the function to handle a new user
    // TODO: WHY IS IT BEING ROUTED THROUGH THE secureAPIRouter (in index.js line 76)
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    useEffect(() => {
        const newUsernameElement = document.getElementById('username');
        const newPasswordElement = document.getElementById('password');

        if (newUsernameElement && newPasswordElement) {
        setNewUsername(newUsernameElement.value);
        setNewPassword(newPasswordElement.value);
        console.log(newUsernameElement.value);
        }
        console.log(newUsername);
    }, []);
    const createUser = () => {
        console.log("In create user function");
        console.log(newUsername, newPassword)

        try {
            fetch('/api/auth/create', {method: 'post', body: JSON.stringify({ email: newUsername, password: newPassword }), headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }})
            .then((response) => response.json())
            .then((create) => {
                console.log(create);
                navigate('/meetings');
            });
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <main>
        <section>
            <h2>Login</h2>
            <div>
                <input type="text" placeholder="Username" required id="username"></input>
                <input type="password" placeholder="Password" required id="password"></input>
                <button type="submit" onClick={login}>Login</button>
            </div>
            <a href="#" className="create-account" onClick={createUser}>Create a new account</a>
        </section>
    </main>
  );
}