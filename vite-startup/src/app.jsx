import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Login } from './login/login';
import { Meetings } from './meetings/meetings';
import { Resources } from './resources/resources';
import { DEFAULT_MIN_BREAKPOINT } from 'react-bootstrap/esm/ThemeProvider';

export default function App() {
  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
        <nav className='navbar fixed-top navbar-dark'>
          <div className='navbar-brand'>
            <h1>Transgender Latter-day Saints</h1>
            <img src="./trans_flag.png" alt="An image of a trans flag" width="80"></img>
          </div>
          <menu className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='home'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='login'>
                Login
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='meetings'>
                Meetings
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='resources'>
                Resources
              </NavLink>
            </li>
          </menu>
        </nav>
        </header>

        <main>App components go here</main>

        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/login' element={<Login />} />
          <Route path='/meetings' element={<Meetings />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Author Name(s)</span>
            <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
              Source
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}