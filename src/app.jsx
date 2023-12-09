import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { About } from './about/about';
// import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    // play is temporarily on the nav bar. Will edit later. Is only here for 
    // testing purposes.
  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark">
            <div className="navbar-brand">
              Instant NOOOOO! Button
            </div>
            <menu className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="">
                  Home
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="play">
                  // Play-ceholder 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
            </menu>
          </nav>

        </header>


        <Routes>
            <Route path="/" element={<Login />} exact />
            <Route path="/play" element={<Play />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="bg-dark text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Anton Anderson</span>
              <a className="text-reset" href="https://github.com/Humperdink618/startup">
                GitHub
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