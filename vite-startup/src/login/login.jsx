import React from 'react';
import '../app.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export function Login() {
    const navigate = useNavigate();

    const login = () => {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      console.log("In login function");
      console.log(username, password);
      console.log("after username and password should be output");
      localStorage.setItem('username', username);
      console.log(localStorage.getItem('username'));
        

        try {
            fetch('/api/auth/login', {method: 'post', body: JSON.stringify({ email: username, password: password }), headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }})
              .then(response => {
                if (response.status === 401) {
                  return response.json().then(data => {
                    console.log(data.msg); // 'Unauthorized'
                  });
                } else {
                  return response.json().then(data => {
                    console.log(data.id); // The user ID
                    navigate('/meetings');
                  });
                }
        });
            // .then((response) => response.json())
            // .then((login) => {
            //     console.log(login);
            //     navigate('/meetings');
            // });
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    const createUser = () => {
        const newUsernameElement = document.getElementById('username').value;
        const newPasswordElement = document.getElementById('password').value;
        console.log("In create user function");
        console.log(newUsernameElement, newPasswordElement);
        console.log("after newUsername and newPassword should be output");
        localStorage.setItem('username', newUsernameElement);
        console.log(localStorage.getItem('username'));

        try {
            fetch('/api/auth/create', {method: 'post', body: JSON.stringify({ email: newUsernameElement, password: newPasswordElement }), headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }})
              .then(response => {
                if (response?.status === 200) {
                  return response.json().then(data => {
                    console.log(data.id); // The new user ID
                    navigate('/meetings');
                  });
                } else {
                  return response.json().then(data => {
                    console.log(data.msg); // 'Existing user'
                  });
                }
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