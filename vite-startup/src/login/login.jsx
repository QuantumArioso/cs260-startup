// import React from 'react';

// import { Unauthenticated } from './unauthenticated';
// import { Authenticated } from './authenticated';
// import { AuthState } from './authState';

// export function Login({ userName, authState, onAuthChange }) {
//   return (
//     <main className='container-fluid bg-secondary text-center'>
//       <div>
//         {authState !== AuthState.Unknown && <h1>Welcome to Simon</h1>}
//         {authState === AuthState.Authenticated && (
//           <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
//         )}
//         {authState === AuthState.Unauthenticated && (
//           <Unauthenticated
//             userName={userName}
//             onLogin={(loginUserName) => {
//               onAuthChange(loginUserName, AuthState.Authenticated);
//             }}
//           />
//         )}
//       </div>
//     </main>
//   );
// }

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

        try {
            fetch('/api/auth/create', {headers: { email: newUsername, password: newPassword }})
            .then((response) => response.json())
            .then((create) => {
                console.log(create);
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
            {/* <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Username" required></input>
                <input type="password" placeholder="Password" required></input>
                <button type="submit">Login</button>
            </form> */}
            <a href="#" className="create-account" onClick={createUser}>Create a new account</a>
        </section>
    </main>
  );
}