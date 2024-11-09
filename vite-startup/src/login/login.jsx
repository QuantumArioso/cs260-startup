import React from 'react';
import '../app.css';

export function Login() {
  return (
    <main>
        <section>
            <h2>Login</h2>
            <form action="meetings.html" method="get"> {/* This is a placeholder for the login form action */}
                <input type="text" placeholder="Username" required></input>
                <input type="password" placeholder="Password" required></input>
                <button type="submit" onclick="window.location.href='./meetings.html';">Login</button>
            </form>
            <a href="#" class="create-account">Create a new account</a>
        </section>
    </main>
  );
}